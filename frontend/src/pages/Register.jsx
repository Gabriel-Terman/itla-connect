import { useState } from "react";

import "../styles/auth.css";

import logoItla from "../assets/ITLA-logo-fondo-blanco.png";
import fondoLogin from "../assets/Itla-fondo-login.png";
import { useNavigate } from "react-router-dom";


import {
  registerUser,
  traducirErrorFirebase,
} from "../services/authService";

function Register() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contrasena !== confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await registerUser({
        nombre,
        apellido,
        usuario,
        correo,
        contrasena,
      });
      
      navigate("/");


    } catch (error) {
      alert(traducirErrorFirebase(error));
    }
  };

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

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <div className="row">
            <input
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) =>
                setNombre(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Apellido"
              value={apellido}
              onChange={(e) =>
                setApellido(e.target.value)
              }
            />
          </div>

          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) =>
              setUsuario(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) =>
              setCorreo(e.target.value)
            }
          />

          <div className="row">
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) =>
                setContrasena(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmar}
              onChange={(e) =>
                setConfirmar(e.target.value)
              }
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