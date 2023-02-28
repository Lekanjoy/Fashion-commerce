import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ProductDataContext } from "../App";
import hamburger from "../assets/hamburger.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { uniqueItems } = useContext(ProductDataContext);
  let cartProductSize = uniqueItems.length;

  // SideBar Toggle Function
  const toggleSideBar = () => setShowNav((prevState) => !prevState);

  return (
    <header className="flex fixed justify-between items-center shadow-md top-0 p-4 left-0 w-full h-[50px] bg-[#fefefe] z-10">
      <img className="w-5 h-5" onClick={toggleSideBar} src={hamburger} alt="hamburger menu" />
      <div className="flex gap-x-4 relative">
        <img className="w-5 h-5" src={search} alt="search icon" />
        <Link to="/cart">
          <img className="w-5 h-5" src={cart} alt="Cart details icon" />
        <p className="text-white bg-red-500 w-4 h-4 text-center font-semibold border-2 border-[#28ADBF] rounded-full text-[10px] -top-2 -right-2 absolute">
          {cartProductSize}
        </p>
        </Link>
      </div>
      {showNav && <Sidebar />}
    </header>
  );
};

export default Header;
