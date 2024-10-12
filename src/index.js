import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import { firebase } from "./lib/firebase.prod";
import { FireBaseContext } from "./context/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <FireBaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FireBaseContext.Provider>
  </>
);
