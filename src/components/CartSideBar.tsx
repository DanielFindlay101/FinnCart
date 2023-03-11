import { useFinnStore } from "../useFinnStore";
import { XMarkIcon } from "@heroicons/react/24/solid";

const CartSideBar = () => {
  const openCartSidebar = useFinnStore((state) => state.openCartSidebar);
  const cartSidebar = useFinnStore((state) => state.cartSidebar);

  return (
    <>
      <div className="h-full w-1/4 bg-emerald-600 fixed top-0 right-0">
        <div className="flex justify-between items-center mx-2 my-2">
          <h1>Your Basket</h1>
          <XMarkIcon
            onClick={() => openCartSidebar(!cartSidebar)}
            className="w-10"
          />
        </div>
      </div>
    </>
  );
};

export default CartSideBar;
