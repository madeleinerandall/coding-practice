import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Cards from "./Cards";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Cards />
      <Body />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
