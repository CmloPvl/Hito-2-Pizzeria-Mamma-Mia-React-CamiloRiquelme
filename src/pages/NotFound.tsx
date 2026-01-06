import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404 😢</h1>
      <p className="lead">Página no encontrada</p>

      <Link to="/" className="btn btn-dark mt-3">
        🍕 Volver al Home
      </Link>
    </div>
  );
};

export default NotFound;
