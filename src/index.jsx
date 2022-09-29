import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppSlider from "./AppSlider";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <AppSlider />
    <Footer />
  </React.StrictMode>
);
