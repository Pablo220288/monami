import { useState } from "react";
import CartWidget from "./CartWidget";
import ItemNav from "./ItemNav";

const NavBar = () => {
  const [open, setOpen] = useState("");
  const [carrito, setCarrito] = useState("");

  const openClose = () => {
    open === "is-active" ? setOpen("") : setOpen("is-active");
  };
  const openCarrito = () => {
    carrito === "modal_show" ? setCarrito("") : setCarrito("modal_show");
  };

  return (
    <div>
      <nav className="nav">
        <div className="navContainer">
          <div className="logo">
            <p>Mon❤️Amie</p>
          </div>
          <div className="menu">
            <ItemNav
              link={"#home"}
              dataUrl={"home"}
              item={"Inicio"}
              active="active"
            />
            <ItemNav
              link={"#productos"}
              dataUrl={"productos"}
              item={"Productos"}
            />
            <ItemNav
              link={"#Contacto"}
              dataUrl={"Contacto"}
              item={"Contacto"}
            />
            <a href="#carrito" id="carrito" className="menu-carrito">
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
