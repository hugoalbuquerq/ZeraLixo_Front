import React from "react";
import ReactDOM from "react-dom/client";
import { createPortal } from "react-dom";
import App from "./App";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    {createPortal(<Footer />, document.getElementById("footer"))}
  </>
);
