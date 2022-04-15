import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/index.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
