import ReactDOM from "react-dom/client";

import App from "./App";

import { AuthProvider }
  from "./firebase/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <AuthProvider>

    <App />

  </AuthProvider>

);