import React, { useContext } from "react";
import Cart from "../components/Cart";
import Layout from "../components/Layout";

export const CartView = () => {
  return (
    <Layout>
      <div className="cart">
        <Cart/>
      </div>
    </Layout>
  );
};
