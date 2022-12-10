import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Layout from "../components/Layout";
import { collection, query, getFirestore, where, getDocs } from "firebase/firestore";

export const CategoryView = () => {
  const { category } = useParams();
  const [categoria, setCategoria] = useState([])

  useEffect(() => {
    getDocs(query(collection(getFirestore(), "products"), where("category", '==', category)))
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => doc.data())
        setCategoria(products)
      })
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
