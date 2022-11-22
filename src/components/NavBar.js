import { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { GiMonclerJacket, GiTShirt } from "react-icons/gi";

const NavBar = () => {
  const [open, setOpen] = useState("");
  const [carrito, setCarrito] = useState("");
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState("");
  const [showMenuMobile, setShowMenuMobile] = useState("");

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
  const openMenuMobile = () => {
    showMenuMobile === "item-mobile-show"
      ? setShowMenuMobile("")
      : setShowMenuMobile("item-mobile-show");
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
              <div
                className={
                  showMenu === "showMenuProduct"
                    ? "icon-menu rotate"
                    : "icon-menu"
                }
              >
                <ion-icon name="chevron-down-outline"></ion-icon>
              </div>
            </a>
            <Link to="/monamie" data-url="contacto" className="menu">
              <span></span>
              Contacto
            </Link>
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
                  <div className="categorys">
                    <GiMonclerJacket />
                    <Link to="/category/Campera" onClick={closeMenu}>
                      <span></span>
                      Camperas
                    </Link>
                  </div>
                  <div className="categorys">
                    <GiTShirt />
                    <Link to="/category/Blusa" onClick={closeMenu}>
                      <span></span>
                      Blusas
                    </Link>
                  </div>
                </div>
              </div>
              <div className="gender">
                <Link to="/products/genero/Hombre" onClick={closeMenu}>
                  <span></span>Hombre
                </Link>
                <div className="genderCategory">
                  <div className="categorys">
                    <GiTShirt />
                    <Link to="/category/Remera" onClick={closeMenu}>
                      <span></span>Remeras
                    </Link>
                  </div>
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
          <Link className="nav-mobile-item" to="/monamie">
            <p>Inicio</p>
          </Link>
          <div className="nav-mobile-item" onClick={openMenuMobile}>
            <p>Productos</p>
            <div
              className={
                showMenuMobile === "item-mobile-show" ? "icon rotate" : "icon"
              }
            >
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
          </div>
          <div className={`mobile-item-product ${showMenuMobile}`}>
            <Link
              className="mobile-all-item"
              to="/products"
              onClick={openClose}
            >
              <p>
                <span></span>Todos los productos
              </p>
            </Link>
            <div className="sub-item">
              <Link
                className="sub-item-link"
                to="/products/genero/Mujer"
                onClick={openClose}
              >
                <p>
                  <span></span>Mujer
                </p>
              </Link>
              <div className="subsub-item">
                <Link
                  className="subsub-item-link"
                  to="/category/Campera"
                  onClick={openClose}
                >
                  <span></span>
                  Campera
                </Link>
              </div>
            </div>
            <div className="sub-item">
              <Link
                className="sub-item-link"
                to="/products/genero/Hombre"
                onClick={openClose}
              >
                <p>
                  <span></span>Hombre
                </p>
              </Link>
              <div className="subsub-item">
                <Link
                  className="subsub-item-link"
                  to="/category/Remera"
                  onClick={openClose}
                >
                  <span></span>Remera
                </Link>
              </div>
            </div>
          </div>
          <Link className="nav-mobile-item" to="/monamie">
            <p>Contacto</p>
          </Link>
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
