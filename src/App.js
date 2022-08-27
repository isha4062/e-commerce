import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import "rsuite/dist/styles/rsuite-default.css";
import "./styles/home.scss"


function App() {
  return (
      <Routes>
        <Route path="/e-commerce" element={<Home />} />
        <Route path="/category/:pid" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
  );
}

export default App;
