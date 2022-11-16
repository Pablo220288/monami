import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const itemMock = {
  id: 1,
  img: {
    1: require("../assets/product_1_1.jpg"),
    2: require("../assets/product_1_2.jpg"),
    3: require("../assets/product_1_3.jpg"),
    4: require("../assets/product_1_4.jpg"),
    5: require("../assets/product_1_5.jpg"),
    6: require("../assets/product_1_6.jpg"),
  },
  title: "PARKA CON ABRIGO",
  category: "Ropa de Mujer",
  description:
    "Tela de sire impermeable, interior de guata forrada con piel sintética y capucha desmontable.",
  price: 24.999,
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [hasProduct, setHasProduct] = useState(false);

  useEffect(() => {
    let details = new Promise((resolve) => setTimeout(() => resolve(itemMock), 2000))
    
    details
    .then((data) => setItem(data))
    .then((data) => setHasProduct(!data));
  }, []);

  return <div className="itemDetailContainer">{!hasProduct ? <Loader /> : <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
