import { useState } from "react";
import Swal from "sweetalert2";

const CantCart = () => {
  const [cant, setCant] = useState(0);
  const stockMax = 5;
  const [classActive1, setClassActive1] = useState("active");
  const [classActive2, setClassActive2] = useState("");

  const add = () => {
    if (cant === stockMax - 1) {
      setClassActive1("");
      setClassActive2("active");
      setCant(cant + 1);
    } else if (cant >= stockMax) {
      Swal.fire("Sin Stock", "Pronto tendremos mas.!", "error");
    } else {
      setCant(cant + 1);
    }
  };

  const remove = () => {
    if (cant === stockMax) {
      setClassActive1("active");
      setClassActive2("");
      setCant(cant - 1);
    } else if (cant <= 0) {
      Swal.fire("Carrito Vacio", "Vamos a comprar.?", "warning");
    } else {
      setCant(cant - 1);
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
        <button className="cartButton">
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
