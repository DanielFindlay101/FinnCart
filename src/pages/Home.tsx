import CartSideBar from "../components/CartSideBar";
import ItemCard from "../components/ItemCard";
import NavBar from "../components/NavBar";
import { useFetch } from "../hooks/useFetch";
import { useFinnStore } from "../useFinnStore";

const Home = () => {
  const { items } = useFetch();
  const cartSidebar = useFinnStore((state) => state.cartSidebar);

  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        <div
          className="flex-1 grid gap-8 md:grid-cols-2 lg:grid-cols-2 justify-items-center
         pt-10 bg-slate-800"
        >
          {items?.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
        {cartSidebar && <CartSideBar />}
      </div>
    </>
  );
};

export default Home;
