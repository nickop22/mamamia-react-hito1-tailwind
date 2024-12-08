import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login.jsx";
import Registro from "./components/Registro.jsx";
import CartPizza from "./components/CartPizza.jsx";
import Pizza from "./components/Pizza.jsx";
function App() {
  return (
    <>
      <Navbar />
      {/* <Home />
       <Registro />
      <Login />
      <CartPizza /> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
