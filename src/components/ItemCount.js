import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";

const ItemCount = ({ item, count, handleCount, handleAdd, massege }) => {
  const [classClicked, setClassClicked] = useState("");
  const { addCartItem, isInCartItem } = useContext(CartContext);

  const added = () => {
    handleAdd();

    setClassClicked("clicked");
    setTimeout(() => {
      setClassClicked("");
    }, 3000);
  };

  const clicked = () => {
    if (isInCartItem(item.id)) {
      const text = "Producto en el Carrito";
      massege(text);
    } else {
      added();
      addCartItem(item, count);
    }
  };

  return (
    <div className="cant-conteiner">
      <div className="cant-selector">
        <p className="cant-number">{count}</p>
        <div className="cant-button_contain">
          <button
            className="cant-button"
            onClick={() => {
              handleCount("add");
            }}
          >
            <ion-icon name="caret-up-outline"></ion-icon>
          </button>
          <button
            className="cant-button"
            onClick={() => {
              handleCount("remove");
            }}
          >
            <ion-icon name="caret-down-outline"></ion-icon>
          </button>
        </div>
        <button
          className={`cartButton ${classClicked}`}
          onClick={() => {
            clicked();
          }}
        >
          <span className="addToCart">ADD</span>
          <span className="added">ADDED</span>
          <ion-icon id="iconCart" name="cart"></ion-icon>
          <ion-icon id="iconBox" name="cube"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
