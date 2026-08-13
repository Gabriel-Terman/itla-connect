import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PostCard from "../components/PostCard";
import { escucharPublicaciones } from "../services/postService";

import "../styles/home.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Se conecta en tiempo real: si alguien publica algo nuevo,
    // este listado se actualiza solo, sin recargar la página.
    const unsubscribe = escucharPublicaciones((data) => {
      setPosts(data);
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />

      <main className="home">
        <h1>Muro Interactivo</h1>

        {cargando && <p>Cargando publicaciones...</p>}

        {!cargando && posts.length === 0 && (
          <p>Todavía no hay publicaciones. ¡Sé el primero en publicar!</p>
        )}

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default Home;
