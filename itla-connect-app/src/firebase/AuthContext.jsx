// src/firebase/AuthContext.jsx
// Provee el usuario autenticado a TODA la app (Navbar, Home, ProtectedRoute, etc.)
// sin tener que pasar props manualmente por cada componente.

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./config";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);       // objeto de Firebase Auth (uid, email, etc.)
  const [userData, setUserData] = useState(null); // documento de Firestore (nombre, apellido, usuario)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Este listener se dispara automáticamente cuando alguien
    // inicia sesión, cierra sesión, o al recargar la página.
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        const snap = await getDoc(doc(db, "usuarios", firebaseUser.uid));
        setUserData(snap.exists() ? snap.data() : null);
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = { user, userData, loading, isAuthenticated: !!user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook que usarán Navbar.jsx, Home.jsx, CreatePost.jsx, ProtectedRoute.jsx, etc.
// Ejemplo de uso: const { user, userData, isAuthenticated } = useAuth();
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un <AuthProvider>");
  }
  return context;
}
