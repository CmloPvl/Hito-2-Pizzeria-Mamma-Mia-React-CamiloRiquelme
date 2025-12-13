import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart"; 

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 👇 RUTA DEL CARRITO AGREGADA */}
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
