import { formatNumber } from "../util/formatter";
export default function ListItem({ data }) {
  if (!data || !data.length === 0) {
    return <p>Loading...</p>;
  }

  let percent = <span>{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  if(data.quote.USD.percent_change_24h < -0.50){
    percent = <span className="colorRed">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  }else if(data.quote.USD.percent_change_24h > 0.50){
    percent = <span className="colorGreen">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  }

  {/* <h1 className="text-white text-xl w-50 h-5 m-auto mt-5">{title}</h1> */}
  return (
      <li className="text-white w-11/12 h-[40px] border-gray-500 rounded-md p-2 flex justify-evenly items-center hover:bg-gray-600 cursor-pointer">
         <span>{data.symbol}</span>
         <span className="text-xs">{formatNumber(data.quote.USD.price)}$</span>
        <span className="text-xs">{formatNumber(data.quote.USD.market_cap)}$</span>
         <span className="text-xs">{formatNumber(data.quote.USD.volume_24h)}$</span>
        {percent}
      </li>
  );
}
