import React, { useState, useContext } from "react";
import { CartContext } from "../context/cartContext";

const ItemCount = ({ item, imagenes, count, handleCount, handleAdd }) => {
//Context
  const { addCartItem, isInCartItem } = useContext(CartContext);

  const [classClicked, setClassClicked] = useState("");
  //Ocultamos el Boton de Agregar si el Item ya esta en Carrito de Compras
  const [hide, setHide] = useState(isInCartItem(item.id) ? true : false)

  //Agregamos al Carrito
  const added = () => {
    handleAdd();
    addCartItem(item, imagenes, count);
    setClassClicked("clicked");
    setTimeout(() => {
      setClassClicked("");
      setHide(true)
    }, 3000);
  };

  return (
    <div className={ hide ? "cant-conteiner hide" : "cant-conteiner"}>
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
            added();
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
