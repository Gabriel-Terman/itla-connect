import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import PostCard from "../components/PostCard";

import { useAuth } from "../firebase/AuthContext";
import { escucharPublicaciones } from "../services/postService";

import "../styles/home.css";

function Home() {

  const { isAuthenticated } = useAuth();

  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {

    const unsubscribe =
      escucharPublicaciones(
        setPublicaciones
      );

    return () => unsubscribe();

  }, []);

  return (
    <>
      <section className="create-post-box">

        {isAuthenticated ? (
          <>
            <h3>
              ¿Qué deseas compartir hoy?
            </h3>

            <Link
              to="/createPost"
              className="create-btn"
            >
              Crear Publicación
            </Link>
          </>
        ) : (
          <>
            <h3>
              Inicia sesión para crear publicaciones
            </h3>

            <Link
              to="/login"
              className="create-btn"
            >
              Iniciar Sesión
            </Link>
          </>
        )}

      </section>

      <div className="home-page">

        <main className="home">

          <section className="feed">

            <h2>Publicaciones recientes</h2>

            {publicaciones.length === 0 ? (
              <div className="empty-feed">

                <p>
                  No hay publicaciones todavía.
                </p>

              </div>
            ) : (
              publicaciones.map((post) => (

                <PostCard
                  key={post.id}
                  authorId={post.authorId}
                  id={post.id}
                  likes={post.likes || 0}
                  autor={post.autor}
                  categoria={post.categoria}
                  contenido={post.contenido}
                  fecha={
                    post.fecha?.toDate
                      ? post.fecha.toDate().toLocaleString()
                      : "Reciente"
                  }
                />

              ))
            )}

          </section>

        </main>

      </div>

      <Footer />

    </>
  );
}

export default Home;