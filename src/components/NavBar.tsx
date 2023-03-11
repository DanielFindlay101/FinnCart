import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useFinnStore } from "../useFinnStore";

const NavBar = () => {
  const checkoutItems = useFinnStore((state) => state.checkoutItems);
  const cartSidebar = useFinnStore((state) => state.cartSidebar);
  const openCartSidebar = useFinnStore((state) => state.openCartSidebar);

  return (
    <nav className="bg-violet-700 py-[25px] px-[50px] flex justify-between">
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
        <ShoppingCartIcon
          className="h-6 w-6 text-white cursor-pointer"
          onClick={() => openCartSidebar(!cartSidebar)}
        />
        {checkoutItems != 0 && (
          <span className="bg-red-500 rounded-full h-6 w-6 absolute top-[10px] right-[20px] md:right-[34px] text-white text-center">
            {checkoutItems}
          </span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
