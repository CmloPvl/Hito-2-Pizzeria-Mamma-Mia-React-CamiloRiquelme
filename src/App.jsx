import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Pizza (id fijo para este hito) */}
        <Route path="/pizza/p001" element={<Pizza />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* NotFound explícito */}
        <Route path="/404" element={<NotFound />} />

        {/* Cualquier ruta no existente */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
