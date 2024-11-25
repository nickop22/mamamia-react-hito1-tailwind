import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "correo@gmail.com" && password === "a123456") {
      alert("Inicio de sesión exitoso");
      setError("");
    } else {
      setError("email o contraseña incorrectos.");
    }
  };

  return (
    <>
      <form className="formulario" onSubmit={handleLogin}>
        {error ? <p>{error}</p> : null}
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
