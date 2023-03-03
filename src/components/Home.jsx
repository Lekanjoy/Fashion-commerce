import React, { useState } from "react";
import Header from "./Header";
import DisCountCard from "./DisCountCard";
import Products from "./Products";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../firebase";

const Home = () => {
  const [showNav, setShowNav] = useState(false);

  // SideBar Toggle Function
  const toggleSideBar = () => setShowNav((prevState) => !prevState);

  // Get Current User
  const user = useAuth();

  return (
    <main className="px-5 py-8 font-[quicksand] w-full">
      <Header
        showNav={showNav}
        setShowNav={setShowNav}
        toggleSideBar={toggleSideBar}
      />
      <div className="mb-3 mt-12 ">
        <h1 className="text-xl font-bold">
          Hello, {user?.displayName || user?.email || "User"}
        </h1>
        <p className="text-gray-700 text-sm">What got your attention today?</p>
      </div>
      <div className="w-full flex gap-x-4 overflow-x-scroll mb-6">
        <DisCountCard />
        <DisCountCard />
        <DisCountCard />
      </div>
      <Products />
      <ToastContainer />
    </main>
  );
};

export default Home;
