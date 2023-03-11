import { useState } from "react";
import { itemData } from "../hooks/useFetch";
import { useFinnStore } from "../useFinnStore";
import { Link } from "react-router-dom";

interface ItemCardProps {
  item: itemData;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const increaseItems = useFinnStore((state) => state.increaseCartItems);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-96 bg-slate-200 rounded-lg">
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
      <div className="flex justify-center">
        <img className="w-3/4 h-[200px] pb-3 rounded-md" src={item.imageURL} />
      </div>
      <div className="flex justify-around pb-3">
        <Link to="/checkout">
          <button className="bg-violet-700 text-white px-4 py-2 rounded-3xl">
            Buy Now
          </button>
        </Link>
        <div className="flex justify-evenly gap-[5px]">
          <button
            className="border-2 border-slate-400 px-4 py-2 rounded-3xl"
            onClick={() => increaseItems(quantity)}
          >
            Add to cart
          </button>
          <div className="flex flex-col">
            <label htmlFor="QTY">QTY</label>
            <select
              name="QTY"
              id="QTY"
              className="rounded-md"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
