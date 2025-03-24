import { useEffect, useState } from "react";
import HomePage from "./HomePage";

const coinCapKey = "43422c1a-2e87-4553-8af5-cabbd94100da";
export default function Home() {
    const [homeData, setHomeData] = useState([]);


useEffect(() => {
    fetch('/api/v1/cryptocurrency/listings/latest', {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': coinCapKey
        }
    })
    .then(response => response.json())
    .then(data => {
        setHomeData(data);
    })
    .catch(error => console.error("Greška prilikom fetchovanja:", error));
}, []);

console.log(homeData)

  return (
    <section className="w-full h-[90vh] bg-slate-800 flex items-center gap-5">
      <div className=" w-6/12 h-4/5 flex flex-col items-center text-center justify-center gap-5">
        <h1 className="text-4xl font-extrabold text-white">
          Welcome to <span className="text-amber-500">Crypto</span>, a site for
          tracking and buying cryptocurrencies!
        </h1>
        <button className="bg-amber-500 w-40 h-12 text-white rounded-md text-xl font-bold cursor-pointer">
          Buy Now
        </button>
        <img className="w-50 " src="icons8-crypto-wallet-64.png" alt="" />
      </div>
      <div className="w-5/12 h-[360px] bg-black opacity-60 rounded-sm flex flex-col justify-center items-center gap-5 p-10">
        <h1 className="text-white text-xl w-70 h-5 mb-2">Most popular cryptocurency</h1>
      <HomePage title="Best cryptocurency" data={homeData} i={0}/>
      <HomePage title="Best cryptocurency" data={homeData} i={1}/>
      <HomePage title="Best cryptocurency" data={homeData} i={2}/>
      <HomePage title="Best cryptocurency" data={homeData} i={3}/>
      <HomePage title="Best cryptocurency" data={homeData} i={4}/>

      </div>
    </section>
  );
}
