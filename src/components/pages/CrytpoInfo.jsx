import SearchContext from "../../store/SearchContext";
import { useContext, useEffect } from "react";
import InfoBuyCrypto from "../cryptoInfo/InfoBuyCrypto";
import {
  topMarketCap,
} from "../../util/formatter";
import PriceHistoryTable from "../cryptoInfo/PriceHistoryTable";
import InfoDescribeCoin from "../cryptoInfo/InfoDescribeCoin";
import InfoCoreInfo from "../cryptoInfo/InfoCoreInfo";
import MarketInfo from "../cryptoInfo/MarketInfo";
import ListItem from "../list/ListItem";
import Loading from "../UI/Loading";

export default function CryptoInfo() {
  const searchCtx = useContext(SearchContext);

  useEffect(() => {
    if (searchCtx.cryptoInformation) {
      window.scrollTo(0, 0);
    }
  }, [searchCtx.cryptoInformation]);

  if (!searchCtx.cryptoInformation) {
    return <Loading />;
  }

  return (
    <section className="w-full min-h-[100vh] bg-[#1A1C22ff] p-10 px-2 flex flex-col md:flex-row items-center justify-evenly flex-wrap">
      <div className="md:w-3xl w-full min-h-96 flex p-10 flex-wrap justify-evenly">
        <InfoCoreInfo />
        <InfoDescribeCoin />
        <PriceHistoryTable data={searchCtx.cryptoInformation} />
        <MarketInfo />
      </div>

      <div className="sm:w-130 w-full min-h-[40vh] flex flex-col justify-center items-center p-5">
        <InfoBuyCrypto />
        <ul className="w-full min-h-40 border-2 mt-5 bg-[#1A1C22ff] border-slate-700 p-5 rounded-md flex flex-col items-center gap-3">
          <h1 className="text-white text-xl">Top Market Cap Cryptocurrencies</h1>
          {topMarketCap(searchCtx.cryptoData, 10).map((el, i) => (
            <ListItem key={i} data={el} />
          ))}
        </ul>
      </div>
    </section>
  );
}
