import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

export default function WalletInfo() {
  const authCtx = useContext(AuthContext);

  if (!authCtx.userData) {
    return <div className="text-white p-5">Loading wallet info...</div>
  }

  function getUserAssets(currencies) {
    const holdings = {};
  
    currencies.forEach(tx => {
      const { symbol, amountCoin, amountUSD, type } = tx;
      const isBuy = type === 'BUY';
  
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
        usd: val.usdValue
      }));
  }
  

  const assets = getUserAssets(authCtx.userData.currencies || []);
  console.log(authCtx.userData.currencies)
  const email = authCtx.userData.email;
  return (
    <div className="w-full max-w-4xl bg-[#2A2D38] rounded-2xl p-6 shadow-lg flex flex-col gap-6 text-white">
      {/* Header */}
      <div className="flex flex-col gap-1 border-b border-gray-600 pb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">My Wallet</h2>
          <span className="text-sm text-gray-400">Updated just now</span>
        </div>
        <p className="text-sm text-gray-400">
          Logged in as: <span className="text-white font-medium">{email}</span>
        </p>
      </div>

      {/* Balance */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-400 text-lg">Total Balance</p>
        <h3 className="text-4xl font-bold text-green-400">$100,000</h3>
      </div>

      {/* Assets */}
      <div className="flex flex-col gap-3">
        <h4 className="text-lg font-medium border-b border-gray-600 pb-2">
          Your Assets
        </h4>

        {assets.map((el) => (
  <div
    key={el.symbol}
    className="flex justify-between items-center bg-[#1F222B] p-4 rounded-xl"
  >
    <div className="flex items-center gap-3">
      <div>
        <p className="text-white font-medium">{el.symbol}</p>
        <p className="text-sm text-gray-400">{el.symbol}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-white font-medium">
        {el.amount.toFixed(4)} {el.symbol}
      </p>
      <p className="text-sm text-green-400">Market price coming soon</p>
    </div>
  </div>
))}
      </div>
    </div>
  );
}
