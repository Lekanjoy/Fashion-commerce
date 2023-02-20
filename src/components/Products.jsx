import React from "react";
import star from "../assets/Star 4.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productsData from "../productsData";

const Products = () => {
  // Toast Notification Handler
  const notify = () => {
    toast.success("Added to Cart!", {
      pauseOnHover: false,
    });
  };

  return (
    <section className="grid grid-cols-2 gap-3">
      {productsData.map((product) => {
        return (
          <div className="bg-[#fefefe] shadow-md border p-2 rounded-md text-center">
            <div className="bg-[#c5eaef] rounded">
              <img
                src={`./asset/${product.imageSrc}`}
                alt={product.name}
                className="min-w-[100px] min-h-[100px] max-w-1080px] max-h-[100px]"
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="font-medium text-sm text-[#303030]">
                {product.name}
              </p>
              <div className="flex items-center text-[10px]">
                <img src={star} alt=" star icon" className="w-[8px]" />
                <i className="text-[rgba(48,48,48,0.7)]">4.5</i>
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
          </div>
        );
      })}

      <ToastContainer />
    </section>
  );
};

export default Products;
