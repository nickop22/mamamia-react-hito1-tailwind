import CardPizza from "./Cardpizza";
import pizzas from "../assets/pizzas";

const Grid = () => {
  return (
    <div className="container mx-auto px-4">
      {" "}
      {/* Contenedor principal con centrado */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index} // Clave única (idealmente sería un id único si está disponible)
            img={pizza.img}
            name={pizza.name}
            price={pizza.price}
            ingredientes={pizza.ingredientes}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
