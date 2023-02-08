import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  return (
    <nav className="w-screen bg-violet-700 py-[25px] px-[50px] flex justify-between">
      <h1 className="font-poppins font-bold text-2xl text-white">FinnCart</h1>
      <div className="flex gap-4">
        <Link to="/checkout">
          <span
            className="bg-green-300 p-2 rounded-md border border-slate-800
         hover:bg-green-300 hover:cursor-pointer"
          >
            Checkout
          </span>
        </Link>
        <ShoppingCartIcon className="h-6 w-6 text-white" />
      </div>
    </nav>
  );
};

export default NavBar;
