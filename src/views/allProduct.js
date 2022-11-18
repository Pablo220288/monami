import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import Layout from "../components/Layout";

export const AllProductView = () => {
  return (
    <Layout>
      <div className="backgroundAllProduct">
        <p className="allProductsSlogan">
          Un lugar, <strong>TODA</strong> la moda
        </p>
      </div>
      <ItemListContainer
        greeting={"Hola Coder..!! Bienvenidos a mi Poryecto React.js"}
      />
    </Layout>
  );
};
