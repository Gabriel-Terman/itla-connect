function Register() {
  return (
    <div>
      <h1>Registro</h1>

      <form>
        <input placeholder="Nombre" />

        <input placeholder="Apellido" />

        <input
          type="email"
          placeholder="Correo"
        />

        <input
          type="password"
          placeholder="Contraseña"
        />

        <button>
          Crear Cuenta
        </button>
      </form>
    </div>
  );
}

export default Register;