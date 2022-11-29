import React, { createContext, useEffect } from "react";
import { useLoclaStorage } from "../hooks/useLoclaStorage";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLoclaStorage("cart", []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCartItem = (item, count) => {
    const itemCart = {
      id: item.id,
      title: item.title,
      img: item.img[1],
      cant: count,
      price: item.price,
    };
    setCart((cart) => [...cart, itemCart]);
  };

  const removeCartItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCartItems = () => {
    setCart([]);
  };

  const isInCartItem = (id) => {
    return cart.some((item) => item.id === id);
  };

  const total = () => {
    return cart.reduce((acum, item) => acum + item.price * item.cant * 1000, 0);
  };

  const updateCantCArt = () => {
    return cart.reduce((acum, item) => acum + item.cant, 0);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addCartItem,
        removeCartItem,
        clearCartItems,
        isInCartItem,
        total,
        updateCantCArt,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
