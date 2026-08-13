import PostCard from "../components/PostCard";
import "../styles/profile.css";
import fondo from "../assets/Itla-fondo-login.png";

function Profile() {
  const publicaciones = [
    {
      autor: "Gabriel Terman",
      categoria: "Académico",
      contenido: "Busco apuntes de React.",
      fecha: "Hace 1 día",
    },
    {
      autor: "Gabriel Terman",
      categoria: "General",
      contenido: "Comparto recursos para Programación Web.",
      fecha: "Hace 3 días",
    },
  ];

  return (
  <div
    className="profile-page"
    style={{
      backgroundImage: `url(${fondo})`,
    }}
  >
    <div className="profile-container">

      <div className="profile-card">

        <div className="profile-avatar">
          GT
        </div>

        <h1>Gabriel Terman</h1>

        <p className="profile-role">
          Estudiante de Desarrollo de Software
        </p>

        <div className="profile-stats">

          <div>
            <h3>2</h3>
            <span>Publicaciones</span>
          </div>

        </div>

      </div>

      <div className="profile-posts">

        <h2>Mis publicaciones</h2>

        {publicaciones.map((post, index) => (
          <PostCard
            key={index}
            autor={post.autor}
            categoria={post.categoria}
            contenido={post.contenido}
            fecha={post.fecha}
          />
        ))}

      </div>

    </div>
  </div>
  );
}

export default Profile;