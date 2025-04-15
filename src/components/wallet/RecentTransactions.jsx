import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { formatNumber } from "../../util/formatter";
import { ArrowDownRight, ArrowUpRight } from "lucide-react"; // koristiš lucide-react za ikone

export default function RecentTransactions() {
  const authCtx = useContext(AuthContext);
  const transactions = authCtx.userData?.currencies || [];

  const recent = [...transactions]
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 5);

  return (
    <div className="w-full bg-[#2A2D38] rounded-2xl p-6 shadow-lg text-white">
      <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
        Recent Transactions
      </h3>

      {recent.length === 0 && (
        <p className="text-gray-400 text-sm">No transactions yet.</p>
      )}

      <ul className="flex flex-col gap-4">
        {recent.map((tx, i) => {
          const isBuy = tx.type === "BUY";
          const Icon = isBuy ? ArrowUpRight : ArrowDownRight;
          const iconColor = isBuy ? "text-green-400" : "text-red-400";

          return (
            <li
              key={i}
              className="flex justify-between items-center bg-[#1F222B] p-4 rounded-xl hover:scale-[1.01] hover:bg-[#262932] transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${iconColor}`} />
                <div>
                  <p className="text-white font-medium">
                    {tx.type}{" "}
                    <span className="text-yellow-400">
                      {formatNumber(tx.amountCoin)} {tx.symbol}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">
                    {new Date(tx.timestamp).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-medium text-sm text-gray-300">USD</p>
                <p
                  className={`font-bold ${
                    isBuy ? "text-green-400" : "text-red-400"
                  }`}
                >
                  ${formatNumber(tx.amountUSD)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
