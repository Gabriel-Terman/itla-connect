function Login() {
  return (
    <div>
      <h1>Iniciar Sesión</h1>

      <form>
        <input
          type="email"
          placeholder="Correo"
        />

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