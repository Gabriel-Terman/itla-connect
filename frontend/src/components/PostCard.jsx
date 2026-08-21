import { useState } from "react";

import { useAuth } from "../firebase/AuthContext";

import {
  darLike,
  editarPublicacion,
  eliminarPublicacion,
} from "../services/postService";

function PostCard({
  id,
  authorId,
  likes,
  autor,
  categoria,
  contenido,
  fecha,
}) {

  const { user } = useAuth();

  const [editando, setEditando] =
    useState(false);

  const [textoEditado, setTextoEditado] =
    useState(contenido);

  const handleLike = async () => {

    try {

      await darLike(id);

    } catch (error) {

      console.error(error);

    }

  };

  const handleSave = async () => {

    try {

      await editarPublicacion(
        id,
        textoEditado
      );

      setEditando(false);

    } catch (error) {

      console.error(error);

      alert("Error al editar publicación");

    }

  };

  const handleDelete = async () => {

    const confirmar = window.confirm(
      "¿Deseas eliminar esta publicación?"
    );

    if (!confirmar) return;

    try {

      await eliminarPublicacion(id);

    } catch (error) {

      console.error(error);

      alert("Error al eliminar publicación");

    }

  };

  const formatearFecha = (fecha) => {

    if (!fecha) return "Reciente";

    try {

      const fechaObj =
        typeof fecha === "string"
          ? new Date(fecha)
          : fecha;

      return fechaObj.toLocaleString("es-DO", {
        dateStyle: "short",
        timeStyle: "short",
      });

    } catch {

      return "Reciente";

    }

  };

  return (

    <div className="post-card">

      <div className="post-header">

        <div className="avatar">
          {autor?.charAt(0).toUpperCase()}
        </div>

        <div>

          <h3>{autor}</h3>

          <span className="categoria">
            {categoria}
          </span>

        </div>

      </div>

      {editando ? (

        <textarea
          value={textoEditado}
          onChange={(e) =>
            setTextoEditado(e.target.value)
          }
        />

      ) : (

        <p>{contenido}</p>

      )}

      <div className="post-actions">

        <button onClick={handleLike}>
          {/* Quedo en desarrollo ya que solo funciona para el usuario que creo el post */}
        ❤️ {likes} 
        </button>

        <button>
        💬
        </button>

        <button>
          ↪
        </button>

        {user?.uid === authorId &&
          !editando && (
            <>
              <button
                onClick={() =>
                  setEditando(true)
                }
              >
              📝
              </button>

              <button
                onClick={handleDelete}
              >
              🗑️
              </button>
            </>
          )}

        {editando && (

          <button
            onClick={handleSave}
          >
            💾
          </button>

        )}

      </div>

      <small>
        {formatearFecha(fecha)}
      </small>

    </div>

  );

}

export default PostCard;