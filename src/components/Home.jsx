import { useCallback, useEffect, useState } from "react";
import HomePage from "./HomePage";

const coinCapKey = "43422c1a-2e87-4553-8af5-cabbd94100da";
export default function Home() {
    const [homeData, setHomeData] = useState([]);

//   useEffect(() => {
//     fetch(`/api/v1/cryptocurrency/listings/latest`, {
//         method: "GET",
//         headers: {
//             'X-CMC_PRO_API_KEY': coinCapKey
//         },
//       })
//       .then(response => response.json())
//       .then(data => {
//         setHomeData(data);
//         console.log(data)
//         } )
//       .catch(error => console.error('Error:', error));
    
//   }, []);

useCallback(() => {
    useEffect(() => {
    fetch('/api/v1/cryptocurrency/listings/latest', {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': coinCapKey
        }
    }).then(response => response.json())
    .then(data => {
        setHomeData(data);
        console.log(homeData);
        })
}, [])
}, [homeData]);

  return (
    <section className="w-full h-[90vh] bg-slate-500 flex items-center gap-5">
      <div className=" w-6/12 h-4/5 flex flex-col items-center text-center justify-center gap-5">
        <h1 className="text-4xl font-extrabold text-white">
          Welcome to <span className="text-amber-500">Crypto</span>, a site for
          tracking and buying cryptocurrencies!
        </h1>
        <button className="bg-amber-500 w-40 h-12 text-white rounded-md text-xl font-bold cursor-pointer">
          Watch Now
        </button>
        <img className="w-50 " src="icons8-crypto-wallet-64.png" alt="" />
      </div>
      <HomePage title="Best cryptocurency" data={homeData}/>
    </section>
  );
}
