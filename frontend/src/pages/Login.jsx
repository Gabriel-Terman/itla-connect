import "../styles/auth.css";
import logoItla from "../assets/ITLA-logo-fondo-blanco.png";
import fondoLogin from "../assets/Itla-fondo-login.png";

function Login() {
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

        <h2>Iniciar Sesión</h2>

        <p className="auth-description">
          Accede a ITLA Connect con tu cuenta.
        </p>

        <form className="auth-form">

          <input
            type="email"
            placeholder="Correo electrónico"
          />

          <input
            type="password"
            placeholder="Contraseña"
          />

          <button type="submit">
            Iniciar Sesión
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;