// src/firebase/config.js
// Inicializa la conexión con Firebase (Auth + Firestore).
// Los valores reales NUNCA se escriben aquí directamente:
// se leen desde el archivo .env.local (ver .env.local.example).

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics solo funciona en navegador (no en SSR) y Firebase recomienda
// verificar soporte antes de inicializarlo, por eso el isSupported().
isSupported().then((soportado) => {
  if (soportado) getAnalytics(app);
});

export default app;
