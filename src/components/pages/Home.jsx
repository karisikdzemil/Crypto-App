import PartOfList from "../list/PartOfList";
import HomeDisplayImg from "../home/HomeDisplayImg";

export default function Home( {data} ) {

    if(!data || !data.data || data.data.length === 0){
        return <p>Loading...</p> //Here will show Message/>
    }

  return (
    <>    <section className="w-full min-h-[90vh] bg-[#1A1C22ff] p-10 flex items-center gap-5 flex-col sm:flex-row">
      <div className=" w-6/12 h-4/5 flex flex-col items-center text-center justify-evenly gap-5 xs:w-5/12">
        <h1 className="text-xl font-extrabold text-white md:text-5xl w-full">
          Welcome to <span className="text-[#F0B90B]">Crypto</span>, a site for
          tracking and buying cryptocurrencies!
        </h1>
        <button className="bg-[#FCD535] w-1/2 h-12 text-white rounded-md text-xl font-bold cursor-pointer hover:bg-[#F0B90B]">
          Invest
        </button>
        <img className="w-20 md:w-50" src="icons8-crypto-wallet-64.png" alt="" />
      </div>
     <PartOfList title="Most popular cryptocurency" data={data.data}/>
    </section>
     <HomeDisplayImg />
    </>

  );
}
