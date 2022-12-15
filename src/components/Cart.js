import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { VscTag } from "react-icons/vsc";
import visa from "../assets/visa.png";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  //Context
  const {
    cart,
    total,
    countItemCart,
    removeCartItem,
    desc,
    coupon,
    descuento,
    carShipping,
    shippingPrice,
  } = useContext(CartContext);

  return (
    <>
      {cart.length < 1 && (
        <div className="cart-empty">
          <p>Carrito Vacio</p>
          <Link to="/products" className="cart-return">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <p>Seguir Comprando</p>
          </Link>
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart-conten">
          <div className="cart-conten-product">
            <div className="cart-titles">
              <h4>PRODUCTOS</h4>
              <h4>SUBTOTAL</h4>
            </div>
            <ul className="cardPrevius">
              {cart.map((product) => (
                <li key={product.id} className="cardPreviusItems">
                  <div className="img-info">
                    <img
                      alt={product.title}
                      className="imgCartPrevius"
                      src={product.img}
                    ></img>
                    <div className="infoPrevius">
                      <p className="infoTitle">{product.title}</p>
                      <p className="infoCant">
                        <strong>{`${product.cant}`}</strong> prenda x{" "}
                        <strong>{`$${product.price}`}</strong>
                      </p>
                      <div className="infoFin">
                        <p className="fin">
                          <strong>12</strong> pagos con
                        </p>
                        <img className="visa" src={visa} alt="Visa"></img>
                      </div>
                    </div>
                  </div>
                  <div className="cant-container">
                    <p className="cant-text">Cant:</p>
                    <div className="cant-number-button">
                      <p className="cant-number">{`${product.cant}`}</p>
                      <div className="cant-button_contain">
                        <button
                          className="cant-button"
                          onClick={() => {
                            countItemCart(product.id, "add");
                          }}
                        >
                          <ion-icon name="caret-up-outline"></ion-icon>
                        </button>
                        <button
                          className="cant-button"
                          onClick={() => {
                            countItemCart(product.id, "remove");
                          }}
                        >
                          <ion-icon name="caret-down-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="delete-price">
                    <div
                      className="cartDelete"
                      onClick={() => {
                        removeCartItem(product.id);
                      }}
                    >
                      <AiOutlineDelete />
                    </div>
                    <div className="price-conten">
                      <p>$</p>
                      <p className="price">{`${total().toFixed()}`}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-conten-total">
            <div className="total-cart">
              <h4 className="total-title">TOTAL CARRITO</h4>
              <div className="subtotal-conten">
                <h5>SUBTOTAL</h5>
                <div className="subtotal-price">
                  <p>$</p>
                  <p className="price">{total().toFixed()}</p>
                </div>
              </div>
              <div className="shipping-conten">
                <div className="shipping-select">
                  <div className="shipping-title">
                    <MdOutlineLocalShipping />
                    <h5>Envío</h5>
                  </div>
                  {carShipping()}
                </div>
              </div>
              <div className="coupon-conten">
                <div className="coupon-title">
                  <VscTag />
                  <h5>Cupón</h5>
                </div>
                <div className="coupon-input-desc">
                  <form onSubmit={coupon} className="coupon-input-conten">
                    <input
                      className="coupon-input"
                      placeholder="Ingresá tu cupón"
                    ></input>
                    <button type="submit" className="coupon-button">
                      APLICAR
                    </button>
                  </form>
                  <div
                    className={
                      desc === 0
                        ? "coupon-desc"
                        : "coupon-desc coupon-desc-show"
                    }
                  >
                    <p className="descuento">-{descuento}%</p>
                    <p>$</p>
                    <p className="price">{desc}</p>
                  </div>
                </div>
              </div>
              <div className="total-total-price">
                <h5>Total</h5>
                <div className="total-price">
                  <p>$</p>
                  <p className="price">
                    {total().toFixed() - desc + shippingPrice}
                  </p>
                </div>
              </div>
              <div className="cart-buttons">
                <Link to="/products" className="cart-return">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                  <p>Seguir Comprando</p>
                </Link>
                <Link to="/cart/checkout" className="total-cart-button">
                  Facturación
                </Link>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Cart;
