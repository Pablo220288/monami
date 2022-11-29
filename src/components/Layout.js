import React from "react";
import { CartContextProvider } from "../context/cartContext";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <CartContextProvider>
      <header>
        <NavBar />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </CartContextProvider>
  );
};

export default Layout;
