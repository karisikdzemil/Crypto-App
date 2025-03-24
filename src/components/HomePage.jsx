import { formatNumber } from "../util/formatter";
export default function HomePage({ data, i }) {
  if (!data || !data.data || !data.data.length === 0) {
    return <p>Loading...</p>;
  }

  let percent = <span>{formatNumber(data.data[i].quote.USD.percent_change_24h)}%</span>;
  if(data.data[i].quote.USD.percent_change_24h < -0.50){
    percent = <span className="colorRed">{formatNumber(data.data[i].quote.USD.percent_change_24h)}%</span>;
  }else if(data.data[i].quote.USD.percent_change_24h > 0.50){
    percent = <span className="colorGreen">{formatNumber(data.data[i].quote.USD.percent_change_24h)}%</span>;
  }

  console.log(data.data);
  {/* <h1 className="text-white text-xl w-50 h-5 m-auto mt-5">{title}</h1> */}
  return (
      <div className="text-white w-11/12 h-[40px] border-gray-500 rounded-md p-2 flex justify-evenly items-center">
         <span>{data.data[i].symbol}</span>
         <span className="text-xs">{formatNumber(data.data[i].quote.USD.price)}$</span>
        <span className="text-xs">{formatNumber(data.data[i].quote.USD.market_cap)}$</span>
         <span className="text-xs">{formatNumber(data.data[i].quote.USD.volume_24h)}$</span>
        {percent}
      </div>
  );
}
