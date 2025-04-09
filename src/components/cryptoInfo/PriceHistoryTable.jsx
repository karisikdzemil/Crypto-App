import React from 'react';

const PriceHistoryTable = ({ data }) => {
  const price = data.quote.USD.price;

  const changes = [
    {
      label: 'Today',
      percent: data.quote.USD.percent_change_24h,
    },
    {
      label: '30 Days',
      percent: data.quote.USD.percent_change_30d,
    },
    {
      label: '60 Days',
      percent: data.quote.USD.percent_change_60d,
    },
    {
      label: '90 Days',
      percent: data.quote.USD.percent_change_90d,
    },
  ];

  const getAmountChange = (percent) => (price * percent) / 100;

  return (
    <div className="overflow-x-auto mt-6 w-full">
      <table className="min-w-full bg-[#1E2329] text-white border border-slate-700">
        <thead>
          <tr className="bg-[#1E2329] text-sm text-left">
            <th className="p-3 border-b border-slate-600">Date comparison</th>
            <th className="p-3 border-b border-slate-600">Amount change</th>
            <th className="p-3 border-b border-slate-600">% Change</th>
          </tr>
        </thead>
        <tbody>
          {changes.map((item, index) => {
            const amount = getAmountChange(item.percent);
            const isPositive = item.percent >= 0;
            return (
              <tr key={index} className="border-b border-slate-700">
                <td className="p-3">{item.label}</td>
                <td className={`p-3 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  ${amount.toFixed(2)}
                </td>
                <td className={`p-3 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {isPositive ? '+' : ''}
                  {item.percent.toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PriceHistoryTable;
