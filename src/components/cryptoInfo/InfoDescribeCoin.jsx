import SearchContext from "../../store/SearchContext";
import { useContext } from "react";
import { formatNumber } from "../../util/formatter";
export default function InfoDescribeCoin () {
    const searchCtx = useContext(SearchContext);
    return(
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
    )
}