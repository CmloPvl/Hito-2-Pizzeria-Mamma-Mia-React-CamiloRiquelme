import { Link } from "react-router-dom";
import { formatNumber } from "../utils/formatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="d-flex justify-content-start align-items-center p-3 gap-2 bg-dark">
      {/* Título */}
      <h3 className="text-light">Pizzería Mamma Mia!</h3>

      {/* Home */}
      <Link to="/" className="btn btn-outline-light">
        🍕 Home
      </Link>

      {/* Botones según token */}
      <div className="d-flex gap-2">
        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">
              🔓 Profile
            </Link>

            <Link to="/logout" className="btn btn-outline-light">
              🔒 Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">
              🔐 Login
            </Link>

            <Link to="/register" className="btn btn-outline-light">
              🔐 Register
            </Link>
          </>
        )}
      </div>

      {/* Carrito — ahora es un Link funcional */}
      <Link to="/cart" className="btn btn-dark border-info text-info ms-auto">
        🛒 Total: ${formatNumber(total)}
      </Link>
    </nav>
  );
};

export default Navbar;
