import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";
import { logoutUser } from "../services/authService";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/ITLA-logo-fondo-blanco.png";
import "../styles/navbar.css";

function Navbar() {

  const menuRef = useRef(null);

  const {
    isAuthenticated,
    userData,
  } = useAuth();

  const navigate = useNavigate();

  const [menuAbierto, setMenuAbierto] =
    useState(false);
    useEffect(() => {

      const handleClickOutside = (event) => {

        if (
          menuRef.current &&
          !menuRef.current.contains(event.target)
        ) {
          setMenuAbierto(false);
        }

      };

      document.addEventListener(
        "mousedown",
        handleClickOutside
      );

      return () => {
        document.removeEventListener(
          "mousedown",
          handleClickOutside
        );
      };

    }, []);

  const handleLogout = async () => {

    try {

      await logoutUser();

      navigate("/");

    } catch (error) {

      console.error(error);

      alert("Error al cerrar sesión");

    }

  };

  return (

    <nav className="navbar">

      <Link to="/" className="logo-container">
        <img
          src={logo}
          alt="ITLA Connect"
          className="logo"
        />
      </Link>

      <ul className="nav-links">

        <li>
          <Link to="/">
            Inicio
          </Link>
        </li>

        {isAuthenticated ? (
          <li 
          className="user-menu"
          ref={menuRef}
          >

            <button
              className="user-btn"
              onClick={() =>
                setMenuAbierto(!menuAbierto)
              }
            >
              {userData?.nombre || "Usuario"} ▼
            </button>

            {menuAbierto && (

              <div className="dropdown-menu">

                <Link
                  to="/createPost"
                  onClick={() =>
                    setMenuAbierto(false)
                  }
                >
                  Publicar
                </Link>

                <Link
                  to="/profile"
                  onClick={() =>
                    setMenuAbierto(false)
                  }
                >
                  Perfil
                </Link>

                <hr />

                <button
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>

              </div>

            )}

          </li>
          ) : (
          <>

            <li>
              <Link to="/login">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register">
                Registrarse
              </Link>
            </li>

          </>
        )}

      </ul>

    </nav>

  );
}

export default Navbar;