import { useState } from "react";
import Swal from "sweetalert2";

const CantCart = () => {
  const [cant, setCant] = useState(0);
  const stockMax = 5;
  const [classDisabled, setClassDisabled] = useState("");
  const [disabled, setDisabled] = useState(false);

  const add = () => {
    if (cant == stockMax - 1) {
      setClassDisabled("disabled");
      setDisabled(true);
      setCant(cant + 1);
    } else if (cant >= stockMax) {
      Swal.fire("Sin Stock", "Pronto tendremos mas.!", "error");
    } else {
      setCant(cant + 1);
    }
  };

  const remove = () => {
    if (cant == stockMax) {
      setClassDisabled("");
      setDisabled(false);
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
        <button
          className="cant-button"
          onClick={() => {
            add();
          }}
        >
          +
        </button>
        <p className="cant-number">{cant}</p>
        <button
          className="cant-button"
          onClick={() => {
            remove();
          }}
        >
          -
        </button>
      </div>
      <button
        className={`cant-button-add ${classDisabled}`}
        onClick={() => {
          add();
        }}
        disabled={disabled}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export default CantCart;
