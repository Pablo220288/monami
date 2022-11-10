import React from "react";
import PRODUCTOS from "./products.js";

const CardProduct = (props) => {
  const product = PRODUCTOS[props.item];
  return (
    <div className="cardProduct">
      <div className="productImg">
        <img src={product.img1} alt=""></img>
      </div>
      <div className="productItem">
        <h2 className="title">{product.title}</h2>
        <p className="category">{product.category}</p>
      </div>
      <div className="productItem">
        <h2 className="infoTitle">Descripción</h2>
        <p className="infoText">{product.description}</p>
      </div>
      <div className="productItem">
        <div className="colors_size">
          <div className="colors">
            <h2>Color</h2>
            <div className="bottomColors">
              <button className="color"></button>
              <button className="color"></button>
              <button className="color"></button>
              <button className="color"></button>
            </div>
          </div>
          <div className="sizes">
            <h2>Talle</h2>
            <div className="bottomSizes">
              <button className="size">S</button>
              <button className="size">M</button>
              <button className="size">L</button>
              <button className="size">XL</button>
            </div>
          </div>
        </div>
      </div>
      <div className="productItem">
        <div className="card_price">
          <button className="add">Add to Card</button>
          <p className="price">{`$${product.price},00`}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
