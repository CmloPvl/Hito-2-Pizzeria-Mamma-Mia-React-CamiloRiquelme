import { formatNumber } from "../utils/formatNumber";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card shadow" style={{ width: "25rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h3 className="card-title text-capitalize">{name}</h3>

        <hr />

        <p><strong>Ingredientes:</strong></p>

        <ul className="list-unstyled text-muted">
          {ingredients.map((ingrediente, index) => (
            <li key={index}>🍕 {ingrediente}</li>
          ))}
        </ul>

        <hr />

        <h4>Precio: ${formatNumber(price)}</h4>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-dark">👀 Ver más</button>
          <button className="btn btn-dark">🛒 Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
