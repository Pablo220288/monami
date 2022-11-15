import { useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";
import PRODUCTOS from "./products";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  const listproduct = new Promise((resolve) =>
    setTimeout(() => {
      resolve(PRODUCTOS);
    }, 3000)
  );

  listproduct
    .then((data) => setProducts(data))
    .then((data) => setHasProduct(!data));

  return (
    <div className="itemListContainer">
      <div>{greeting}</div>
      {!hasProduct ? (
        <Loader/>
      ) : (
        <ItemList products={products}/>
      )}
    </div>
  );
};

export default ItemListContainer;
