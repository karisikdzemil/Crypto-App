import { useContext } from "react";
import SearchContext from "../../store/SearchContext";
import { formatNumber } from "../../util/formatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCalendarWeek, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function ListItem({ data, i, favoriteBtn }) {
  const searchCtx = useContext(SearchContext);
  if (!data || !data.length === 0) {
    return <p>Loading...</p>;
  }

  function getInfoHandler () {
    // searchCtx.switchPages('Info');
    searchCtx.getCryptoInfo(data);
  }

  let percent = <span className="textSize text-center">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  if(data.quote.USD.percent_change_24h < -0.50){
    percent = <span className="colorRed text-center">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  }else if(data.quote.USD.percent_change_24h > 0.50){
    percent = <span className="colorGreen text-center">{formatNumber(data.quote.USD.percent_change_24h)}%</span>;
  }
  return (
    <li className="text-white w-full h-[40px] relative border-gray-500 rounded-md p-2 px-5 flex gap-3 justify-between items-center hover:bg-[#1E2329] cursor-pointer z-0">
    {favoriteBtn && <span className="text-xs absolute left-1 top-1">{i}.</span>}
    {favoriteBtn && <button onClick={() => searchCtx.addToFavorites(data)} className="text-2xl cursor-pointer hover:text-amber-400 hover:duration-200 ease-in"><FontAwesomeIcon icon={faHeart} /></button>}
    <span className="w-[50px] text-center">{data.symbol}</span>
    <span className="w-[100px] text-xs text-center">{formatNumber(data.quote.USD.price)}$</span>
    <span className="w-[120px] text-xs text-center hidden md:block">{formatNumber(data.quote.USD.market_cap)}$</span>
    <span className="w-[120px] text-xs text-center hidden md:block">{formatNumber(data.quote.USD.volume_24h)}$</span>
    {percent}
   {favoriteBtn && <div className="w-15 flex justify-between ml-5">
      <button onClick={getInfoHandler} className="relative group flex flex-col items-center">
      <Link to='/crypto-info'><FontAwesomeIcon className="fas fa-info-circle text-2xl text-gray-500 cursor-pointer" icon={faCalendarWeek} /></Link>
      <span className="absolute top-8 scale-0 group-hover:scale-100 transition-transform bg-gray-700 text-white text-xs rounded py-1 px-2">Info</span>
      </button>
      <button className="relative group flex flex-col items-center">
      <FontAwesomeIcon className="fas fa-info-circle text-2xl text-gray-500 cursor-pointer" icon={faChartSimple} />
      <span className="absolute top-8 scale-0 group-hover:scale-100 transition-transform bg-gray-700 text-white text-xs rounded py-1 px-2">Trade</span>
      </button>
    </div>}
  </li>
  
  );
}
