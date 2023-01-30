import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-screen bg-purple-600 py-[25px] px-[50px] flex justify-between">
      <h1 className="font-poppins font-bold text-2xl text-white">FinnCart</h1>
      <Link to="/checkout">
        <span
          className="bg-green-300 p-2 rounded-md border border-slate-800
         hover:bg-green-300 hover:cursor-pointer"
        >
          Checkout
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
