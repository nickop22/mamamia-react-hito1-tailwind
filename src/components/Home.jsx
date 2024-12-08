import React, { useEffect, useState } from "react";
import Header from "./Header";
import Grid from "./Grid";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    const obtenerPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) {
          throw new Error("Error al obtener las pizzas");
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    };

    obtenerPizzas();
  }, []);
  return (
    <div>
      <Header />
      <div>
        <h1>Nuestras Pizzas</h1>
        <div className="pizza-list">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="pizza-card">
              <h2>{pizza.name}</h2>
              <p>{pizza.desc}</p>
              <p>Precio: ${pizza.price}</p>
              <img src={pizza.img} alt={pizza.name} />
              <p>Ingredientes: {pizza.ingredients}</p>
            </div>
          ))}
        </div>
      </div>
      <Grid />
    </div>
  );
}

export default Home;
