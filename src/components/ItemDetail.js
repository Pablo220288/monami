import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CantCart from "./CantCart";

const ItemDetail = ({ item }) => {
  const [imgMajor, setImgMajor] = useState(1);

  const [imgSecundary1, setImgSecundary1] = useState(true);
  const [imgSecundary2, setImgSecundary2] = useState(false);
  const [imgSecundary3, setImgSecundary3] = useState(false);
  const [imgSecundary4, setImgSecundary4] = useState(false);
  const [imgSecundary5, setImgSecundary5] = useState(false);
  const [imgSecundary6, setImgSecundary6] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="itemDatails">
      <div
        className="closeDetails"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <section className="datailsGallery">
        <img className="imgMajor" alt={item.title} src={item.img[imgMajor]} />
        <div className="imgSecundarys">
          <div
            className={
              imgSecundary1
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={item.img[1]}
              onClick={() => {
                setImgMajor(1);
                setImgSecundary1(true);
                setImgSecundary2(false);
                setImgSecundary3(false);
                setImgSecundary4(false);
                setImgSecundary5(false);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary2
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={item.img[2]}
              onClick={() => {
                setImgMajor(2);
                setImgSecundary1(false);
                setImgSecundary2(true);
                setImgSecundary3(false);
                setImgSecundary4(false);
                setImgSecundary5(false);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary3
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={item.img[3]}
              onClick={() => {
                setImgMajor(3);
                setImgSecundary1(false);
                setImgSecundary2(false);
                setImgSecundary3(true);
                setImgSecundary4(false);
                setImgSecundary5(false);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary4
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={item.img[4]}
              onClick={() => {
                setImgMajor(4);
                setImgSecundary1(false);
                setImgSecundary2(false);
                setImgSecundary3(false);
                setImgSecundary4(true);
                setImgSecundary5(false);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary5
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={item.img[5]}
              onClick={() => {
                setImgMajor(5);
                setImgSecundary1(false);
                setImgSecundary2(false);
                setImgSecundary3(false);
                setImgSecundary4(false);
                setImgSecundary5(true);
                setImgSecundary6(false);
              }}
            />
          </div>
          <div
            className={
              imgSecundary6
                ? "imgSecundaryContainer active"
                : "imgSecundaryContainer"
            }
          >
            <img
              alt={item.title}
              className="imgSecundary"
              src={item.img[6]}
              onClick={() => {
                setImgMajor(6);
                setImgSecundary1(false);
                setImgSecundary2(false);
                setImgSecundary3(false);
                setImgSecundary4(false);
                setImgSecundary5(false);
                setImgSecundary6(true);
              }}
            />
          </div>
        </div>
      </section>
      <section className="cardProduct datails">
        <div className="productItem">
          <h2 className="title">{item.title}</h2>
          <p className="category">{item.category}</p>
        </div>
        <div className="productItem">
          <h2 className="infoTitle">Descripción</h2>
          <p className="infoText">{item.description}</p>
        </div>
        <div className="productItem">
          <div className="colors_size">
            <div className="colors">
              <h2>Color</h2>
              <div className="bottomColors">
                <button className="color" style={{background: item.color[1], border: `2px solid ${item.color[1]}`}}></button>
                <button className="color" style={{background: item.color[2], border: `2px solid ${item.color[2]}`}}></button>
              </div>
            </div>
            <div className="sizes">
              <h2>Talle</h2>
              <div className="bottomSizes">
                <button className="size">S</button>
                <button className="size">M</button>
                <button className="size">L</button>
                <button className="size">XL</button>
              </div>
            </div>
          </div>
        </div>
        <div className="productItem">
          <div className="card_price">
            <CantCart />
            <div className="price-conten">
              <p>$</p>
              <p className="price">{`${item.price}`}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ItemDetail;
