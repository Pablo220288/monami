import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { AiOutlineDelete } from "react-icons/ai";

import visa from "../assets/visa.png";

export const CartPrevius = () => {
  const { cart, removeCartItem } = useContext(CartContext);

  return (
    <ul className="cardPrevius">
      {cart.map((product) => (
        <li key={product.id} className="cardPreviusItems">
          <div className="img-info">
            <img
              alt={product.title}
              className="imgCartPrevius"
              src={product.img}
            ></img>
            <div className="infoPrevius">
              <p className="infoTitle">{product.title}</p>
              <p className="infoCant">
                <strong>{`${product.cant}`}</strong> prenda x{" "}
                <strong>{`$${product.price}`}</strong>
              </p>
              <div className="infoFin">
                <p className="fin"><strong>12</strong> pagos con</p>
                <img className="visa" src={visa} alt="Visa"></img>
              </div>
            </div>
          </div>
          <div className="delete-price">
            <div
              className="cartDelete"
              onClick={() => {
                removeCartItem(product.id);
              }}
            >
              <AiOutlineDelete />
            </div>
            <div className="price-conten">
              <p>$</p>
              <p className="price">{`${(
                product.cant *
                product.price *
                1000
              ).toFixed()}`}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
