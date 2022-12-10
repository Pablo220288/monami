import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDocs(collection(getFirestore(), "products"))
      .then((snapshot) => {
        const product = snapshot.docs.map((doc) => doc.data());
        setProducts(product);
      })
  }, []);

  return (
    <div className="itemListContainer">
      <div>{greeting}</div>
      {<ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
