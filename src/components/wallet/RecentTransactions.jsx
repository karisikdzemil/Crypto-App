import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { formatNumber } from "../../util/formatter";

export default function RecentTransactions() {
  const authCtx = useContext(AuthContext);
  const transactions = authCtx.userData?.currencies || [];

  const recent = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date)) 
    .slice(0, 5); 
    console.log(transactions.timestamp)
  return (
    <div className="w-full bg-[#2A2D38] rounded-2xl p-6 shadow-lg text-white">
      <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
        Recent Transactions
      </h3>

      {recent.length === 0 && (
        <p className="text-gray-400 text-sm">No transactions yet.</p>
      )}

      <ul className="flex flex-col gap-4">
        {recent.map((tx, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-[#1F222B] p-4 rounded-lg"
          >
            <div>
              <p className="text-white font-medium">
                {tx.type} {formatNumber(tx.amountCoin)} {tx.symbol}
              </p>
              <p className="text-sm text-gray-400">{new Date(tx.timestamp).toLocaleString()}</p>
            </div>
            <div className="text-right">
              <p className="text-green-400 font-medium">${formatNumber(tx.amountUSD)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
