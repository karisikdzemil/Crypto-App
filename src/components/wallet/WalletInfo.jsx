import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import SearchContext from "../../store/SearchContext";
import WalletAsset from "./WalletAsset";
import { formatNumber } from "../../util/formatter";
import Loading from "../UI/Loading";

export default function WalletInfo() {
  const authCtx = useContext(AuthContext);
  const searchCtx = useContext(SearchContext);

  if (!authCtx.userData || !searchCtx.cryptoData) {
    return <div className="w-full max-w-4xl bg-[#2A2D38] rounded-2xl p-6 shadow-lg flex flex-col gap-6 text-white">
      <div className="flex flex-col gap-1 border-b border-gray-600 pb-4">
          <h2 className="text-2xl font-semibold">My Wallet</h2>
    </div>
    <p className="text-gray-400">You must log in or create a profile to use the wallet!</p>
    </div>;
  }

  function getUserAssets(currencies) {
    const holdings = {};

    currencies.forEach((tx) => {
      const { symbol, amountCoin, amountUSD, type } = tx;
      const isBuy = type === "BUY";

      if (!holdings[symbol]) {
        holdings[symbol] = { coinAmount: 0, usdValue: 0 };
      }

      holdings[symbol].coinAmount += isBuy ? amountCoin : -amountCoin;
      holdings[symbol].usdValue += isBuy ? amountUSD : -amountUSD;
    });

    return Object.entries(holdings)
      .filter(([_, val]) => val.coinAmount > 0)
      .map(([symbol, val]) => ({
        symbol,
        amount: val.coinAmount,
        usd: val.usdValue,
      }));
  }

  const assets = getUserAssets(authCtx.userData.currencies || []);

  const totalBalance = assets.reduce((acc, asset) => {
    const crypto = searchCtx.cryptoData.data.find(
      (el) => el.symbol === asset.symbol
    );
    if (!crypto) return acc;
    return acc + asset.amount * crypto.quote.USD.price;
  }, 0);

  const email = authCtx.userData.email;

  return (
    <div className="w-full max-w-4xl bg-[#2A2D38] rounded-2xl p-6 shadow-lg flex flex-col gap-6 text-white">
      <div className="flex flex-col gap-1 border-b border-gray-600 pb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">My Wallet</h2>
          <span className="text-sm text-gray-400">Updated just now</span>
        </div>
        <p className="text-sm text-gray-400">
          Logged in as: <span className="text-white font-medium">{email}</span>
        </p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-400 text-lg">Total Balance</p>
        <h3 className="text-4xl font-bold text-green-400">
          ${formatNumber(totalBalance)}
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-medium border-b border-gray-600 pb-2">
          Your Assets
        </h4>

        {assets.map((el) => (
          <WalletAsset key={el.symbol} currency={el} />
        ))}
      </div>
    </div>
  );
}
