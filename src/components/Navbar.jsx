import { Disclosure } from "@headlessui/react";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

const navigation = [
  { name: "Profile", href: "#", current: false },
  { name: "LogOut🔓", href: "#", current: false },
  { name: "Login🔐", href: "#", current: false },
  { name: "Registro", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [token, setToken] = useState(false); // Estado para la autenticación
  const total = 25000;

  // Manejo de clic en LogOut
  const handleLogOut = () => {
    setToken(false); // Cerrar sesión
  };

  // Manejo de clic en Login (para simular inicio de sesión)
  const handleLogin = () => {
    setToken(true); // Iniciar sesión
  };

  // Filtrar botones de navegación según el estado del token
  const filteredNavigation = token
    ? navigation.filter((item) => ["Profile", "LogOut🔓"].includes(item.name))
    : navigation.filter((item) => ["Login🔐", "Registro"].includes(item.name));

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center space-x-4">
              {/* Texto fijo "Mamma Mia" */}
              <span className="text-white text-lg font-bold">Mamma Mia</span>
              {/* Botón Home siempre visible */}
              <Button
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Home 🍕
              </Button>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {filteredNavigation.map((item) => (
                  <Button
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    onClick={
                      item.name === "LogOut🔓"
                        ? handleLogOut
                        : item.name === "Login🔐"
                        ? handleLogin
                        : undefined
                    }
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Botón Total siempre visible */}
            <Button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
              Total: {total.toLocaleString()}🛒
            </Button>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
