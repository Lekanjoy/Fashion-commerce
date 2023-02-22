import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/pages/Cart";
import ProductDetails from "./components/pages/ProductDetails";
import productsData from "./productsData";

export const ProductDataContext = createContext();

function App() {
  const [productData, setProductData] = useState(productsData);



  return (
    <ProductDataContext.Provider value={productData}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:info" element={<ProductDetails />} />
      </Routes>
    </ProductDataContext.Provider>
  );
}

export default App;
