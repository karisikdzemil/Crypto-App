import SearchContext from "../store/SearchContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBitcoinSign,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "../util/formatter";
import InfoLikeCrypto from "./InfoLikeCrypto";
import {
  topGainers,
  // topLosers,
  // topMarketCap,
  // topVolume,
} from "../util/formatter";
import PartOfList from './PartOfList';

export default function CryptoInfo( {data} ) {
  const searchCtx = useContext(SearchContext);
  console.log(searchCtx.cryptoInformation);
  let percent = (
    <span className="textSize text-center text-white">
      {formatNumber(searchCtx.cryptoInformation.quote.USD.percent_change_24h)}%
    </span>
  );
  if (searchCtx.cryptoInformation.quote.USD.percent_change_24h < -0.5) {
    percent = (
      <span className="colorRed text-center">
        {formatNumber(searchCtx.cryptoInformation.quote.USD.percent_change_24h)}
        %
      </span>
    );
  } else if (searchCtx.cryptoInformation.quote.USD.percent_change_24h > 0.5) {
    percent = (
      <span className="colorGreen text-center">
        {formatNumber(searchCtx.cryptoInformation.quote.USD.percent_change_24h)}
        %
      </span>
    );
  }

  return (
    <section className="w-full min-h-[100vh] bg-slate-800 p-10 px-2 flex flex-col md:flex-row items-center justify-evenly flex-wrap">
      <div className="md:w-3xl w-full min-h-96 flex p-10 flex-wrap justify-evenly">
        <div className="w-1/1 md:w-3xl p-5 min-h-96">
          <div className="max-w-96 h-[20vh]">
            <div className="w-full sm:w-full h-1/2 flex items-center justify-start gap-5">
              <span className="text-2xl md:text-4xl bg-amber-400 text-white w-12 h-12 text-center">
                <FontAwesomeIcon icon={faBitcoinSign} />
              </span>
              <h1 className="sm:text-2xl text-xl text-white ">
                <span>{searchCtx.cryptoInformation.name} </span>Price
              </h1>
              <h2 className="text-xl font-bold text-white">
                ({searchCtx.cryptoInformation.symbol})
              </h2>
            </div>

            <div className="w-full h-1/2 flex items-center justify-start gap-7">
              <h1 className="text-3xl font-bold text-white">
                ${formatNumber(searchCtx.cryptoInformation.quote.USD.price)}
              </h1>
              {percent}
              <span className="font-bold not-first:text-gray-500">24h</span>
            </div>
          </div>
          <InfoLikeCrypto />
        </div>
        <div className=" w-full m-5 text-xs sm:text-base min-h-50 p-10 flex flex-col gap-5 bg-gray-700 rounded-md">
          <h1 className="sm:text-xl text-20 font-bold text-white">💰 Current Supply and Market Ranking</h1>
          <p className="text-left text-white">
             <span className="font-bold">{searchCtx.cryptoInformation.name}</span> currently holds the <span className="font-bold">#{searchCtx.cryptoInformation.cmc_rank} </span>
            rank among all cryptocurrencies. With a circulating supply 
            of <span className="font-bold">{formatNumber(searchCtx.cryptoInformation.circulating_supply)} {searchCtx.cryptoInformation.symbol}</span>, and a maximum supply capped at <span className="font-bold">{searchCtx.cryptoInformation.max_supply}</span>, it
            maintains a deflationary model that adds to its value proposition.
            The total supply is also reported as <span className="font-bold">{formatNumber(searchCtx.cryptoInformation.total_supply)} {searchCtx.cryptoInformation.symbol}</span>.
          </p>
        </div>
      
      </div>




      <div className="sm:min-w-112 max-w-96 min-h-[40vh] flex flex-col justify-center items-start p-10">
      <div className="min-w-1/1 min-h-96 flex flex-col items-center">
          <div className="w-10/12 h-[10vh] flex gap-7">
            <button className="text-white font-bold cursor-pointer p-2 transition-all duration-200 text-sm md:text-2xl">
              By USDT
            </button>
            <button className="text-white font-bold cursor-pointer p-2 transition-all duration-200 text-sm md:text-2xl">
              By cash
            </button>
          </div>
          <div className="w-10/12 h-25 flex justify-between items-center p-3 rounded-md relative bg-gray-600 ">
            <h2 className="absolute top-1 left-5 font-bold text-white">Buy</h2>
            <input
              type="number"
              placeholder="0.00"
              className="w-10/12 bg-gray-600  rounded-md p-5 text-white"
            />
            <span className="text-white font-bold">CASH</span>
          </div>
          <div className="w-10/12 h-[10vh] flex justify-between">
            <span className="text-white font-bold text-xl">USDT=</span>
            <span className="text-white font-bold text-xl">USD $0.00</span>
          </div>
          <div className="w-10/12 h-20 flex flex-col gap-2">
            <p className="text-xs font-bold">
              <FontAwesomeIcon icon={faMoneyBillWave} /> 0% trading fee on
              USDT/USD spot trading pair.
            </p>
            <button className="w-12/12 h-[6vh] cursor-pointer bg-amber-400 text-slate-900 font-bold rounded-md">
              Log in & Buy USDT
            </button>
          </div>
        </div>
      
                {/* <PartOfList title="Top 5 gainers!" data={topGainers(data, 5)}/> */}
      </div>

    </section>
  );
}
