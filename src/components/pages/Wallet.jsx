import PortfolioChart from "../wallet/PortfolioChart";
import RecentTransactions from "../wallet/RecentTransactions";
import WalletInfo from "../wallet/WalletInfo";
import { topMarketCap } from "../../util/formatter";
import { useContext } from "react";
import SearchContext from "../../store/SearchContext";

export default function Wallet() {
  const searchCtx = useContext(SearchContext);

  return (
    <section className="w-full min-h-[90vh] bg-[#1A1C22ff] flex items-start gap-10 p-5 md:p-10 sm:flex-row flex-col">
      <div className="sm:w-1/2 w-full">
        <WalletInfo />
        {/* <ul className="w-full min-h-40 border-2 mt-5 bg-[#1A1C22ff] border-slate-700 p-5 rounded-md flex flex-col items-center gap-3">
          <h1 className="text-white text-xl">Top Market Cap Cryptocurency</h1>
          {topMarketCap(searchCtx.favorites, searchCtx.favorites.length).map((el) => (
            <ListItem data={el} />
          ))}
        </ul> */}
      </div>

      <div className="sm:w-1/2 w-full min-h-[90vh]">
        <PortfolioChart />
        <RecentTransactions />
      </div>
    </section>
  );
}
