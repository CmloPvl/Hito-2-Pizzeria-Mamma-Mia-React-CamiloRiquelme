import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";


// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Cart from "./components/Cart";

// React Router 
// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      
      <Pizza />

      <Footer />
    </>
  );
}

export default App;
