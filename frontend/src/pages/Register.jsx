import "../styles/auth.css";

import logoItla from "../assets/ITLA-logo-fondo-blanco.png";
import fondoLogin from "../assets/Itla-fondo-login.png";

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

        <p className="auth-description">
          Registrate para ser parte de ITLA Connect.
        </p>

        <form className="auth-form">

          <div className="row">
            <input
              type="text"
              placeholder="Nombre"
            />

            <input
              type="text"
              placeholder="Apellido"
            />
          </div>

          <input
            type="text"
            placeholder="Usuario"
          />

          <input
            type="email"
            placeholder="Correo"
          />

          <div className="row">
            <input
              type="password"
              placeholder="Contraseña"
            />

            <input
              type="password"
              placeholder="Confirmar contraseña"
            />
          </div>

          <button type="submit">
            Registrarse
          </button>

        </form>

      </div>
    </div>
  );
}

export default Register;