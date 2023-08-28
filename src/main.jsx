import React from "react";
import ReactDOM from "react-dom/client";
import App from "./root/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ModalContextWrapper from "./context/modalContext";
// import "../i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ModalContextWrapper>
      <App />
      <ToastContainer />
    </ModalContextWrapper>
  </BrowserRouter>
);
