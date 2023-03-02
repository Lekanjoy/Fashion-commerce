import React from "react";
import { Link, useNavigate } from "react-router-dom";
import null_user from '../assets/null_user.svg'
import { logOut, useAuth } from "../firebase";

const Sidebar = () => {
  // Get Current User
  const user = useAuth();
  // Handle Log out
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      alert("LogOut Unsuccessful");
    }
  }

  return (
    <nav className="absolute shadow-2xl  top-[65px] left-0 bg-white text-blue-500  p-6  h-[90vh]  w-2/3">
      <div className="flex mb-16">
        <img className="w-12 h-12 rounded-full" src={user?.photoURL || null_user} alt="User profile image" />
        <div className="flex flex-col ml-4">
          <h1 className="font-bold text-lg text-gray-400">@{user?.displayName}</h1>
          <p className="text-xs font-thin">{user?.email}</p>
          </div>
      </div>
      <div className=" flex flex-col gap-y-8">
        <Link to="/">Home</Link>
        <Link to="">Profile</Link>
        <Link to="">Orders</Link>
        <Link to="">About Us</Link>
        <Link to="">Support</Link>
        <Link to="">FAQ</Link>
      </div>

      <button
        onClick={handleLogOut}
        className="bg-blue-400 text-white w-full mt-12 p-2 rounded-full font-bold hover:bg-blue-500"
      >
        {user ? "Log Out" : "Log In"}
      </button>
    </nav>
  );
};

export default Sidebar;
