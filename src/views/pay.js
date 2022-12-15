import React, { useContext } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { VscTag } from "react-icons/vsc";
import { BsCreditCard2Back } from "react-icons/bs";
import { CartContext } from "../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const PayView = () => {
  //Context
  const { cart, total, clearCartItems, shippingPrice, desc, form, cardPay } =
    useContext(CartContext);

  const navigate = useNavigate();

  //Actualizacion de Stock en Firebase
  const updateStock = (id, newStock) => {
    updateDoc(doc(getFirestore(), "products", `${id}`), {
      stock: newStock,
    })
      .then(() => clearCartItems())
      .then(() => navigate("/monamie"));
  };

  //Mensaje de Compra Realizada
  const MySwal = withReactContent(Swal);

  const payPurchase = () => {
    //Añadimos una Nueva venta a la coleccion SALES de Firebase
    addDoc(collection(getFirestore(), "sales"), {
      ...form,
      items: cart,
      date: serverTimestamp(),
    }).then((data) => {
      MySwal.fire({
        title: "Compra realizada",
        html: `Su Codigo de Compra es ${data.id}`,
        icon: "success",
      });
    });
    //Cargamos el Nuevo Stock en los Productos de Firebase
    cart.forEach((element) => {
      updateStock(element.id, element.stock - element.cant);
    });
  };

  return (
    <Layout>
      <div className="cart">
        <Pagination styles={"paginationPay"} />
        <div className="pay-container">
          <div className="checkout-titles">
            <h4>Resumen de la Compra</h4>
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
                  </div>
                </div>
                <div className="price-conten">
                  <p>$</p>
                  <p className="price">{`${(
                    product.cant *
                    product.price *
                    1000
                  ).toFixed()}`}</p>
                </div>
              </li>
            ))}
          </ul>
          {desc > 0 ? (
            <>
              <div className="pay-shipping">
                <div className="shipping-title">
                  <VscTag />
                  <h5>Cupón</h5>
                </div>

                <div className="shipping-price">
                  <p>-</p>
                  <p>$</p>
                  <p className="price">{desc}</p>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="pay-shipping-container">
            <div className="pay-shipping">
              <div className="shipping-title">
                <MdOutlineLocalShipping />
                <h5>Envío</h5>
              </div>
              {shippingPrice === 0 ? (
                <p className="freeShipping">Free</p>
              ) : (
                <>
                  <div className="shipping-price">
                    <p>+</p>
                    <p>$</p>
                    <p className="price">{shippingPrice}</p>
                  </div>
                </>
              )}
            </div>
            <div className="pay-shipping-details">
              <h5>Detalle de Envío</h5>
              <div className="shipping-details">
                <p>Nombre y Apellido:</p>
                <p>{form.name}</p>
              </div>
              <div className="shipping-details">
                <p>Teléfono:</p>
                <p>{form.phone}</p>
              </div>
              <div className="shipping-details">
                <p>Dirección:</p>
                <p>{form.direction}</p>
              </div>
              <div className="shipping-details">
                <p>Código Postal:</p>
                <p>{form.postal}</p>
              </div>
            </div>
          </div>
          <div className="pay-pay-container">
            <div className="pay-pay-title">
              <BsCreditCard2Back />
              <h5>Pago</h5>
            </div>
            <div className="pay-shipping-details">
              <h5>Detalle del Pago</h5>
              <div className="shipping-details">
                <p>Numero de Tarjeta:</p>
                <p>**** **** **** {cardPay.number.slice(-4)}</p>
              </div>
              <div className="shipping-details">
                <p>Nombre Titular:</p>
                <p>{cardPay.name}</p>
              </div>
              <div className="shipping-details">
                <p>Vencimiento:</p>
                <p>
                  {cardPay.expiry.slice(0, 2)}/{cardPay.expiry.slice(-2)}
                </p>
              </div>
              <div className="shipping-details">
                <p>Cuotas:</p>
                <p>{form.postal}</p>
              </div>
            </div>
          </div>
          <div className="total-pay">
            <h4>Total de la Compra</h4>
            <div className="price-conten">
              <p>$</p>
              <p className="price">{total().toFixed() - desc + shippingPrice}</p>
            </div>
          </div>
          <div className="cart-buttons">
            <Link to="/cart/checkout" className="total-cart-button">
              Pago
            </Link>
            <button className="total-cart-button" onClick={payPurchase}>
              finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PayView;
