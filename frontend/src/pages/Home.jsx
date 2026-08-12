import Footer from "../components/Footer";
import PostCard from "../components/PostCard";

import "../styles/home.css";

function Home() {
  const publicaciones = [
    {
      autor: "Juan Pérez",
      categoria: "Académico",
      contenido: "Busco apuntes de React para el examen final.",
      fecha: "Hace 10 minutos",
    },
    {
      autor: "María López",
      categoria: "Eventos",
      contenido: "Mañana habrá una charla sobre Inteligencia Artificial.",
      fecha: "Hace 1 hora",
    },
    {
      autor: "Carlos Gómez",
      categoria: "Empleo",
      contenido: "Comparto vacante para pasantía en desarrollo web.",
      fecha: "Hace 2 horas",
    },
  ];

  return (
    <>
      <section className="create-post-box">

        <h3>
          ¿Qué deseas compartir hoy?
        </h3>

        <button className="create-btn">
          + Crear Publicación
        </button>

      </section>

      <div className="home-page">
        <main className="home">

          <section className="actions">
            <input
              type="text"
              placeholder="Buscar publicaciones..."
              className="search-input"
            />

            <select className="category-filter">
              <option>Todas</option>
              <option>Académico</option>
              <option>Eventos</option>
              <option>Empleo</option>
              <option>General</option>
            </select>
          </section>

          <section className="feed">
            <h2>Publicaciones recientes</h2>

            {publicaciones.map((post, index) => (
              <PostCard
                key={index}
                autor={post.autor}
                categoria={post.categoria}
                contenido={post.contenido}
                fecha={post.fecha}
              />
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;