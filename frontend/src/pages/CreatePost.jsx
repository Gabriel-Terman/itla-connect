import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { crearPublicacion } from "../services/postService";
import { useAuth } from "../firebase/AuthContext";

const CATEGORIAS = ["General", "Académico", "Eventos", "Empleo"];

function CreatePost() {
  const { user, userData } = useAuth();
  const navigate = useNavigate();

  const [contenido, setContenido] = useState("");
  const [categoria, setCategoria] = useState("General");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!contenido.trim()) {
      setError("Escribe algo antes de publicar.");
      return;
    }

    try {
      setCargando(true);
      await crearPublicacion({
        contenido,
        categoria,
        autorNombre: userData ? `${userData.nombre} ${userData.apellido}` : "Usuario",
        authorId: user.uid,
      });
      navigate("/");
    } catch (err) {
      setError("No se pudo publicar. Intenta de nuevo.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="create-post-container">
        <h1>Crear Publicación</h1>

        <form className="create-post-form" onSubmit={handleSubmit}>
          <textarea
            placeholder="¿Qué quieres compartir con la comunidad ITLA?"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            rows={5}
            required
          />

          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            {CATEGORIAS.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" disabled={cargando}>
            {cargando ? "Publicando..." : "Publicar"}
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}

export default CreatePost;
