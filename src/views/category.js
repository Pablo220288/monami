import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Layout from "../components/Layout";
import {
  collection,
  query,
  getFirestore,
  where,
  getDocs,
} from "firebase/firestore";

export const CategoryView = () => {
  //Detectar Categoria
  const { category } = useParams();
  //Estado Inicial de Items filtrados por Categoria
  const [categoria, setCategoria] = useState([]);
  //Obtenemos los Item filtrados desde Firebase y los Incorporamos al estado
  useEffect(() => {
    getDocs(
      query(
        collection(getFirestore(), "products"),
        where("category", "==", category)
      )
    ).then((snapshot) => {
      const products = snapshot.docs.map((doc) => doc.data());
      setCategoria(products);
    });
  }, [category]);

  return (
    <Layout>
      <h3 className="genderTitle">Vetements</h3>
      <div className="cardProduct_conten genders">
        {categoria.map((produc) => (
          <Item product={produc} key={produc.id} />
        ))}
      </div>
    </Layout>
  );
};
