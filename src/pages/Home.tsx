import ItemCard from "../components/ItemCard";
import NavBar from "../components/NavBar";
import { useFetch } from "../hooks/useFetch";

const Home = () => {
  const { items } = useFetch();
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div
          className="flex-1 grid gap-3 md:grid-cols-2 lg:grid-cols-2 justify-items-center
        w-screen pt-10 bg-slate-800"
        >
          {items?.map((item) => (
            <ItemCard item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
