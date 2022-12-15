import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Loader from "./Loader";

const Item = ({ product }) => {
  //Imagen principal
  const [imgData, setImgData] = useState("");
  const [hasProduct, setHasProduct] = useState(false);

  //Link de Imagen de Storage de Firebase
  useEffect(() => {
    getDownloadURL(ref(getStorage(), `products/${product.img[1]}`))
      .then((data) => setImgData(data))
      .then((data) => {
        setTimeout(() => {
          setHasProduct(!data);
        }, 3000);
      });
  }, [product]);

  return (
    <>
      {!hasProduct ? (
        <Loader />
      ) : (
        <>
          <div>
            <li key={product.id} className="cardProduct">
              <div className="productImg">
                <img src={imgData} alt={product.title}></img>
                <div className="productItem">
                  <div className="more_price">
                    <Link
                      to={`/product/${product.id}`}
                      className="button-datails"
                    >
                      +
                    </Link>
                    <div className="price-conten">
                      <p>$</p>
                      <p className="price">{`${product.price}`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="productItem">
                <h2 className="title">{product.title}</h2>
                <div className="category-stock">
                  <p className="category">{product.category}</p>
                  <p className="stock">
                    <strong>{`${product.stock}`}</strong> unidades
                  </p>
                </div>
              </div>
              <div className="productItem">
                <p className="financing">
                  <strong>Hasta 12</strong> cuotas de{" "}
                  <strong>{`$ ${((product.price / 24) * 1000).toFixed(
                    2
                  )}`}</strong>
                </p>
              </div>
            </li>
          </div>
        </>
      )}
    </>
  );
};

export default Item;
