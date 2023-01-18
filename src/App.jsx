import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/pages/Cart";
import ProductDetails from './components/pages/ProductDetails'

// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

function App() {
  //  const notify = () =>
  //    toast.success("Added to Cart!", {
  //      pauseOnHover: false,
  //    });

  return (
    <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/prod" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
