import { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas.js";
import { formatNumber } from "../utils/formatNumber";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  // Aumentar cantidad
  const increase = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updated);
  };

  // Disminuir cantidad
  const decrease = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0); // elimina si count llega a 0

    setCart(updated);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>

      {/* Lista de pizzas */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center border rounded p-3 mb-3 gap-3"
        >
          <img
            src={item.img}
            alt={item.name}
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
            className="rounded"
          />

          <div className="flex-grow-1">
            <h4 className="m-0 text-capitalize">{item.name}</h4>
            <p className="m-0 text-muted">Precio: ${formatNumber(item.price)}</p>
          </div>

          {/* Botones */}
          <div className="d-flex align-items-center gap-2">
            <button onClick={() => decrease(item.id)} className="btn btn-danger">
              ➖
            </button>

            <span className="fw-bold">{item.count}</span>

            <button onClick={() => increase(item.id)} className="btn btn-success">
              ➕
            </button>
          </div>
        </div>
      ))}

      {/* Total */}
      <h3 className="text-end mt-4">
        Total: $
        {formatNumber(
          cart.reduce((acc, item) => acc + item.price * item.count, 0)
        )}
      </h3>

      <div className="text-end">
        <button className="btn btn-success mt-3 px-4">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
