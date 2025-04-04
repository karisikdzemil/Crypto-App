import { useContext } from "react"
import SearchContext from "../store/SearchContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoinSign } from "@fortawesome/free-solid-svg-icons";
import { formatNumber } from "../util/formatter";

export default function CryptoInfo () {
    const searchCtx = useContext(SearchContext);
    console.log(searchCtx.cryptoInformation);
    let percent = <span className="textSize text-center">{formatNumber(searchCtx.cryptoInformation.quote.USD.percent_change_24h)}%</span>;
  if(searchCtx.cryptoInformation.quote.USD.percent_change_24h < -0.50){
    percent = <span className="colorRed text-center">{formatNumber(searchCtx.cryptoInformation.quote.USD.percent_change_24h)}%</span>;
  }else if(searchCtx.cryptoInformation.quote.USD.percent_change_24h > 0.50){
    percent = <span className="colorGreen text-center">{formatNumber(searchCtx.cryptoInformation.quote.USD.percent_change_24h)}%</span>;
  }
    return (
      <section className="w-full h-[90vh] bg-slate-800 p-10">
            <div className="w-1/3 h-[20vh] p-5 ">
               <div className="w-full h-1/2 flex items-center justify-center gap-5">
               <span className="text-4xl bg-amber-400 text-white w-12 h-12 text-center rounded-[50%]"><FontAwesomeIcon icon={faBitcoinSign} /></span>
                <h1 className="text-2xl text-white "><span>{searchCtx.cryptoInformation.name} </span>Price</h1>
                <h2 className="text-xl font-bold text-white">({searchCtx.cryptoInformation.symbol})</h2>
               </div>

                <div className="w-full h-1/2 flex items-center justify-center gap-5">
                    <h1 className="text-2xl font-bold text-white">${formatNumber(searchCtx.cryptoInformation.quote.USD.price)}</h1>
                    {percent}
                    <span className="font-bold not-first:text-gray-500">24h</span>
                </div>
            </div>
      </section>
    )
}