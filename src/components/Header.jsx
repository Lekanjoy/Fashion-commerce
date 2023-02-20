import { useState } from "react";
import Sidebar from "./Sidebar";
import hamburger from "../assets/hamburger.svg";
import search from "../assets/search.svg";
import cart from '../assets/cart.svg'
const Header = () => {
  const [showNav, setShowNav] = useState(false);

  // SideBar Toggle Function
  const toggleSideBar = () => setShowNav((prevState) => !prevState);

  return (
    <header className="flex relative justify-between pb-8 cursor-pointer">
      <img onClick={toggleSideBar} src={hamburger} alt="hamburger menu" />
      <div className="flex gap-x-2">
        <img src={search} alt="search icon" />
        <img onClick={toggleSideBar} src={cart} alt="hamburger menu" />
      </div>
      {showNav && <Sidebar />}
    </header>
  );
};

export default Header;
