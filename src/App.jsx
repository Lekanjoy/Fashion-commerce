import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";
import Home from "./components/Home";
import Cart from "./components/pages/Cart";
import ProductDetails from "./components/pages/ProductDetails";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Checkout from "./components/pages/Checkout";

// Creating Context
export const ProductDataContext = createContext();

function App() {
  const [Loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [cartDetails, setCartDetails] = useState([]);

  // Getting Products Data from Backend
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);


  // Add Item to Cart
  const handleAddToCart = (product) => {
    setCartDetails([...cartDetails, product]);
    // Toast Notification
    toast.success("Added to Cart!", {
      pauseOnHover: false,
    });
  };

  // Delete or Remove Item from Cart
  const handleRemoveFromCart = (productToRemove) => {
    const indexToRemove = cartDetails.findIndex(
      (item) => item.id === productToRemove.id
    );
    if (indexToRemove !== -1) {
      const updatedCartDetails = [...cartDetails];
      updatedCartDetails.splice(indexToRemove, 1);
      setCartDetails(updatedCartDetails);
    }
  };

  // Create an object to count the quantity of each product
  const itemCounts = cartDetails.reduce((counts, item) => {
    counts[item.title] = (counts[item.title] || 0) + 1;
    return counts;
  }, {});

  // Create a new array of unique products with their quantities
  const uniqueItems = Object.keys(itemCounts).map((name) => {
    const item = cartDetails.find((item) => item.title === name);
    return { ...item, quantity: itemCounts[name] };
  });
  // console.log(uniqueItems);

  return (
    <ProductDataContext.Provider
      value={{
        productData,
        cartDetails,
        handleAddToCart,
        handleRemoveFromCart,
        uniqueItems,
      }}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:info" element={<ProductDetails />} />
      </Routes>
    </ProductDataContext.Provider>
  );
}

export default App;
