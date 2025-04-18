import PortfolioChart from "../wallet/PortfolioChart";
import RecentTransactions from "../wallet/RecentTransactions";
import WalletInfo from "../wallet/WalletInfo";

export default function Wallet() {
  return (
    <section className="w-full min-h-[90vh] bg-[#1A1C22ff] flex items-start gap-10 p-5 md:p-10 sm:flex-row flex-col">
      <div className="sm:w-1/2 w-full">
        <WalletInfo />
      </div>

      <div className="sm:w-1/2 w-full min-h-[90vh]">
        <PortfolioChart />
        <RecentTransactions />
      </div>
    </section>
  );
}
