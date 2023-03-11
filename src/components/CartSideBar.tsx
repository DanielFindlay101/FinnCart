import { useFinnStore } from "../useFinnStore";
import { XMarkIcon } from "@heroicons/react/24/solid";
import CartItems from "./CartItems";

const CartSideBar = () => {
  const openCartSidebar = useFinnStore((state) => state.openCartSidebar);
  const cartSidebar = useFinnStore((state) => state.cartSidebar);
  const cartItems = useFinnStore((state) => state.cartItems);

  return (
    <>
      <div className="h-full flex flex-col items-center gap-4 w-1/4 bg-emerald-600 fixed top-0 right-0">
        <div className="flex justify-between items-center w-full mx-3 my-2">
          <h1>Your Basket</h1>
          <XMarkIcon
            onClick={() => openCartSidebar(!cartSidebar)}
            className="w-10"
          />
        </div>
        {cartItems === 0 ? (
          <p className="text-white">
            There are currently no items in your cart
          </p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CartSideBar;
