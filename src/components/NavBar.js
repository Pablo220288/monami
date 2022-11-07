import CartWidget from "./CartWidget";
import ItemNav from "./ItemNav";

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="navContainer">
          <div className="logo">
            <p>Mon Amie</p>
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
            <a href="#carrito" id="carrito_xs">
              <CartWidget />
              <div
                id="cant-carrito-total-xs"
                className="cant-carrito-total-xs"
              ></div>
            </a>
            <button className="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <nav className="nav-mobile">
        <div className="nav-mobile-container" id="nav-mobile-container">
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
    </div>
  );
};

export default NavBar;
