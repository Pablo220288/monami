import React from "react";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import amex from "../assets/amex.png";
import mercado from "../assets/mercadopago.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="subscribe">
        <h2 className="subscribeTitle">Recibí todas las ofertas..</h2>
        <p className="subscribeText">
          ¿Quieres recibir nuestras ofertas? ¡Registrate ya mismo y comenzá a
          disfrutarlas!
        </p>
        <form className="subscribeForm">
          <input className="subscribeInput" type="email" placeholder="Email" />
          <button className="subscribeButton">Enviar</button>
        </form>
      </div>
      <div className="fotterLink">
        <Link to="/monamie" data-url="home" className="menu">
          <span></span>
          Inicio
        </Link>
        <Link to="/products" data-url="productos">
          <span></span>
          Productos
        </Link>
        <Link to="/products" data-url="Contacto">
          <span></span>
          Contacto
        </Link>
      </div>
      <div className="redes-card">
        <div className="redes">
          <p>Seguinos en redes</p>
          <div className="iconRedes">
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
        </div>
        <div className="card">
          <p>Aceptamos todos los medios de pago.</p>
          <div className="footer-tarjetas">
            <img src={visa} alt="Tarjeta Visa" />
            <img src={mastercard} alt="Tarjeta Mastercard" />
            <img src={amex} alt="Tarjeta American Expres" />
            <img src={mercado} alt="Mercado Pago" />
          </div>
        </div>
      </div>

      <div className="copy">
        <span className="footerCopy">&copy;Copyright Mon Amie - 2022</span>
        <p className="footerCopy">Términos y Condiciones</p>
        <span className="footerDisen">
          <a
            href="https://pablo220288.github.io/Portafolio_2022/"
            className="pablo"
          >
            Pablo Hernandez
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
