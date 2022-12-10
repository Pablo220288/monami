import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { doc, getFirestore, getDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const ItemDetailContainer = ({ product }) => {
  const [item, setItem] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [hasProduct, setHasProduct] = useState(false);

  useEffect(() => {
    getDoc(doc(getFirestore(), "products", product))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem(snapshot.data());
          let imgs = Object.values(snapshot.data().img);
          const aux = [];
          imgs.map((img) =>
            getDownloadURL(ref(getStorage(), `products/${img}`)).then(
              (data) => {
                aux.push(data);
                setImagenes(aux);
              }
            )
          )
        } else {
          console.log("No se encuentra el Producto");
        }
      })
      .then((data) => setTimeout(() => {
        setHasProduct(!data)
      },3000));
  }, [product]);

  return (
    <div className="itemDetailContainer">
      {!hasProduct ? (
        <Loader />
      ) : (
        <ItemDetail item={item} imagenes={imagenes} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
