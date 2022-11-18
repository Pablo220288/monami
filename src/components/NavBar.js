import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [open, setOpen] = useState("");
  const [carrito, setCarrito] = useState("");
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState("");

  const openClose = () => {
    open === "is-active" ? setOpen("") : setOpen("is-active");
  };
  const openCarrito = () => {
    carrito === "modal_show" ? setCarrito("") : setCarrito("modal_show");
  };

  const navScroll = () => {
    window.scrollY >= 80 ? setScroll(true) : setScroll(false);
  };
  window.addEventListener("scroll", () => {
    navScroll();
  });

  const openMenu = () => {
    showMenu === "showMenuProduct"
      ? setShowMenu("")
      : setShowMenu("showMenuProduct");
  };
  const closeMenu = () => {
    setShowMenu("");
  };

  return (
    <div>
      <nav className={scroll ? "nav nav-scroll" : "nav"}>
        <div className="navContainer">
          <div className="logo">
            <h1>Mon Amie</h1>
          </div>
          <div className="menu">
            <Link to="/monamie" data-url="home" className="menu">
              <span></span>
              Inicio
            </Link>
            <a
              href="#products"
              data-url="productos"
              className="menu"
              onClick={openMenu}
            >
              <span></span>
              Productos
            </a>
            <a href="#contacto" data-url="contacto" className="menu">
              <span></span>
              Contacto
            </a>
            <a
              href="#carrito"
              id="carrito"
              className="menu-carrito"
              onClick={() => {
                openCarrito();
              }}
            >
              <CartWidget className="shop-nav" />
              <div id="cant-carrito-total" className="cant-carrito-total"></div>
            </a>
          </div>
          <div className="burger">
            <a
              href="#carrito"
              id="carrito_xs"
              onClick={() => {
                openCarrito();
              }}
            >
              <CartWidget />
              <div
                id="cant-carrito-total-xs"
                className="cant-carrito-total-xs"
              ></div>
            </a>
            <button
              className={`hamburger ${open}`}
              id="hamburger"
              onClick={() => {
                openClose();
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div className={`productsMenu ${showMenu}`}>
          <div className="productsItem">
            <Link className="allProduct" to="/products" onClick={closeMenu}>
              <span></span>TODOS LOS PRODUCTOS
            </Link>
            <div className="productGender">
              <div className="gender">
                <Link to="/products/genero/Mujer" onClick={closeMenu}>
                  <span></span>Mujer
                </Link>
                <div className="genderCategory">
                  <Link to="/category/Campera" href="#Camperas">
                    <span></span>Camperas
                  </Link>
                </div>
              </div>
              <div className="gender">
                <Link to="/products/genero/Hombre" onClick={closeMenu}>
                  <span></span>Hombre
                </Link>
                <div className="genderCategory">
                  <Link to="/category/Remera" href="#Remera">
                    <span></span>Remeras
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="nav-mobile">
        <div
          className={`nav-mobile-container ${open}`}
          id="nav-mobile-container"
        >
          <a className="nav-mobile-item" href="#home">
            <p>Inicio</p>
          </a>
          <a className="nav-mobile-item" href="#productos">
            <p>Productos</p>
          </a>
          <a className="nav-mobile-item" href="#contacto">
            <p>Contacto</p>
          </a>
        </div>
      </nav>
      <div className={`modal-carrito ${carrito}`} id="modal-carrito">
        <div className="modal-container">
          <h3 className="modal-title">Carrito</h3>
          <ion-icon
            class="close-carrito"
            id="close-carrito"
            name="close-outline"
            onClick={() => {
              openCarrito();
            }}
          ></ion-icon>
          <div id="conten-carrito"></div>
          <div className="total-carrito">
            <p className="total-text">Total Carrito:</p>
            <p id="total_carrito">$</p>
          </div>
          <div className="buttons-carrito">
            <button className="vaciar" id="vaciar-carrito">
              <ion-icon name="close-circle-outline"></ion-icon>
              <p className="button-text">Vaciar</p>
            </button>
            <button className="comprar" id="comprar">
              <ion-icon name="card-outline"></ion-icon>
              <p className="button-text">Comprar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
