import { formatNumber } from "../util/formatter";
export default function ListItem({ data, i }) {
  if (!data || !data.length === 0) {
    return <p>Loading...</p>;
  }

  let percent = <span>{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  if(data.quote.USD.percent_change_24h < -0.50){
    percent = <span className="colorRed">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  }else if(data.quote.USD.percent_change_24h > 0.50){
    percent = <span className="colorGreen">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  }
  return (
      <li className="text-white w-full h-[40px] relative border-gray-500 rounded-md p-2 px-5 flex justify-between items-center hover:bg-gray-600 cursor-pointer">
        <span className="text-xs absolute left-1 top-1">{i}.</span>
        <button>/3</button>
         <span>{data.symbol}</span>
         <span className="text-xs">{formatNumber(data.quote.USD.price)}$</span>
        <span className="text-xs">{formatNumber(data.quote.USD.market_cap)}$</span>
         <span className="text-xs">{formatNumber(data.quote.USD.volume_24h)}$</span>
        {percent}
      </li>
  );
}
