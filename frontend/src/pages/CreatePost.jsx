import { useState } from "react";

import "../styles/createPost.css";

function CreatePost() {

  const [contenido, setContenido] = useState("");

  return (
    <div className="create-post-page">

      <div className="create-post-card">

        <h1>Crear Publicación</h1>

        <p className="create-post-description">
          Comparte información con la comunidad ITLA.
        </p>

        <div className="author-box">

          <div className="author-avatar">
            U
          </div>

          <div className="author-info">

            <h3>Usuario desconocido</h3>

            <p>
              Publicarás como visitante
            </p>

          </div>

        </div>

        <form className="create-post-form">

          <input
            type="text"
            placeholder="Título"
          />

          <select>
            <option>Académico</option>
            <option>Eventos</option>
            <option>Empleo</option>
            <option>General</option>
          </select>

          <textarea
            placeholder="¿Qué deseas compartir?"
            value={contenido}
            onChange={(e) =>
              setContenido(e.target.value)
            }
          />

          <button>
            Publicar
          </button>

        </form>

        <div className="preview-container">

          <h2>Vista previa</h2>

          <p>
            {contenido ||
              "Tu publicación aparecerá aquí..."}
          </p>

        </div>

      </div>

    </div>
  );
}

export default CreatePost;