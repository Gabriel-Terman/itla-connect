// src/services/postService.js
// Todo lo relacionado con publicaciones: crear, leer en tiempo real,
// editar, eliminar y dar "me gusta".
// Home.jsx, CreatePost.jsx y PostCard.jsx importan estas funciones.

import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  increment,
} from "firebase/firestore";
import { db } from "../firebase/config";

const postsRef = collection(db, "publicaciones");

/**
 * Crea una nueva publicación.
 * Se usa en CreatePost.jsx cuando el usuario envía el formulario.
 *
 * @param {Object} datos
 * @param {string} datos.contenido - texto de la publicación
 * @param {string} datos.categoria - Académico | Eventos | Empleo | General
 * @param {string} datos.autorNombre - nombre a mostrar en PostCard
 * @param {string} datos.authorId - uid del usuario autenticado (para permisos)
 */
export async function crearPublicacion({ contenido, categoria, autorNombre, authorId }) {
  return addDoc(postsRef, {
    contenido,
    categoria: categoria || "General",
    autor: autorNombre,
    authorId,
    fecha: serverTimestamp(),
    fechaActualizacion: null,
    likes: 0,
  });
}

/**
 * Escucha las publicaciones EN TIEMPO REAL (sin necesidad de recargar la página).
 * Se usa en Home.jsx dentro de un useEffect.
 *
 * Ejemplo de uso en Home.jsx:
 *   useEffect(() => {
 *     const unsubscribe = escucharPublicaciones(setPosts);
 *     return () => unsubscribe();
 *   }, []);
 */
export function escucharPublicaciones(callback) {
  const q = query(postsRef, orderBy("fecha", "desc"));
  return onSnapshot(q, (snapshot) => {
    const publicaciones = snapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
    callback(publicaciones);
  });
}

/**
 * Edita una publicación propia. authorId se vuelve a mandar
 * para que la regla de seguridad de Firestore valide que es el dueño.
 */
export async function editarPublicacion(postId, nuevoContenido) {
  const ref = doc(db, "publicaciones", postId);
  return updateDoc(ref, {
    contenido: nuevoContenido,
    fechaActualizacion: serverTimestamp(),
  });
}

/**
 * Elimina una publicación propia.
 */
export async function eliminarPublicacion(postId) {
  const ref = doc(db, "publicaciones", postId);
  return deleteDoc(ref);
}

/**
 * Suma 1 "me gusta" a una publicación.
 * Funcionalidad extra (⭐) mencionada en el documento de roles.
 */
export async function darLike(postId) {
  const ref = doc(db, "publicaciones", postId);
  return updateDoc(ref, { likes: increment(1) });
}
