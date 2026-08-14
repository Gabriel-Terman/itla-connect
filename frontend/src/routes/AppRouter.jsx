import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreatePost from "../pages/CreatePost";
import Profile from "../pages/Profile";
import ProtectedRoute from "../components/ProtectedRoute";


function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createPost" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default AppRouter;