import React, { useState, useEffect } from "react";
import DisCountCard from "./DisCountCard";
import Products from "./Products";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../firebase";
import secure from '../assets/secure.png'
import paperBag from '../assets/Paperbag.png'

const Home = () => {
  const [greeting, setGreeting] = useState('');

  // Get Current Time and Set Greeting
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) {
      setGreeting('Good morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  // Get Current User
  const user = useAuth();

  return (
    <main className="px-5 py-8  font-[quicksand] w-full">
      <div className="mb-3 mt-12 ">
        <h1 className="text-xl font-bold">
          {greeting} {user?.displayName || user?.email}
        </h1>
        <p className="text-gray-700 text-sm">What got your attention today?</p>
      </div>
      <div className="w-full flex gap-x-4 overflow-hidden mb-6">
        <DisCountCard
          title="Get all products at a"
          subTitle="whooping 50% off"
          img={paperBag}
        />
        <DisCountCard
          title="Shop and make"
          subTitle="secure payments with ease"
          img={secure}
        />
        <DisCountCard
          title="Get all products at a"
          subTitle="whooping 50% off"
          img={paperBag}
        />
        <DisCountCard
          title="Shop and make"
          subTitle="secure payments with ease"
          img={secure}
        />
      </div>
      <Products />
      <ToastContainer />
    </main>
  );
};

export default Home;
