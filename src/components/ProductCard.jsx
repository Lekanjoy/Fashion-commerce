import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import star from "../assets/Star 4.svg";

const ProductCard = ({ product, notify }) => {
 
  return (
    <div className="bg-[#fefefe] shadow-md border p-2 rounded-md text-center">
      <div className="bg-[#c5eaef] rounded flex items-center justify-center">
        {/* Navigates to unque product page details when clicked on image */}
        <Link to={`/product/${product.id}`}>
          <img
            src={`./asset/${product.imageSrc}`}
            alt={product.name}
            className="min-w-[100px] min-h-[100px] max-w-1080px] max-h-[100px]"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="font-medium text-sm text-[#303030]">{product.name}</p>
        <div className="flex items-center text-[10px]">
          <img src={star} alt=" star icon" className="w-[8px]" />
          <i className="text-[rgba(48,48,48,0.7)]">{product.rating}</i>
        </div>
      </div>
      <div className="flex items-center justify-between my-3 relative">
        <p className="text-[#303030]  font-medium">{product.price}</p>
        <p className="absolute text-[rgba(48,48,48,0.7)] left-7 line-through text-[10px] top-5">
          $23
        </p>
        <button
          onClick={notify}
          className="bg-[#2badbf] text-sm p-1 text-white"
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductCard;
