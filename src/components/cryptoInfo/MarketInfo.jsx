import { useContext } from "react"
import SearchContext from "../../store/SearchContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "../../util/formatter";
export default function MarketInfo () {
    const searchCtx = useContext(SearchContext);
    return (
        <div className="w-full h-40 flex flex-col justify-evenly mt-10">
            <h1 className="sm:text-2xl text-xl text-white font-bold">{searchCtx.cryptoInformation.symbol} Market Information</h1>
            <ul className="w-full h-20 flex items-center justify-between">
                <li className="w-1/5 h-full flex flex-col gap-3 sm:items-left items-center text-center sm:text-left text-xs sm:text-base">
                    <span className="text-white">Popularity <FontAwesomeIcon icon={faCircleExclamation} /></span>
                    <span className="text-white font-bold">#{searchCtx.cryptoInformation.cmc_rank}</span>
                </li>
                <li className="w-1/5 h-full flex flex-col gap-3 sm:items-left items-center text-center text-xs sm:text-base">
                    <span className="text-white">Market Cap <FontAwesomeIcon icon={faCircleExclamation} /></span>
                    <span className="text-white font-bold">{formatNumber(searchCtx.cryptoInformation.quote.USD.market_cap)}</span>
                </li>
                <li className="w-1/5 h-full flex flex-col gap-3 sm:items-left items-center text-center  text-xs sm:text-base">
                    <span className="text-white">Volume(24h) <FontAwesomeIcon icon={faCircleExclamation} /></span>
                    <span className="text-white font-bold">{formatNumber(searchCtx.cryptoInformation.quote.USD.volume_24h)}</span>
                </li>
                <li className="w-1/4 h-full flex flex-col gap-3 sm:items-left items-center text-center text-xs sm:text-base">    
                    <span className="text-white">Circulation Supply <FontAwesomeIcon icon={faCircleExclamation} /></span>
                    <span className="text-white font-bold">{formatNumber(searchCtx.cryptoInformation.circulating_supply)}</span>
                </li>
            </ul>
        </div>
    )
}