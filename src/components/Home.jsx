import PartOfList from "./list/PartOfList";

export default function Home( {data} ) {

    if(!data || !data.data || data.data.length === 0){
        return <p>Loading...</p> //Here will show Message/>
    }

  return (
    <section className="w-full h-[90vh] bg-[#1A1C22ff] p-10 flex items-center gap-5 flex-col md:flex-row">
      <div className=" w-10/12 h-4/5 flex flex-col items-center text-center justify-center gap-5 xs:w-5/12">
        <h1 className="text-xl font-extrabold text-white md:text-4xl">
          Welcome to <span className="text-yellow-400">Crypto</span>, a site for
          tracking and buying cryptocurrencies!
        </h1>
        <button className="bg-yellow-400 w-40 h-12 text-white rounded-md text-xl font-bold cursor-pointer hover:bg-yellow-500">
          Invest
        </button>
        <img className="w-20 md:w-50" src="icons8-crypto-wallet-64.png" alt="" />
      </div>
     <PartOfList title="Most popular cryptocurency" data={data.data}/>
    </section>
  );
}
