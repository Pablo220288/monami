import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const CantCart = () => {
  const [cant, setCant] = useState(0);
  const stockMax = 5;
  const [classClicked, setClassClicked] = useState("");

  const add = () => {
    if (cant === stockMax - 1) {
      setCant(cant + 1);
    } else if (cant >= stockMax) {
      Swal.fire("Sin Stock", "Pronto tendremos mas.!", "error");
    } else {
      setCant(cant + 1);
    }
  };

  const remove = () => {
    if (cant === stockMax) {
      setCant(cant - 1);
    } else if (cant <= 0) {
      Swal.fire("Carrito Vacio", "Vamos a comprar.?", "warning");
    } else {
      setCant(cant - 1);
    }
  };

  const clicked = () => {
    if (cant === 0) {
      Swal.fire(
        "Nada que agregar.!",
        "Primero selecciona la Cantidad",
        "error"
      );
    } else {
      setClassClicked("clicked");

      setTimeout(() => {
        setClassClicked("");
      }, 3000);
    }
  };

  return (
    <div className="cant-conteiner">
      <div className="cant-selector">
        <p className="cant-number">{cant}</p>
        <div className="cant-button_contain">
          <button
            className="cant-button"
            onClick={() => {
              add();
            }}
          >
            <ion-icon name="caret-up-outline"></ion-icon>
          </button>
          <button
            className="cant-button"
            onClick={() => {
              remove();
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

export default CantCart;
