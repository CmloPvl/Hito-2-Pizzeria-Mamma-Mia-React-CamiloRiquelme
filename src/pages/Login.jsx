import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validaciones
    if (!email || !password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!validarEmail(email)) {
      setError("El email no tiene un formato válido.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    alert("Login exitoso 🎉 (simulación)");

    // Aquí en el futuro podrías activar el token:
    // setToken(true);
  };

  return (
    <div className="container mt-4">
      <h2>🔐 Iniciar Sesión</h2>

      <form className="mt-3" onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-danger">{error}</p>}

        <button className="btn btn-primary w-100 mt-2">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
