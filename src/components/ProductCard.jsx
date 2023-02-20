import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-[#fefefe] shadow-md border p-5 rounded-md text-center">
      <img src={Watch} alt="Rolex Watch" />
      <button
        onClick={notify}
        className="bg-blue-400 text-white py-1 px-2 rounded-md mt-3 w-full text-sm font-semibold "
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
