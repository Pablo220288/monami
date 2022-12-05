import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className="pagination-conten">
      <div className="pagination-item">
        <div className="item-number">
          <p>1</p>
        </div>
        <p>CARRITO</p>
      </div>
      <p>
        <IoIosArrowForward />
      </p>
      <div className="pagination-item">
        <div className="item-number">
          <p>2</p>
        </div>
        <Link to="/cart/checkout" className="item-link">DETALLE DE PAGO</Link>
      </div>
      <p>
        <IoIosArrowForward />
      </p>
      <div className="pagination-item">
        <div className="item-number">
          <p>3</p>
        </div>
        <p>PEDIDO COMPLETADO</p>
      </div>
    </div>
  );
};

export default Pagination;
