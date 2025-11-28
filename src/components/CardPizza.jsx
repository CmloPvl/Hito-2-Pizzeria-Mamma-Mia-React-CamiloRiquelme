import { formatNumber } from "../utils/formatNumber";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card shadow" style={{ width: "25rem" }}>
      <img src={img} className="card-img-top " alt={name} />

      <div className="card-body p-0">
        <h3 className="card-title d-flex justify-content-start p-3">{name}</h3>

        {/* Línea 1 — debajo del nombre */}
        <div className="border-top border-second w-100 my-3"></div>

        <p className="text-muted mb-1">
          <strong>Ingredientes:</strong>
        </p>
        <p className="text-muted">🍕 {ingredients.join(", ")}</p>

        {/* Línea 2 — arriba del precio */}
        <div className="border-bottom border-second w-100 my-3"></div>

        <h4 className="mt-1">Precio: ${formatNumber(price)}</h4>

        <div className="d-flex justify-content-evenly gap-3 mt-3 p-4">
          <button className="btn btn-outline-dark w-40">👀 Ver más</button>
          <button className="btn btn-dark bg-dark w-40">🛒 Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
