import React from "react";
import { itemData } from "../hooks/useFetch";

interface ItemCardProps {
  item: itemData;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="w-96 h-72 mt-12 bg-slate-200 rounded-lg">
      <div className="flex justify-between px-6 pt-4">
        <h1 className="">{item.itemName}</h1>
        <p className="text-slate-600">
          {item.inStock ? "In stock" : "Out of stock"}
        </p>
      </div>
      <div className="flex justify-between px-6 pt-6">
        <ul className="flex justify-start items-center gap-8 text-violet-700 text-bold cursor-pointer">
          <li className="bg-violet-700 text-white rounded-full h-9 w-9 text-center pt-[6px]">
            XS
          </li>
          <li>S</li>
          <li>M</li>
          <li>L</li>
          <li>XL</li>
        </ul>
        <h1 className="text-xl">£{item.price}</h1>
      </div>
      <br />
      <div className="flex justify-around">
        <button className="bg-violet-700 text-white px-4 py-2 rounded-3xl">
          Buy Now
        </button>
        <button className="border-2 border-slate-400 px-4 py-2 rounded-3xl">
          Add to cart
        </button>
      </div>
    </div>
  );
}
