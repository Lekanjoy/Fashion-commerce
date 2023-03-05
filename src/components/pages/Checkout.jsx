import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";
import { useAuth } from "../../firebase";
import { ProductDataContext } from "../../App";


const Checkout = () => {
  const { subTotalPrice } = useContext(ProductDataContext);
  const shippingPrice = 3.25;
  const totalPrice = subTotalPrice + shippingPrice;
  const navigate = useNavigate();
  const user = useAuth();

  // Credentials for Paystack
  const publicKey = import.meta.env.VITE_REACT_APP_PAYSTACK_PUBLIC_KEY;

  const amount =Math.round(totalPrice * 460.5 * 100);
  const email = user?.email;

  console.log(amount);

  // Paystack Component Props
  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Proceed to Payment",
    onSuccess: () => {
      navigate("/payment_successful");
    },
    onClose: () => navigate("/"),
  };

  const [storedAddress, setStoredAddress] = useState("");
  useEffect(() => {
    const storedAddress = localStorage.getItem("address");
    if (storedAddress) {
      setStoredAddress(storedAddress);
    }
  }, []);

  return (
    <div className="bg-gray-100 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Checkout</h2>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Shipping address</h3>
              <p className="text-gray-700 mb-2">
                {user?.displayName || email}
                <br />
                {storedAddress}
              </p>
              <Link to="/profile" className="text-blue-500 hover:text-blue-600">
                Change
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-semibold mb-2">Delivery method</h3>
              <div className="bg-gray-200 p-4 rounded-lg mb-2">
                <p className="text-gray-700 mb-2">Standard Shipping</p>
                <p className="text-gray-700">
                  Estimated delivery date: March 15, 2023
                </p>
              </div>
              <button
                to="/profile"
                className="text-blue-500 hover:text-blue-600"
              >
                Change
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Order summary</h3>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 border-b border-gray-400">
                      Subtotal:
                    </td>
                    <td className="py-2 text-right border-b border-gray-400">
                      ${subTotalPrice.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 border-b border-gray-400">
                      Shipping:
                    </td>
                    <td className="py-2 text-right border-b border-gray-400">
                      ${shippingPrice.toFixed(2)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Total:</td>
                    <td className="py-2 text-right font-semibold">
                      ${totalPrice.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full md:w-1/2">
              <PaystackButton
                {...componentProps}
                className="bg-[#28ADBF] hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
