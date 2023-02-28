import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import backArrow from "../../assets/back-arrow.svg";
import star from "../../assets/Star 4.svg";
import { ProductDataContext } from "../../App";
import { useAuth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";


const Cart = () => {
  const { uniqueItems, handleAddToCart, handleRemoveFromCart, cartDetails } =
    useContext(ProductDataContext);

  // Navigate to previous page
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  // Get Subtotal price of Items in Cart
  let subTotalArray = [];

  cartDetails.forEach((item) => {
    subTotalArray.push(item.price);
  });

  const subTotalPrice = subTotalArray.reduce(
    (total, price) => total + price,
    0
  );

  const user = useAuth();

  // Handle Checkout Button
  const handleCheckout = () => {
    if (user && cartDetails.length > 0) {
      navigate("/checkout");
    } else if (user && cartDetails.length < 1) {
      toast.error("Cart is Empty!", {
        pauseOnHover: false,
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="px-[20px] pt-8 pb-64 relative">
      <img
        onClick={handleBack}
        src={backArrow}
        alt="back arrow icon"
        className="w-[15px] h-[15px] mb-[34px] bg-white rounded-full cursor-pointer hover:scale-110"
      />
      {uniqueItems.length < 1 ? (
        <div className="w-full h-full bg-white border shadow-md p-12 rounded-md flex flex-col gap-y-6 justify-center items-center md:max-w-[600px]">
          <p className="text-[#303030] font-semibold animate-pulse">
            Cart is Empty!
          </p>
          <Link
            to="/"
            className=" bg-teal-400 flex  w-fit p-2 rounded-md text-white text-sm hover:scale-105"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        uniqueItems.map((cart) => {
          return (
            <div
              key={cart.id}
              className="w-full bg-white shadow-md rounded-md mb-2 border flex justify-between gap-x-[20px] p-4"
            >
              <div className="bg-[#C5EAEF] flex justify-center align-center  min-w-[137px] min-h-[120px] rounded-md ">
                <img src={cart.image} alt={cart.title} className="w-fit" />
              </div>
              <div className="text-[#303030]">
                <h1 className="font-bold">{cart.title}</h1>
                <p className="text-sm text-[rgba(48,_48,_48,_0.7)] mb-[11px]">
                  {cart.description}
                </p>
                <div className="flex gap-x-1 mb-[15px]">
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <img src={star} alt="star icon" />
                  <p className="text-sm">{cart.rating.rate}</p>
                </div>
                <div className="flex gap-x-6">
                  <p className="font-semibold text-[20px]">${cart.price}</p>
                  <div className="flex gap-x-2 cursor-pointer">
                    <p
                      onClick={() => handleRemoveFromCart(cart)}
                      className="font-bold text-lg"
                    >
                      -
                    </p>
                    <input
                      value={cart.quantity}
                      className="border w-[30px] text-center font-medium"
                    />
                    <p
                      onClick={() => handleAddToCart(cart)}
                      className="font-bold text-lg"
                    >
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
      <footer className="bg-[#fefefe] flex flex-col  rounded-t-3xl border px-[20px] py-6 w-full h-[184px] fixed left-0 bottom-0 z-10">
        <div className="flex justify-between font-bold text-[#303030] text-lg">
          <h3>Total Items: {uniqueItems.length}</h3>
          <h3>Total Price: ${subTotalPrice.toFixed(2)}</h3>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleCheckout}
            className="mt-12 bg-[#28ADBF] w-[285px]  text-white font-semibold rounded-sm px-[93px] py-[13px]"
          >
            Checkout
          </button>
        </div>
      </footer>
      <ToastContainer />
    </section>
  );
};

export default Cart;
