import { useState } from "react";

import "../styles/auth.css";

import logoItla from "../assets/ITLA-logo-fondo-blanco.png";
import fondo from "../assets/Itla-fondo-login.png";
import { useNavigate } from "react-router-dom";

import {
  loginUser,
  traducirErrorFirebase,
} from "../services/authService";

function Login() {

  const navigate = useNavigate();
  
  const [correo, setCorreo] =
    useState("");

  const [contrasena, setContrasena] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(
        correo,
        contrasena
      );

      navigate("/");
      
    } catch (error) {
      alert(traducirErrorFirebase(error));
    }
  };

  return (
    <div
      className="auth-page"
      style={{
        backgroundImage: `url(${fondo})`,
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

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) =>
              setCorreo(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) =>
              setContrasena(e.target.value)
            }
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