import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza.jsx";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes.jsx";
function App() {
  return (
    <div className="flex flex-col min-h-screem">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
