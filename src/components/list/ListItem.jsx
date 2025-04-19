import { useContext } from "react";
import SearchContext from "../../store/SearchContext";
import { formatNumber } from "../../util/formatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCalendarWeek,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function ListItem({ data, i, favoriteBtn, liked = false }) {
  const searchCtx = useContext(SearchContext);
  if (!data || !data.length === 0) {
    return <p>Loading...</p>;
  }

  function getInfoHandler() {
    searchCtx.getCryptoInfo(data);
  }

  function likeCryptoHandler(event) {
    searchCtx.addToFavorites(data);
    event.currentTarget.classList.toggle("like");
  }

  let percent = (
    <span className="textSize text-center w-full">
      {formatNumber(data.quote.USD.percent_change_24h)}%
    </span>
  );
  if (data.quote.USD.percent_change_24h < -0.5) {
    percent = (
      <span className="colorRed text-center">
        {formatNumber(data.quote.USD.percent_change_24h)}%
      </span>
    );
  } else if (data.quote.USD.percent_change_24h > 0.5) {
    percent = (
      <span className="colorGreen text-center">
        {formatNumber(data.quote.USD.percent_change_24h)}%
      </span>
    );
  }
  return (
    <li className="w-full h-[50px] border-b border-gray-700 px-4 py-2 flex justify-center sm:gap-5 gap-1 items-center hover:bg-[#1E2329] transition duration-150 text-white">
      <div className="w-[50px] text-left flex items-center gap-2">
        {favoriteBtn && <span className="text-xs">{i}.</span>}
        {favoriteBtn && (
          <button
            onClick={likeCryptoHandler}
            className={`text-2xl hover:text-[#F0B90B] cursor-pointer duration-200 ${
              liked ? "text-[#F0B90B]" : "text-gray-500"
            }`}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        )}
      </div>
      <div className="w-[80px] text-xs text-center">{data.symbol}</div>
      <div className="w-[100px] text-xs text-center">
        {formatNumber(data.quote.USD.price)}$
      </div>
      <div className="w-[120px] text-xs text-center hidden md:block">
        {formatNumber(data.quote.USD.market_cap)}$
      </div>
      <div className="w-[120px] text-xs text-center hidden md:block">
        {formatNumber(data.quote.USD.volume_24h)}$
      </div>
      <div className="w-[100px] text-xs text-center">{percent}</div>
      <div className="w-[140px] flex justify-center gap-4">
        <Link to="/crypto-info" className="group relative">
          <FontAwesomeIcon
            onClick={getInfoHandler}
            icon={faCalendarWeek}
            className=" text-gray-400 hover:text-white sm:text-2xl text-xl"
          />
          <span className="absolute top-8 scale-0 group-hover:scale-100 transition-transform bg-gray-700 text-white text-xs rounded py-1 px-2">
            Info
          </span>
        </Link>

        <Link to="/buy-sell" className="group relative">
          <FontAwesomeIcon
            icon={faChartSimple}
            className=" text-gray-400 hover:text-white sm:text-2xl text-xl"
          />
          <span className="absolute top-8 scale-0 group-hover:scale-100 transition-transform bg-gray-700 text-white text-xs rounded py-1 px-2">
            Trade
          </span>
        </Link>
      </div>
    </li>
  );
}
