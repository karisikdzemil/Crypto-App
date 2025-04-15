import PartOfList from "../list/PartOfList";
import HomeDisplayImg from "../home/HomeDisplayImg";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import SearchContext from "../../store/SearchContext";

export default function Home() {
  const userCtx = useContext(AuthContext);
  const searchCtx = useContext(SearchContext)

  let email = "****@*********";
  let balance = "******* ";
  if (userCtx.isUserData) {
    email = userCtx.userData.email;
    balance = userCtx.userData.balance;
    console.log(userCtx.userData)
  }

  if (!searchCtx.cryptoData || !searchCtx.cryptoData.data || searchCtx.cryptoData.data.length === 0) {
    return <p>Loading...</p>; //Here will show Message/>
  }


  return (
    <>
      {" "}
      <section className="w-full min-h-[90vh] bg-[#1A1C22ff] p-10 flex items-center gap-5 flex-col sm:flex-row">
        <div className=" w-6/12 h-4/5 flex flex-col items-center text-center justify-evenly gap-5 xs:w-5/12">
          <h1 className="text-xl font-extrabold text-white md:text-5xl w-full">
            Welcome to <span className="text-[#F0B90B]">Crypto</span>, a site
            for tracking and buying cryptocurrencies!
          </h1>
          <button className="bg-[#F0B90B] w-1/2 h-12 text-black rounded-md text-xl font-bold cursor-pointer hover:bg-[#FCD535]">
            Invest
          </button>
          <div className=" w-full h-30 flex flex-col items-left p-3 justify-center gap-5">

              <h1 className="text-left text-white font-bold sm:text-base text-xs w-full">{email}</h1>
              <h1 className="text-left text-white font-bold w-full sm:text-base text-xs">
                Balance: {balance}$
              </h1>
            
          </div>
          <img
            className="w-20 md:w-50"
            src="icons8-crypto-wallet-64.png"
            alt=""
          />
        </div>
        <PartOfList title="Most popular cryptocurency" data={searchCtx.cryptoData.data} />
      </section>
      <HomeDisplayImg />
    </>
  );
}
