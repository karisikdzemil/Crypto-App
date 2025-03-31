// import { useEffect, useState } from "react";
import PartOfList from "./PartOfList";

// const coinCapKey = "43422c1a-2e87-4553-8af5-cabbd94100da";
export default function Home( {data} ) {
//     const [homeData, setHomeData] = useState([]);

// useEffect(() => {
//     fetch('/api/v1/cryptocurrency/listings/latest', {
//         method: 'GET',
//         headers: {
//             'X-CMC_PRO_API_KEY': coinCapKey
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         setHomeData(data);
//     })
//     .catch(error => console.error("Greška prilikom fetchovanja:", error));
// }, []);

    if(!data || !data.data || data.data.length === 0){
        return <p>Loading...</p> //Here will show Message/>
    }

  return (
    <section className="w-full h-[90vh] bg-slate-800 flex items-center gap-5">
      <div className=" w-6/12 h-4/5 flex flex-col items-center text-center justify-center gap-5">
        <h1 className="text-4xl font-extrabold text-white">
          Welcome to <span className="text-amber-500">Crypto</span>, a site for
          tracking and buying cryptocurrencies!
        </h1>
        <button className="bg-amber-500 w-40 h-12 text-white rounded-md text-xl font-bold cursor-pointer hover:bg-amber-600">
          Buy Now
        </button>
        <img className="w-50 " src="icons8-crypto-wallet-64.png" alt="" />
      </div>
     <PartOfList title="Most popular cryptocurency" data={data.data}/>
    </section>
  );
}
