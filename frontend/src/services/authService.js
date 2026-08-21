// src/services/authService.js
// Funciones que Login.jsx y Register.jsx van a importar directamente.
// No contienen ningún JSX: solo lógica de datos.

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/config";

/**
 * Registra un nuevo usuario en Firebase Authentication
 * y crea su documento correspondiente en la colección "usuarios".
 *
 * Coincide con los campos del formulario de Register.jsx:
 * nombre, apellido, usuario, correo, contraseña.
 */
export async function registerUser({ nombre, apellido, usuario, correo, contrasena }) {
  // 1. Crear la cuenta en Firebase Authentication
  const credenciales = await createUserWithEmailAndPassword(auth, correo, contrasena);
  const uid = credenciales.user.uid;

  // 2. Actualizar el displayName en Auth (útil para mostrarlo rápido en la UI)
  await updateProfile(credenciales.user, { displayName: `${nombre} ${apellido}` });

  // 3. Crear el documento del usuario en Firestore (colección "usuarios")
  await setDoc(doc(db, "usuarios", uid), {
    uid,
    nombre,
    apellido,
    usuario,
    correo,
    fechaRegistro: serverTimestamp(),
  });

  return credenciales.user;
}

/**
 * Inicia sesión con correo y contraseña.
 * Login.jsx solo necesita llamar loginUser(correo, contrasena).
 */
export async function loginUser(correo, contrasena) {
  const credenciales = await signInWithEmailAndPassword(auth, correo, contrasena);
  return credenciales.user;
}

/**
 * Cierra la sesión del usuario actual.
 * Se usa en el botón "Cerrar sesión" del Navbar.
 */
export async function logoutUser() {
  await signOut(auth);
}

/**
 * Traduce los códigos de error de Firebase a mensajes en español
 * para mostrar en los formularios de Login/Register.
 */
export function traducirErrorFirebase(error) {
  const codigo = error?.code || "";
  const mensajes = {
    "auth/email-already-in-use": "Ese correo ya está registrado.",
    "auth/invalid-email": "El correo no tiene un formato válido.",
    "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
    "auth/user-not-found": "No existe una cuenta con ese correo.",
    "auth/wrong-password": "Contraseña incorrecta.",
    "auth/invalid-credential": "Correo o contraseña incorrectos.",
    "auth/too-many-requests": "Demasiados intentos. Intenta de nuevo más tarde.",
  };
  return mensajes[codigo] || "Ocurrió un error. Intenta de nuevo.";
}
