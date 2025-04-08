import PartOfList from "../list/PartOfList";
import BuyCart from "./BuyCart";
import BuyContainer from "./BuyContainer";
export default function BuyCrypto({ data }) {
  console.log(data.data);
  if (!data || !data.data || data.data.length === 0) {
    return <p>Loading... </p>;
  }
  return (
    <section className="w-full min-h-[90vh] bg-slate-900 p-10">
      <div className="w-full min-h-[70vh] flex md-flex-row">
        <div className="w-3/5 min-h-[70vh] flex items-center justify-center ">
          <div className="md:w-4/5 w-full">
          <h1 className="text-4xl font-bold text-white mb-7">Buy Crypto</h1>
            <PartOfList title="Some of the most popular cryptocurencies!" data={data.data} />
          </div>
        </div>
        <div className="w-2/5 min-h-[80vh] flex items-end justify-center ">
            <BuyContainer />
        </div>  
      </div>
      <div className="w-full min-h-[40vh] flex items-center justify-evenly mt-15 bg-pink-500">
      <BuyCart />
      <BuyCart />
      <BuyCart />
      </div>
    </section>
  );
}
