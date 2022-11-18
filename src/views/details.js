import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import Layout from "../components/Layout";

export const DetailsView = () => {
  const { product } = useParams();

  return (
    <Layout>
      <ItemDetailContainer product={product} />
    </Layout>
  );
};
