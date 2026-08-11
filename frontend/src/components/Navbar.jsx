import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>ITLA Connect</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/register">Registro</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;