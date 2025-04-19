import { useState, useContext } from "react";
import PartOfList from "../list/PartOfList";
import FilterList from '../list/FilterList';
import SearchCrypto from '../list/SearchCrypto';
import RenderingData from '../list/RenderingData';
import SearchContext from "../../store/SearchContext";
import { AuthContext } from "../../store/AuthContext";

import {
  topGainers,
  topLosers,
  topMarketCap,
  topVolume,
} from "../../util/formatter";
import Loading from "../UI/Loading";
import { Link } from "react-router-dom";

export default function List() {
  const [activeBtn, setActiveBtn] = useState("All");
  const searchCtx = useContext(SearchContext);
  const userCtx = useContext(AuthContext);

  let filteredData = [];
  function changeActiveBtn(btnName) {
    setActiveBtn(btnName);
  }

  if (!searchCtx.cryptoData || !searchCtx.cryptoData.data || searchCtx.cryptoData.data.length === 0) {
    return <div className="w-full h-[90vh] bg-[#1A1C22ff] flex items-center justify-center"><Loading /></div>;
  }

  if (activeBtn === "All") {
    filteredData = [...searchCtx.cryptoData.data];
  }else if(activeBtn === "Favorites"){
    filteredData = [...searchCtx.favorites];
  } else if (activeBtn === "Gainers") {
    filteredData = topGainers(searchCtx.cryptoData, 20);
  } else if (activeBtn === "Losers") {
    filteredData = topLosers(searchCtx.cryptoData, 20);
  } else if (activeBtn === "Market") {
    filteredData = topMarketCap(searchCtx.cryptoData, 20);
  }

    let balance = "******* ";
    if (userCtx.isUserData) {
      balance = userCtx.userData.balance;
    }

  return (
    <section className="w-full min-h-[90vh] bg-[#1A1C22ff] flex flex-col items-center gap-10 p-5 md:p-10">
      <div className="w-full h-10 p-3 flex items-center justify-between">
        <p className="font-bold text-[#F0B90B] w-40 "> <Link to='/'>Home</Link> {'> List'}</p>
        <h1 className="text-left text-white font-bold sm:text-base text-xs w-40">
                Balance: {userCtx.isUserData ? balance.toFixed(2) : '*********'}$
              </h1>
      </div>
      <h1 className="text-4xl mt-5 text-white w-90 text-center font-bold">
        {" "}
        <span className="text-[#F0B90B]">MARKET</span> OVERVIEW{" "}
      </h1>
      <div className="w-[100%] min-h-[100vh] flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center ">
        <PartOfList title="Top 5 gainers!" data={topGainers(searchCtx.cryptoData, 5)} />
        <PartOfList title="Top 5 losers!" data={topLosers(searchCtx.cryptoData, 5)} />
        <PartOfList title="Top 5 market cap!" data={topMarketCap(searchCtx.cryptoData, 5)} />
        <PartOfList title="Top 5 volume!" data={topVolume(searchCtx.cryptoData, 5)} />
      </div>

      <ul className=" min-w-5/12 w-full min-h-[10vh] p-2 flex flex-col items-left gap-5 md:w-10/12 md:p-10">
        <FilterList changeActiveBtn={changeActiveBtn} activeBtn={activeBtn} />
        <SearchCrypto/>
        <ul className="text-white w-full flex items-center bg-[#1E2329] justify-center gap-5 px-4 py-2 border-b border-gray-700">
  <li className="w-[50px] text-left text-xs sm:text-base ">Favorite</li>
  <li className="w-[80px] text-center text-xs sm:text-base">Symbol</li>
  <li className="w-[100px] text-center text-xs sm:text-base">Price</li>
  <li className="w-[120px] text-center hidden md:block">Market Cap</li>
  <li className="w-[120px] text-center hidden md:block">Volume (24h)</li>
  <li className="w-[100px] text-center text-xs sm:text-base">Change (24h)</li>
  <li className="w-[140px] text-center text-xs sm:text-base">Actions</li>
</ul>

        {searchCtx.isActive ? <RenderingData arr={searchCtx.foundedCryptos}/> :  <RenderingData arr={filteredData}/>}
      </ul>
    </section>
  );
}
