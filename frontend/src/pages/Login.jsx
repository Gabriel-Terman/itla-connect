import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser, traducirErrorFirebase } from "../services/authService";
import "../styles/auth.css";

function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      setCargando(true);
      await loginUser(correo, contrasena);
      navigate("/");
    } catch (err) {
      setError(traducirErrorFirebase(err));
    } finally {
      setCargando(false);
    }
  }

  return (
    <div className="auth-container">
      <h1>Iniciar Sesión</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        {error && <p className="auth-error">{error}</p>}

        <button type="submit" disabled={cargando}>
          {cargando ? "Entrando..." : "Entrar"}
        </button>
      </form>

      <p className="auth-switch">
        ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
      </p>
    </div>
  );
}

export default Login;
