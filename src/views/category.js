import React from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import Layout from "../components/Layout";
import PRODUCTOS from "../mocks/products";

export const CategoryView = () => {
  const { category } = useParams();
  const categoria = PRODUCTOS.filter((product) => product.category === category);

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
