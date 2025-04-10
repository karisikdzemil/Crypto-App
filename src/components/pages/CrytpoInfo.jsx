import SearchContext from "../../store/SearchContext";
import { useContext } from "react";
import InfoBuyCrypto from "../cryptoInfo/InfoBuyCrypto";
import {
  topMarketCap,
} from "../../util/formatter";
import PriceHistoryTable from "../cryptoInfo/PriceHistoryTable";
import InfoDescribeCoin from "../cryptoInfo/InfoDescribeCoin";
import InfoCoreInfo from "../cryptoInfo/InfoCoreInfo";
import MarketInfo from "../cryptoInfo/MarketInfo";
import ListItem from "../list/ListItem";

export default function CryptoInfo( {data} ) {
  const searchCtx = useContext(SearchContext);
  return (
    <section className="w-full min-h-[100vh] bg-[#1A1C22ff] p-10 px-2 flex flex-col md:flex-row items-center justify-evenly flex-wrap">
      <div className="md:w-3xl w-full min-h-96 flex p-10 flex-wrap justify-evenly">
        <InfoCoreInfo />
        <InfoDescribeCoin />
        
        <PriceHistoryTable data={searchCtx.cryptoInformation}/>
        <MarketInfo />

      </div>


      <div className="sm:w-112 w-full min-h-[40vh] flex flex-col justify-center items-start p-5">
        <InfoBuyCrypto />
      
                {/* <PartOfList title="Top 5 gainers!" data={topGainers(data, 5)}/> */}
                <ul className="w-full min-h-40 border-2 mt-5 bg-[#1A1C22ff] border-slate-700 p-5 rounded-md flex flex-col items-center gap-3">
                    <h1 className="text-white text-xl">Top Market Cap Cryptocurency</h1>
                    {topMarketCap(data, 10).map(el => (
                     <ListItem data={el} />
                    ))}
                </ul>
      </div>

    </section>
  );
}
