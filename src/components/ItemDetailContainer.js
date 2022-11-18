import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import PRODUCTOS from "../mocks/products";

const ItemDetailContainer = ({ product }) => {
  const [item, setItem] = useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  useEffect(() => {
    let details = new Promise((resolve) =>
      setTimeout(() => resolve(PRODUCTOS[product - 1]), 2000)
    );

    details.then((data) => setItem(data)).then((data) => setHasProduct(!data));
  }, [product]);

  return (
    <div className="itemDetailContainer">
      {!hasProduct ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
