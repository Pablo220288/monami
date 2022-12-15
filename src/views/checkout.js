import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import { CartContext } from "../context/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import amex from "../assets/amex.png";
import mercado from "../assets/mercadopago.png";

const CheckoutView = () => {
  //Context
  const { massege, form, setForm, cardPay, setCardPay } =
    useContext(CartContext);
  //Estado para Nombre de Inputs
  const [up, setUp] = useState({
    name: false,
    dni: false,
    phone: false,
    email: false,
    direction: false,
    postal: false,
  });

  const handlerInput = (e) => {
    const item = e.target.name;
    const aux = { ...up };
    if (e.target.value.length > 0) {
      aux[item] = true;
      setUp(aux);
    } else {
      aux[item] = false;
      setUp(aux);
    }
  };
  //Navegacion
  const navigate = useNavigate();
  //Incorporamos los datos en los Formularios de Facturacion y Pago
  const finalizePurchase = (
    name,
    dni,
    phone,
    email,
    direction,
    postal,
    numberCard,
    nameCard,
    expiryCard
  ) => {
    setForm({
      ...form,
      name: name,
      dni: dni,
      phone: phone,
      email: email,
      direction: direction,
      postal: postal,
    });
    setCardPay({
      ...cardPay,
      number: numberCard,
      name: nameCard,
      expiry: expiryCard,
    });
    navigate("/cart/checkout/pay");
  };
  //Check de items de formulario
  const formCheckout = (e) => {
    e.preventDefault();
    e.target[0].value === ""
      ? massege("Campo Nombre Requerido")
      : e.target[1].value === ""
      ? massege("Campo DNI Requerido")
      : e.target[2].value === ""
      ? massege("Campo Telefono Requerido")
      : e.target[3].value === ""
      ? massege("Campo Email Requerido")
      : e.target[4].value === ""
      ? massege("Campo Direccion Requerido")
      : e.target[5].value === ""
      ? massege("Campo Cod. Postal Requerido")
      : e.target[6].value === ""
      ? massege("Falta Numero de Tarjeta")
      : e.target[7].value === ""
      ? massege("Falta Nombre Titular")
      : e.target[8].value === ""
      ? massege("Falta Fecha Vencimiento")
      : e.target[9].value === ""
      ? massege("Falta CVC")
      : finalizePurchase(
          e.target[0].value,
          e.target[1].value,
          e.target[2].value,
          e.target[3].value,
          e.target[4].value,
          e.target[5].value,
          e.target[6].value,
          e.target[7].value,
          e.target[8].value
        );
  };
  //Estado Inicial del Formulario Card
  const [card, setCard] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  //Funcion para el giro de la tarjeta segun el focus de los input
  const handleInputFocus = (e) => {
    let aux = { ...card };
    aux.focus = e.target.name;
    setCard(aux);
  };
  //Agregamos los que se escribe en los inputs en la tejeta de ilustracion
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let aux = { ...card };
    aux[name] = value;
    setCard(aux);
  };

  return (
    <Layout>
      <div className="cart">
        <Pagination styles={"paginationCheck"} />
        <div className="checkout-container">
          <form onSubmit={formCheckout} className="form-contact-cart">
            <div className="cart-card-form">
              <div className="cart-form">
                <div className="checkout-titles">
                  <h4>Detalle de Facturación y Envío</h4>
                </div>
                <div className="cart-input">
                  <div className="contact-cart-block">
                    <div className="contact-cart-item">
                      <label
                        htmlFor="name"
                        className={
                          up.name
                            ? "contact-item-text contact-item-text-up"
                            : "contact-item-text"
                        }
                      >
                        Nombre y Apellido <span>*</span>
                      </label>
                      <input
                        className="contact-item-input"
                        type={"text"}
                        name={"name"}
                        onFocus={() => {
                          const aux = { ...up };
                          aux.name = true;
                          setUp(aux);
                        }}
                        onBlur={handlerInput}
                      />
                    </div>
                    <div className="contact-cart-item">
                      <label
                        htmlFor="DNI"
                        className={
                          up.dni
                            ? "contact-item-text contact-item-text-up"
                            : "contact-item-text"
                        }
                      >
                        DNI <span>*</span>
                      </label>
                      <input
                        className="contact-item-input"
                        type={"text"}
                        name={"dni"}
                        onFocus={() => {
                          const aux = { ...up };
                          aux.dni = true;
                          setUp(aux);
                        }}
                        onBlur={handlerInput}
                      />
                    </div>
                  </div>
                  <div className="contact-cart-block">
                    <div className="contact-cart-item">
                      <label
                        htmlFor="phone"
                        className={
                          up.phone
                            ? "contact-item-text contact-item-text-up"
                            : "contact-item-text"
                        }
                      >
                        Telefono <span>*</span>
                      </label>
                      <input
                        className="contact-item-input"
                        type={"tel"}
                        name={"phone"}
                        onFocus={() => {
                          const aux = { ...up };
                          aux.phone = true;
                          setUp(aux);
                        }}
                        onBlur={handlerInput}
                      />
                    </div>
                    <div className="contact-cart-item">
                      <label
                        htmlFor="email"
                        className={
                          up.email
                            ? "contact-item-text contact-item-text-up"
                            : "contact-item-text"
                        }
                      >
                        Email <span>*</span>
                      </label>
                      <input
                        className="contact-item-input"
                        type={"email"}
                        name={"email"}
                        onFocus={() => {
                          const aux = { ...up };
                          aux.email = true;
                          setUp(aux);
                        }}
                        onBlur={handlerInput}
                      />
                    </div>
                  </div>
                  <div className="contact-cart-block">
                    <div className="contact-cart-item">
                      <label
                        htmlFor="direction"
                        className={
                          up.direction
                            ? "contact-item-text contact-item-text-up"
                            : "contact-item-text"
                        }
                      >
                        Direccion <span>*</span>
                      </label>
                      <input
                        className="contact-item-input"
                        type={"text"}
                        name={"direction"}
                        onFocus={() => {
                          const aux = { ...up };
                          aux.direction = true;
                          setUp(aux);
                        }}
                        onBlur={handlerInput}
                      />
                    </div>
                    <div className="contact-cart-item">
                      <label
                        htmlFor="postal"
                        className={
                          up.postal
                            ? "contact-item-text contact-item-text-up"
                            : "contact-item-text"
                        }
                      >
                        CP: <span>*</span>
                      </label>
                      <input
                        className="contact-item-input"
                        type={"text"}
                        name={"postal"}
                        onFocus={() => {
                          const aux = { ...up };
                          aux.postal = true;
                          setUp(aux);
                        }}
                        onBlur={handlerInput}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="checkout-titles">
                  <h4>Pago</h4>
                </div>
                <div className="card-view-inputs">
                  <Cards
                    cvc={card.cvc}
                    expiry={card.expiry}
                    focused={card.focus}
                    name={card.name}
                    number={card.number}
                  />
                  <div className="card-inputs">
                    <input
                      className="contact-item-input"
                      type={"tel"}
                      name={"number"}
                      maxLength={16}
                      placeholder={"Numero de Tarjeta"}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />

                    <input
                      className="contact-item-input"
                      type={"text"}
                      name={"name"}
                      maxLength={30}
                      placeholder={"Nombre del Titular"}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                    <div className="card-expiry-cvc">
                      <input
                        className="contact-item-input"
                        type={"tel"}
                        name={"expiry"}
                        maxLength={4}
                        placeholder={"Fecha de Vencimiento"}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                      />
                      <input
                        className="contact-item-input"
                        type={"tel"}
                        name={"cvc"}
                        maxLength={3}
                        placeholder={"CVC"}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-footer">
              <div className="footer-benefits">
                <label className="footer-checkout-title">
                  Paga más rápido con:
                  <img src={mercado} alt={"mercado"} />
                </label>
                <div className="checkout-benefits">
                  <div className="benefits">
                    <IoCheckmarkDoneSharp className="check" />
                    <p>
                      Si ya tienes una cuenta de Mercado Libre, usa el mismo
                      mail y contraseña
                    </p>
                  </div>
                  <div className="benefits">
                    <IoCheckmarkDoneSharp className="check"/>
                    <p>Compra con tu dinero disponible o tarjetas guardadas</p>
                  </div>
                </div>
              </div>
              <div className="financiacion-chechout">
                <div className="fin-chechout">
                  <p>Cuotas sin Tarjeta</p>
                  <div>
                    <span>HASTA 12 CUOTAS</span>
                  </div>
                </div>
                <div className="cart-footer-checkout">
                  <img className="mercadoPago" src={mercado} alt={"mercado"} />
                </div>
                <div className="fin-chechout">
                  <p>Tarjeta de Credito</p>
                  <div>
                    <span>HASTA 12 CUOTAS</span>
                  </div>
                </div>
                <div className="cart-footer-checkout">
                  <img src={visa} alt={"visa"} />
                  <img src={mastercard} alt={"mastercard"} />
                  <img src={amex} alt={"american"} />
                </div>
              </div>
            </div>
            <p className="condition-checkout">
              Al continuar, aceptas nuestros{" "}
              <strong>Términos y condiciones</strong>
            </p>
            <p className="politic-checkout">
              Sus datos personales se utilizarán para procesar su pedido,
              respaldar su experiencia en este sitio web y para otros fines
              descritos en nuestro <strong>política de privacidad</strong>.
            </p>
            <div className="cart-buttons">
              <Link to="/cart" className="total-cart-button">
                Carrito
              </Link>
              <button className="total-cart-button" type="submit">
                Pagar
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};

export default CheckoutView;
