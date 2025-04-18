import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"];

export default function PortfolioChart() {
  const authCtx = useContext(AuthContext);
  const data = authCtx.userData?.currencies || [];

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
        name: symbol,
        value: +val.usdValue.toFixed(2),
      }));
  }

  const chartData = getUserAssets(data);

  return (
    <div className="w-full bg-[#2A2D38] rounded-2xl p-6 shadow-lg text-white mb-10">
      <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
        Portfolio Breakdown
      </h3>
      {chartData.length === 0 ? (
        <p className="text-gray-400 text-sm">No holdings yet.</p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => (
                <span>{`${name} ${(percent * 100).toFixed(0)}%`}</span> // ispravljeno
              )}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
