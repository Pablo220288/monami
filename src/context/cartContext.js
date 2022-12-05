import React, { createContext, useEffect, useState } from "react";
import { useLoclaStorage } from "../hooks/useLoclaStorage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLoclaStorage("cart", []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const massege = (text) => {
    toast.error(`${text}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const massegeOk = (text) => {
    toast.success(`${text}`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const addCartItem = (item, count) => {
    const itemCart = {
      id: item.id,
      title: item.title,
      img: item.img[1],
      cant: count,
      price: item.price,
      stock: item.stock
    };
    setCart((cart) => [...cart, itemCart]);
  };

  const countItemCart = (id, more) => {
    const item = cart.find((product) => product.id === id);
    const index = cart.indexOf(item);
    const aux = [...cart];
    if( more === 'add'){
      if(aux[index].cant === aux[index].stock){
        massege("Stock Insuficiente")
        console.log("Stock Insuficiente");
      } else {
        aux[index].cant++;
        setCart(aux);
      }
    } else if(more === 'remove'){
      if(aux[index].cant > 1){
        aux[index].cant--;
        setCart(aux);
      }
    }
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
  };
  const [desc, setDesc] = useState(0);
  const descuento = 15

  const coupon = (e) => {
    e.preventDefault();

    if (e.target[0].value === "") {
      setDesc(0);
      massege("Ingese un Cupón");
    } else if (e.target[0].value === "CODERHOUSE") {
      setDesc(((total() * descuento) / 100).toFixed());
      massegeOk("Cupón Aplicado");
    } else {
      setDesc(0);
      massege("Cupón  Invalido");
    }
  };
  const [shippingPrice, setShippingPrice] = useState(0);
  const freeShipping = 35000;

  const Shipping = () => {
    return (
      <div className="shipping-from-price">
        <div className="form-shipping-conten">
          <form className="form-shipping">
            <div className="shipping-inputs">
              <input
                className="input-shipping"
                id="input-shipping-1"
                type={"radio"}
                name={"envio"}
                onChange={() => {
                  setShippingPrice(0);
                }}
              />
              <label htmlFor={"input-shipping-1"}>
                Retiro en Sucursal <strong>Gratis</strong>
              </label>
            </div>
            <div className="shipping-inputs">
              <input
                className="input-shipping"
                id="input-shipping-2"
                type={"radio"}
                name={"envio"}
                onChange={() => {
                  setShippingPrice(500);
                }}
              />
              <label htmlFor={"input-shipping-2"}>
                Punto de Retiro <strong>$500</strong>
              </label>
            </div>
            <div className="shipping-inputs">
              <input
                className="input-shipping"
                id="input-shipping-3"
                type={"radio"}
                name={"envio"}
                onChange={() => {
                  setShippingPrice(1000);
                }}
              />
              <label htmlFor={"input-shipping-3"}>
                Envio a Domicilio <strong>$1000</strong>
              </label>
            </div>
          </form>
          <p>
            Por compras superiores a los $50.000 <strong>ENVIO GRATIS</strong>
          </p>
        </div>
        <div
          className={
            shippingPrice === 0
              ? "shipping-price"
              : "shipping-price shipping-price-show"
          }
        >
          <p>+</p>
          <p>$</p>
          <p className="price">{shippingPrice}</p>
        </div>
      </div>
    );
  };

  const carShipping = () => {
    return total() > freeShipping ? (
      <p className="freeShipping">Free Shipping</p>
    ) : (
      <Shipping />
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addCartItem,
        massege,
        massegeOk,
        countItemCart,
        removeCartItem,
        clearCartItems,
        isInCartItem,
        total,
        updateCantCArt,
        desc,
        coupon,
        descuento,
        carShipping,
        shippingPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
