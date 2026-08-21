// src/components/ProtectedRoute.jsx
// Envuelve las rutas que requieren estar autenticado (ej. "Crear publicación").
// Si no hay sesión, redirige automáticamente a /login.
// Home debe seguir siendo pública, así que NO se envuelve con esto.

import { Navigate } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Mientras Firebase confirma si hay sesión activa o no.
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Cargando...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
