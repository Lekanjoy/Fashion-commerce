import React, { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ProductDataContext } from "../../App";
import backArrow from "../../assets/back-arrow.svg";
import star from "../../assets/Star 4.svg";
import cart from "../../assets/cart.svg";
import { ToastContainer } from "react-toastify";

const ProductDetails = () => {
  const { productData, handleAddToCart, uniqueItems } =
    useContext(ProductDataContext);
  const { info } = useParams();
  const productInfo = productData.find(
    (product) => product.id === parseInt(info)
  );

  // Getting Number of Items in the Cart
  let cartProductSize = uniqueItems.length;

  // Navigate to previous page
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };


  return (
    <section className="px-[20px] pt-3 pb-64 relative h-screeen">
      <div className="flex fixed justify-between items-center cursor-pointer shadow-sm top-0 p-4 left-0 w-full h-[30px] z-10">
        <img
          onClick={handleBack}
          src={backArrow}
          alt="back arrow icon"
          className="w-[15px] h-[15px] hover:scale-110"
        />
        <Link to="/cart" className="relative">
          <img src={cart} alt="" />
          <p className="text-red-500 text-xs -top-2 -right-2 absolute font-bold">
            {cartProductSize}
          </p>
        </Link>
      </div>
      <h1 className="font-bold text-[#303030] my-12">{productInfo.title}</h1>
      {/* <p className="text-xs max-w-[250px] text-[rgba(48,_48,_48,_0.7)] mb-[10px]">
        {productInfo.description}
      </p> */}
      <div className="w-full h-[200px] flex items-center justify-center">
        <img
          src={productInfo.thumbnail}
          alt={productInfo.name}
          className="h-full object-contain rounded-sm"
        />
      </div>
      {/* <div className="flex justify-center gap-x-[20px] mb-[20px] mt-[20px]">
        <p className="size">38</p>
        <p className="size">40</p>
        <p className="size">42</p>
        <p className="size">44</p>
      </div> */}
      <footer className="bg-[#fefefe] flex flex-col rounded-t-3xl border px-[20px] py-6 w-full h-[40vh] fixed left-0 bottom-0 z-10">
        <div className="flex justify-between">
          <h1 className="text-[#303030] text-lg font-bold">
            {productInfo.title}
          </h1>
          <div className="flex gap-x-1 mb-[15px]">
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <img src={star} alt="star icon" />
            <p className="text-sm">{productInfo.rating.rate}</p>
          </div>
        </div>
        <h2 className="mt-[18px] text-[#303030] mb-2 font-bold">Description</h2>
        <p className="text-xs font-medium text-[rgba(48,_48,_48,_0.5)] mb-4">
          {productInfo.description}
        </p>
        <div className="flex justify-between">
          <div>
            <p className="text-[rgba(48,_48,_48,_0.5)] text-sm">Price</p>
            <h2 className="text-[#303030] text-xl font-semibold">
              ${productInfo.price}
            </h2>
          </div>
          <button
            onClick={() => handleAddToCart(productInfo)}
            className="bg-[#28ADBF] rounded-sm px-[27px] py-[9px] text-white font-semibold "
          >
            Add to cart
          </button>
        </div>
      </footer>
      <ToastContainer />
    </section>
  );
};

export default ProductDetails;
