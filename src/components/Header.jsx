import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import hamburger from "../assets/hamburger.svg";
import search from "../assets/search.svg";
import cart from '../assets/cart.svg'
const Header = ({cartNumber}) => {
  const [showNav, setShowNav] = useState(false);

  // SideBar Toggle Function
  const toggleSideBar = () => setShowNav((prevState) => !prevState);

  return (
    <header className="flex relative justify-between pb-8 cursor-pointer">
      <img onClick={toggleSideBar} src={hamburger} alt="hamburger menu" />
      <div className="flex gap-x-4 ">
        <img src={search} alt="search icon" />
        <Link to="/cart">
          <img src={cart} alt="Cart details icon" />
        </Link>
        <p className="text-red-500 text-sm -top-2 -right-2 absolute font-bold">{cartNumber}</p>
      </div>
      {showNav && <Sidebar />}
    </header>
  );
};

export default Header;
