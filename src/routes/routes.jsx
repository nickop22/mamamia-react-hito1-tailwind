import React from "react";
import Home from "../components/Home";
import Login from "../components/Login";
import Registro from "../components/Registro";
import CartPizza from "../components/CartPizza";
import Pizza from "../components/Pizza";
import NotFound from "../components/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <Registro /> },
  { path: "/cartPizza", element: <CartPizza /> },
  { path: "/pizza", element: <Pizza /> },
  { path: "/notFound", element: <NotFound /> },
];

export default routes;
