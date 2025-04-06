import SearchContext from "../../store/SearchContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoBuyCrypto from "./InfoBuyCrypto";
import {
  faBitcoinSign,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "../../util/formatter";
import InfoLikeCrypto from "./InfoLikeCrypto";
import {
  topGainers,
  // topLosers,
  // topMarketCap,
  // topVolume,
} from "../../util/formatter";
import PartOfList from "../list/PartOfList";
import PriceHistoryTable from "./PriceHistoryTable";
import InfoDescribeCoin from "./InfoDescribeCoin";
import InfoCoreInfo from "./InfoCoreInfo";

export default function CryptoInfo( {data} ) {
  const searchCtx = useContext(SearchContext);
  console.log(searchCtx.cryptoInformation);

  return (
    <section className="w-full min-h-[100vh] bg-slate-800 p-10 px-2 flex flex-col md:flex-row items-center justify-evenly flex-wrap">
      <div className="md:w-3xl w-full min-h-96 flex p-10 flex-wrap justify-evenly">
        <InfoCoreInfo />
        <InfoDescribeCoin />
        
        <PriceHistoryTable data={searchCtx.cryptoInformation}/>
      
      </div>


      <div className="sm:min-w-112 max-w-96 min-h-[40vh] flex flex-col justify-center items-start p-10">
        <InfoBuyCrypto />
      
                {/* <PartOfList title="Top 5 gainers!" data={topGainers(data, 5)}/> */}
      </div>

    </section>
  );
}
