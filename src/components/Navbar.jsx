import { Link } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";

const Navbar = () => {
  const total = 25000; // estático para este hito

  return (
    <nav className="d-flex align-items-center p-3 gap-2 bg-dark">
      {/* Título */}
      <h3 className="text-light mb-0">Pizzería Mamma Mia!</h3>

      {/* Navegación */}
      <Link to="/" className="btn btn-outline-light">
        🍕 Home
      </Link>

      <Link to="/login" className="btn btn-outline-light">
        🔐 Login
      </Link>

      <Link to="/register" className="btn btn-outline-light">
        📝 Register
      </Link>

      <Link to="/profile" className="btn btn-outline-light">
        👤 Profile
      </Link>

      {/* Carrito */}
      <Link to="/cart" className="btn btn-dark border-info text-info ms-auto">
        🛒 Total: ${formatNumber(total)}
      </Link>
    </nav>
  );
};

export default Navbar;
