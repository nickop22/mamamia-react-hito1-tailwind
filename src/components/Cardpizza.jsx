import pizzas from "../assets/pizzas";
const Cardpizza = ({ img, name, ingredientes, price }) => {
  return (
    <div className="border border-yellow-500 rounded-lg shadow-md text-center m-4 bg-white">
      {/* Imagen */}
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Contenido de la tarjeta */}
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <hr className="my-2" />

        <p className="text-gray-700 font-semibold">Ingredientes:</p>
        <p className="text-sm text-gray-500">{ingredientes}</p>
      </div>

      {/* Precio */}
      <hr className="my-2" />
      <h4 className="text-lg font-semibold pb-2">
        Precio: $<span className="text-yellow-500">{price}</span>
      </h4>

      {/* Botones */}
      <div className="flex justify-around p-4">
        <a
          href="#"
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
        >
          Ver más 👀
        </a>
        <a
          href="#"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Añadir 🛒
        </a>
      </div>
    </div>
  );
};

export default Cardpizza;
