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