import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Pagination = ({ styles }) => {
  return (
    <div className={`pagination-conten ${styles}`}>
      <div className="pagination-item">
        <div className="item-number">
          <p>1</p>
        </div>
        {styles === "paginationCart" ? (
          <p>CARRITO</p>
        ) : (
          <Link to="/cart" className="item-link">
            CARRITO
          </Link>
        )}
      </div>
      <p>
        <IoIosArrowForward />
      </p>
      <div className="pagination-item">
        <div className="item-number">
          <p>2</p>
        </div>
        {styles === "paginationCheck" ? (
          <p>DETALLE DE PAGO</p>
        ) : (
          <Link to="/cart/checkout" className="item-link">
            DETALLE DE PAGO
          </Link>
        )}
      </div>
      <p>
        <IoIosArrowForward />
      </p>
      <div className="pagination-item">
        <div className="item-number">
          <p>3</p>
        </div>
        <div className="item-link">FINALIZAR COMPRA</div>
      </div>
    </div>
  );
};

export default Pagination;
