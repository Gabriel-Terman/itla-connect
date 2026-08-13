import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/ITLA-logo-fondo-blanco.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">

  <img
    src={logo}
    alt="ITLA Connect"
    className="logo"
  />

  </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/createPost">Publicar</Link>
        </li>

        <li>
          <Link to="/register">Registrarse</Link>
        </li>

        <li>
          <Link to="/profile">Perfil</Link>
        </li>
      
        <li>
          <Link to="/">Cerrar sesión</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;