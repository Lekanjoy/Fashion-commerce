import React, { useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import star from "../assets/Star 4.svg";
import { ProductDataContext } from "../App";

const ProductCard = ({ product }) => {
  const { handleAddToCart } = useContext(ProductDataContext);

  return (
    <div className="bg-[#fefefe] shadow-md border p-2 rounded-md text-center">
      <Link to={`/product/${product.id}`}>
        {/* Navigates to unque product page details when clicked on image */}
        <div className="bg-[#c5eaef] rounded flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="min-w-[100px] min-h-[100px] max-w-1080px] max-h-[100px] bg-transparent"
          />
        </div>
      </Link>
      <div className="flex justify-between items-center mt-2">
        <p className="font-medium text-sm text-[#303030]">{product.title}</p>
        <div className="flex items-center text-[10px]">
          <img src={star} alt=" star icon" className="w-[8px]" />
          <i className="text-[rgba(48,48,48,0.7)]">{product.rating.rate}</i>
        </div>
      </div>
      <div className="flex items-center justify-between my-3 relative">
        <p className="text-[#303030]  font-medium">${product.price}</p>
        <p className="absolute text-[rgba(48,48,48,0.7)] left-7 line-through text-[10px] top-5">
          $23
        </p>
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-[#2badbf] text-sm p-1 text-white"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
