import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!email || !password || !rePassword) {
      return setError("Todos los campos son obligatorios.");
    }

    if (password !== rePassword) {
      return setError("Las contraseñas no coinciden.");
    }

    if (password.length < 6) {
      return setError("La contraseña debe tener al menos 6 caracteres.");
    }

    // Registro exitoso (simulación del backend)
    localStorage.setItem("token", "mamamia_token");

    alert("Registro exitoso 🎉 Ahora inicia sesión");

    navigate("/login");
  };

  return (
    <div className="container mt-4">
      <h2>Registro</h2>

      <form className="mt-3" onSubmit={handleSubmit}>
        {error && <p className="text-danger">{error}</p>}

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="escribetu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Repetir contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="*******"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Crear cuenta
        </button>
      </form>
    </div>
  );
};

export default Register;
