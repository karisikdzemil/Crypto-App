import { useContext } from "react";
import SearchContext from "../store/SearchContext";
import { formatNumber } from "../util/formatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function ListItem({ data, i, favoriteBtn }) {
  const searchCtx = useContext(SearchContext);
  if (!data || !data.length === 0) {
    return <p>Loading...</p>;
  }

  let percent = <span className="textSize text-center">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  if(data.quote.USD.percent_change_24h < -0.50){
    percent = <span className="colorRed text-center">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  }else if(data.quote.USD.percent_change_24h > 0.50){
    percent = <span className="colorGreen text-center">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  }
  return (
    <li className="text-white w-full h-[40px] relative border-gray-500 rounded-md p-2 px-7 flex justify-between items-center hover:bg-gray-600 cursor-pointer">
    {favoriteBtn && <span className="text-xs absolute left-1 top-1">{i}.</span>}
    {favoriteBtn && <button onClick={() => searchCtx.addToFavorites(data)} className="text-2xl cursor-pointer hover:text-amber-400 hover:duration-200 ease-in"><FontAwesomeIcon icon={faHeart} /></button>}
    <span className="w-[50px] text-center">{data.symbol}</span>
    <span className="w-[100px] text-xs text-center">{formatNumber(data.quote.USD.price)}$</span>
    <span className="w-[120px] text-xs text-center">{formatNumber(data.quote.USD.market_cap)}$</span>
    <span className="w-[120px] text-xs text-center">{formatNumber(data.quote.USD.volume_24h)}$</span>
    {percent}
  </li>
  
  );
}
