import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/pizzas/p001"
        );
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>;
  }

  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h2 className="text-capitalize">{pizza.name}</h2>
          <p>{pizza.desc}</p>

          <h5>Ingredientes</h5>
          <ul className="list-unstyled">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>

          <h4 className="mt-3">Precio: ${pizza.price}</h4>

          <button className="btn btn-dark mt-3">
            Añadir al carrito
          </button>
        </div>
      </div>
    </main>
  );
};

export default Pizza;
