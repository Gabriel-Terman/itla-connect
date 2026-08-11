import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>ITLA Connect</h2>

      <ul>
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