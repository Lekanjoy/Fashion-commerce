import React, { useState, useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import star from "../assets/Star 4.svg";
import { ProductDataContext } from "../App";

const ProductCard = ({ productData }) => {
  const { handleAddToCart} = useContext(ProductDataContext);

  return (
    <>
    {productData.map(product => {
      return (
        <div
          key={product.id}
          className="bg-[#fefefe] w-full border shadow-md  p-2 rounded-md text-center"
        >
          <Link to={`/product/${product.id}`}>
            {/* Navigates to unque product page details when clicked on image */}
            <div className=" rounded w-full h-[100px] bg- p-2 border border-[#2badbf]">
              <img
                src={product.images[0]}
                alt={product.title}
                className="min-w-[100%] max-w-full max-h-full bg-transparent w-full h-full object-contain"
              />
            </div>
          </Link>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold text-left text-sm text-[#303030]">
              {product.title}
            </p>
            <div className="flex items-center text-[10px]">
              <img src={star} alt=" star icon" className="w-[8px]" />
              <i className="text-[rgba(48,48,48,0.7)]">{product.rating}</i>
            </div>
          </div>
          <div className="flex items-center justify-between my-3 relative">
            <p className="text-[#303030]  font-medium">${product.price}</p>
            <p className="absolute text-[rgba(48,48,48,0.7)] left-7 line-through text-[10px] top-5">
              -{product.discountPercentage}%
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
    })}
  
    </>
  );
};

export default ProductCard;
