import { useState } from "react";

import "../styles/createPost.css";

import { useAuth } from "../firebase/AuthContext";
import { crearPublicacion } from "../services/postService";
import { Link, useNavigate } from "react-router-dom";

function CreatePost() {

  const {
    user,
    userData,
    isAuthenticated,
  } = useAuth();

  const [categoria, setCategoria] = useState("General");
  const [contenido, setContenido] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await crearPublicacion({
        contenido,
        categoria,
        autorNombre:
          userData?.usuario ||
          user?.displayName ||
          "Usuario",

        authorId: user.uid,
      });

      alert("Publicación creada correctamente");
      navigate("/");

      setCategoria("General");
      setContenido("");

    } catch (error) {

      console.error(error);

      alert("Error al crear publicación");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="create-post-page">

        <div className="create-post-card">

          <h1>Debes iniciar sesión</h1>

          <p className="create-post-description">
            Solo los usuarios registrados pueden crear publicaciones.
          </p>

          <Link
            to="/login"
            className="login-required-btn"
          >
            Iniciar Sesión
          </Link>

        </div>

      </div>
    );
  }

  return (
    <div className="create-post-page">

      <div className="create-post-card">

        <div className="author-box">

          <div className="author-avatar">
            {userData?.nombre?.charAt(0)}
            {userData?.apellido?.charAt(0)}
          </div>

          <div className="author-info">

            <h3>
              {userData?.nombre} {userData?.apellido}
            </h3>

            <p>
              Publicarás desde tu cuenta
            </p>

          </div>

        </div>

        <form
          className="create-post-form"
          onSubmit={handleSubmit}
        >

          <select
            value={categoria}
            onChange={(e) =>
              setCategoria(e.target.value)
            }
          >
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

          <button type="submit">
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