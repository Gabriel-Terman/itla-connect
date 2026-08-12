import "../styles/auth.css";

import logoItla from "../assets/ITLA-logo-fondo-blanco.png";
import fondoLogin from "../assets/Itla-fondo-login.jpg";

function Register() {
  return (
    <div
      className="auth-page"
      style={{
        backgroundImage: `url(${fondoLogin})`,
      }}
    >
      <div className="auth-card">

        <img
          src={logoItla}
          alt="ITLA"
          className="auth-logo"
        />

        <h2>Crear Cuenta</h2>

        <form className="auth-form">

          <input
            type="text"
            placeholder="Nombre"
          />

          <input
            type="text"
            placeholder="Apellido"
          />

          <input
            type="text"
            placeholder="Usuario"
          />

          <input
            type="email"
            placeholder="Correo"
          />

          <input
            type="password"
            placeholder="Contraseña"
          />

          <input
            type="password"
            placeholder="Confirmar contraseña"
          />

          <button type="submit">
            Registrarse
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;