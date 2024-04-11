import React from "react";
// import redux + store
import { Provider } from "react-redux";
import store from "./store";
// importation des routes
import ReactDOM from "react-dom/client";
import Router from "./router";
// importation du style
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
