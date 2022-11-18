import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
