import { formatNumber } from "../utils/formatNumber";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="d-flex justify-content-start align-items-center p-3 gap-2 bg-dark">
      {/* Botón Home (siempre visible) */}
      <h3 className="text-light">Pizzería Mamma Mia!</h3>
      <button className="btn btn-outline-light">🍕 Home</button>

      {/* Botones según token */}
      <div className="d-flex gap-2">
        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🔐 Register</button>
          </>
        )}
      </div>

      {/* Botón Total (siempre visible) */}
      <button className="btn btn-dark border-info text-info ms-auto">
        🛒 Total: ${formatNumber(total)}
      </button>
    </nav>
  );
};

export default Navbar;
