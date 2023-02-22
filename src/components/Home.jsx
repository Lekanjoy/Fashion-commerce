import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Header from './Header'
import DisCountCard from './DisCountCard'
import Products from './Products'

const Home = () => {
  const [cartNumber, setCartNumber] = useState(0);
  // Toast Notification Handler
  const notify = () => {
    toast.success("Added to Cart!", {
      pauseOnHover: false,
    });
    setCartNumber(prevState => prevState + 1);
  };
  return (
    <div className="px-5 py-8 font-[quicksand] w-full">
      <Header cartNumber={cartNumber}/>
      <div className="mb-3">
        <h1 className="text-xl font-bold">Hello Lexy</h1>
        <p className="text-gray-700 text-sm">What got your attention today?</p>
      </div>
      <div className="w-full flex gap-x-4 overflow-x-scroll mb-6">
        <DisCountCard />
        <DisCountCard />
        <DisCountCard />
      </div>
      <Products notify={notify} />
    </div>
  );
}

export default Home