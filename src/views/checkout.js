import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";

const CheckoutView = () => {
  const [up, setUp] = useState({
    name: false,
    surname: false,
    phone: false,
    email: false,
    dni: false,
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
      setUp(false);
    }
  };

  const [token, setToken] = useState("");
  const [handleToken, setHandleToken] = useState(false);
  const [country, setCountry] = useState([]);
  const [countrySelected, setCountrySelected] = useState("");
  const [handleCountry, setHandleCountry] = useState(false);
  const [state, setState] = useState([]);
  const [stateSelected, setStateSelected] = useState("");
  const [handleCity, setHandleCity] = useState(false);
  const [city, setCity] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "api-token":
          "qBvWdSIWLYzL3ZjxLkkPujuNKS0D-fvlsCVFSK6GjK35VR_bPC0VUJ5bEAqPaJJUU7s",
        "user-email": "peh_tj@hotmail.com",
      },
    };
    fetch("https://www.universal-tutorial.com/api/getaccesstoken", options)
      .then((data) => data.json())
      .then((data) => setToken(data.auth_token));
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    fetch("https://www.universal-tutorial.com/api/countries/", options)
      .then((data) => data.json())
      .then((data) => setCountry(data))
      .then((data) =>
        setTimeout(() => {
          setHandleToken(!data);
        }, 4000)
      );
  }, [token]);

  useEffect(() => {
    setHandleCountry(false);
    setHandleCity(false);
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    fetch(
      `https://www.universal-tutorial.com/api/states/${countrySelected}`,
      options
    )
      .then((data) => data.json())
      .then((data) => setState(data))
      .then((data) =>
        setTimeout(() => {
          setHandleCountry(!data);
        }, 4000)
      );
  }, [token, countrySelected]);

  useEffect(() => {
    setHandleCity(false);
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    fetch(
      `https://www.universal-tutorial.com/api/cities/${stateSelected}`,
      options
    )
      .then((data) => data.json())
      .then((data) => setCity(data))
      .then((data) =>
        setTimeout(() => {
          setHandleCity(!data);
        }, 4000)
      );
  }, [token, stateSelected]);

  const selectCountry = async (e) => {
    const countrySelected = e.target.value;
    setCountrySelected(countrySelected);
  };
  const selectState = async (e) => {
    const stateSelected = e.target.value;
    setStateSelected(stateSelected);
    console.log(stateSelected)
  };

  return (
    <Layout>
      <div className="cart">
        <Pagination />
        <>
          <div className="checkout-titles">
            <h4
              onClick={() => {
                console.log(state);
              }}
            >
              Detalle de Facturación
            </h4>
          </div>
          <form className="form-contact-cart">
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
                  Nombre <span>*</span>
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
                  htmlFor="surname"
                  className={
                    up.surname
                      ? "contact-item-text contact-item-text-up"
                      : "contact-item-text"
                  }
                >
                  Apellido <span>*</span>
                </label>
                <input
                  className="contact-item-input"
                  type={"text"}
                  name={"surname"}
                  onFocus={() => {
                    const aux = { ...up };
                    aux.surname = true;
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
                  htmlFor="dni"
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
              <div className="contact-cart-item country">
                {!handleToken ? (
                  <span>CARGANDO...</span>
                ) : (
                  <>
                    <div className="conten-select-country">
                      <select
                        className="select-country"
                        onChange={selectCountry}
                      >
                        <option defaultValue="Default">Escoja Pais</option>
                        {country.map((countryes) => (
                          <option
                            key={countryes.country_name}
                            value={countryes.country_name}
                          >
                            {countryes.country_name}
                          </option>
                        ))}
                      </select>
                      <i></i>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="contact-cart-block">
              <div className="contact-cart-item country">
                {!handleCountry ? (
                  <>
                    <div className="conten-select-country">
                      <select className="select-country" disabled={true}>
                        <option defaultValue="Default">Escoja Provincia</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="conten-select-country">
                      <select className="select-country" onChange={selectState}>
                        <option defaultValue="Default">Escoja Provincia</option>
                        {state.map((states) => (
                          <option
                            key={states.state_name}
                            value={states.state_name}
                          >
                            {states.state_name}
                          </option>
                        ))}
                      </select>
                      <i></i>
                    </div>
                  </>
                )}
              </div>
              <div className="contact-cart-item country">
                {!handleCity ? (
                  <>
                    <div className="conten-select-country">
                      <select className="select-country" disabled={true}>
                        <option defaultValue="Default">Escoja Ciudad</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="conten-select-country">
                      <select className="select-country">
                        <option defaultValue="Default">Escoja Ciudad</option>
                        {city.map((cityes) => (
                          <option
                            key={cityes.city_name}
                            value={cityes.city_name}
                          >
                            {cityes.city_name}
                          </option>
                        ))}
                      </select>
                      <i></i>
                    </div>
                  </>
                )}
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
          </form>
        </>
      </div>
    </Layout>
  );
};

export default CheckoutView;
