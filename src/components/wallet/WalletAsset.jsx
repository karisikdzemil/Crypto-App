import { formatNumber } from "../../util/formatter";
import { useContext } from "react";
import SearchContext from "../../store/SearchContext";

export default function WalletAsset({ currency }) {
  const searchCtx = useContext(SearchContext);
  const displayedCrypto = searchCtx.cryptoData?.data?.find(
    (el) => el.symbol === currency.symbol
  );

  if (!displayedCrypto) {
    return (
      <div className="bg-[#1F222B] p-4 rounded-xl text-red-500">
        Crypto data not available for {currency.symbol}.
      </div>
    );
  }

  const price = displayedCrypto.quote.USD.price;
  const change24h = displayedCrypto.quote.USD.percent_change_24h;
  const rank = displayedCrypto.cmc_rank;
  const totalValue = currency.amount * price;

  return (
    <div className="w-full flex justify-between items-center bg-[#1F222B] p-4 rounded-xl">
      <div className="flex items-center gap-3">
        <div>
          <p className="text-white font-medium">{currency.symbol}</p>
          <p className="text-sm text-gray-400">{displayedCrypto.name}</p>
          <p className="text-sm text-gray-500">Rank: #{rank}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-white font-medium">
          {formatNumber(currency.amount)} {currency.symbol}
        </p>
        <p className="text-sm text-green-400">
          ${formatNumber(price)} / coin
        </p>
        <p className="text-sm text-blue-400">
          Total: ${formatNumber(totalValue)}
        </p>
        <p
          className={`text-sm ${
            change24h >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          24h: {change24h.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}
