import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";
import "./i18n";
import * as serviceWorker from "./serviceWorker";
require("dotenv").config();

// const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

ReactDOM.render(
  <BrowserRouter basename="">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
