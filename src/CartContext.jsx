import React, { createContext, useMemo, useState } from "react";
import { pizzaCart } from "../assets/js/pizzas.js";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  // inicializamos con una copia del pizzaCart para no mutar el original
  const [cart, setCart] = useState(() => (pizzaCart ?? []).map(item => ({ ...item })));

  // total memorizado para evitar recalculos innecesarios
  const total = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.price ?? 0) * (item.count ?? 0), 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
