# ITLA Connect

ITLA Connect es una aplicación web desarrollada para la comunidad del Instituto Tecnológico de Las Américas (ITLA), permitiendo a los usuarios registrarse, iniciar sesión y compartir publicaciones con otros estudiantes mediante una plataforma tipo red social.

## Funcionalidades

- Registro de usuarios.
- Inicio de sesión.
- Cierre de sesión.
- Creación de publicaciones.
- Feed dinámico de publicaciones.
- Perfil de usuario.
- Visualización de publicaciones propias.
- Protección de rutas para usuarios autenticados.
- Integración con Firebase Authentication.
- Integración con Cloud Firestore.

## Tecnologías Utilizadas

- React
- Vite
- React Router DOM
- Firebase Authentication
- Firebase Firestore
- CSS3

## Estructura del Proyecto

```text
src/
├── assets/
├── components/
├── firebase/
├── pages/
├── routes/
├── services/
├── styles/
├── App.jsx
└── main.jsx
```

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
npm run dev
```

## Configuración

Crear un archivo `.env.local` con las credenciales de Firebase.

Ejemplo:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Autor

Gabriel Terman

## Materia

Programación Web

Instituto Tecnológico de Las Américas (ITLA)