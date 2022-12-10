import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.js";
import { CartContextProvider } from "./context/cartContext.js";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APY_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "mon-amie-a847b",
  storageBucket: "mon-amie-a847b.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CartContextProvider>
);
