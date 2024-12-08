import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p001")
      .then((response) => response.json())
      .then((data) => setPizza(data))
      .catch((error) => console.error("Error al obtener la pizza:", error));
  }, []);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>Precio: ${pizza.price}</p>
      <p>Ingredientes: {pizza.ingredients.join(" ")}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
