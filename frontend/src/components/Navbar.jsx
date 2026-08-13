import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";
import { logoutUser } from "../services/authService";
import "../styles/navbar.css";

function Navbar() {
  const { isAuthenticated, userData, loading } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logoutUser();
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <h2>ITLA Connect</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        {!loading && isAuthenticated && (
          <>
            <li>
              <Link to="/create-post">Publicar</Link>
            </li>
            <li>Hola, {userData?.nombre || "usuario"}</li>
            <li>
              <button className="nav-logout-btn" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </li>
          </>
        )}

        {!loading && !isAuthenticated && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Registro</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
