import "../styles/auth.css";

function Login() {
  return (
    <div className="auth-container">

      <h1>Iniciar Sesión</h1>

      <form className="auth-form">
        <input type="email" placeholder="Correo" />

        <input
          type="password"
          placeholder="Contraseña"
        />

        <button>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;