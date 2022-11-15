import ItemDetailContainer from "./ItemDatailContainer";
import { useState } from "react";

const Item = ({ product }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <li key={product.id} className="cardProduct">
        <div className="productImg">
          <img src={product.img[1]} alt={product.title}></img>
          <div className="productItem">
            <div className="more_price">
              <buttom className="buttom-datails" onClick={openModal}>
                +
              </buttom>
              <div className="price-conten">
                <p>$</p>
                <p className="price">{`${product.price}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="productItem">
          <h2 className="title">{product.title}</h2>
          <p className="category">{product.category}</p>
        </div>
        <div className="productItem">
          <p className="financing">
            <strong>Hasta 12</strong> cuotas de{" "}
            <strong>{`$ ${((product.price / 24) * 1000).toFixed(2)}`}</strong>
          </p>
        </div>
      </li>
      <ItemDetailContainer product={product} isOpen={isOpenModal} closeModal={closeModal} />
    </div>
  );
};

export default Item;
