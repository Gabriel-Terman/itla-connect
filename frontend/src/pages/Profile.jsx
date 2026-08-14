import { useEffect, useState } from "react";

import PostCard from "../components/PostCard";

import "../styles/profile.css";

import fondo from "../assets/Itla-fondo-login.png";

import { useAuth } from "../firebase/AuthContext";
import { escucharPublicaciones } from "../services/postService";

function Profile() {

  const {
    isAuthenticated,
    user,
    userData,
  } = useAuth();

  const [publicaciones, setPublicaciones] =
    useState([]);

  useEffect(() => {

    const unsubscribe =
      escucharPublicaciones((posts) => {

        const misPosts = posts.filter(
          (post) =>
            post.authorId === user?.uid
        );

        setPublicaciones(misPosts);

      });

    return () => unsubscribe();

  }, [user]);

  if (!isAuthenticated) {
    return (
      <div>
        Debes iniciar sesión para acceder al perfil.
      </div>
    );
  }

  if (!userData) {
    return (
      <div>
        Cargando perfil...
      </div>
    );
  }

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
            {userData?.nombre?.charAt(0)}
            {userData?.apellido?.charAt(0)}
          </div>

          <h1>
            {userData?.nombre}
            {" "}
            {userData?.apellido}
          </h1>

          <p className="profile-role">
            @{userData?.usuario}
          </p>

          <div className="profile-stats">

            <div>
              <h3>
                {publicaciones.length}
              </h3>

              <span>
                Publicaciones
              </span>
            </div>

          </div>

        </div>

        <div className="profile-posts">

          <h2>
            Mis publicaciones
          </h2>

          {publicaciones.length === 0 ? (
            <p className="empty-message">
              Aún no has realizado publicaciones.
            </p>
          ) : (
            publicaciones.map((post) => (
              <PostCard
                key={post.id}
                autor={post.autor}
                categoria={post.categoria}
                contenido={post.contenido}
                fecha={
                  post.fecha?.toDate
                    ? post.fecha
                        .toDate()
                        .toLocaleString()
                    : "Reciente"
                }
              />
            ))
          )}

        </div>

      </div>
    </div>
  );
}

export default Profile;