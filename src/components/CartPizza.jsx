// CarritoCompras.jsx
import React, { useState } from "react";
import productos from "../assets/pizzas"; // Importa el array de productos

const CartPizza = () => {
  // Estado para almacenar la cantidad de cada producto en el carrito
  const [cantidades, setCantidades] = useState(
    productos.reduce((acc, producto) => {
      acc[producto.id] = 0; // Inicialmente, todos los productos tienen una cantidad de 0
      return acc;
    }, {})
  );

  // Función para aumentar la cantidad de un producto
  const agregarCantidad = (productoId) => {
    setCantidades((cantidadesAnteriores) => ({
      ...cantidadesAnteriores,
      [productoId]: cantidadesAnteriores[productoId] + 1,
    }));
  };

  // Función para disminuir la cantidad de un producto
  const disminuirCantidad = (productoId) => {
    setCantidades((cantidadesAnteriores) => ({
      ...cantidadesAnteriores,
      [productoId]: Math.max(0, cantidadesAnteriores[productoId] - 1),
    }));
  };

  // Calcular el total del carrito
  const calcularTotal = () => {
    return productos.reduce((total, producto) => {
      return total + producto.price * cantidades[producto.id];
    }, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      <div className="space-y-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-md"
          >
            <div className="flex items-center">
              <img
                src={producto.img}
                alt={producto.nombre}
                className="w-24 h-24 object-contain mr-4"
              />
              <div>
                <h5 className="text-lg font-medium">{producto.name}</h5>
                <p className="text-gray-700">Precio: ${producto.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 mr-2"
                onClick={() => disminuirCantidad(producto.id)}
              >
                -
              </button>
              <span className="text-lg font-semibold">
                {cantidades[producto.id]}
              </span>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200 ml-2"
                onClick={() => agregarCantidad(producto.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div className="border-t border-gray-300 pt-4">
          <h3 className="text-xl font-bold">Total: ${calcularTotal()}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartPizza;
