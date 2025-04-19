import SearchContext from "../../store/SearchContext";
import { useContext } from "react";
import { formatNumber } from "../../util/formatter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import InfoLikeCrypto from "./InfoLikeCrypto";
import Loading from "../UI/Loading";
export default function InfoCoreInfo() {
    const searchCtx = useContext(SearchContext);

    if(!searchCtx || !searchCtx.cryptoInformation){
      return <Loading />
    }

    let percent = (
        <span className="textSize text-center text-white">
          {formatNumber(searchCtx.cryptoInformation.quote.USD.percent_change_24h)}%
        </span>
      );
      if (searchCtx.cryptoInformation.quote.USD.percent_change_24h < -0.1) {
        percent = (
          <span className="colorRed text-center">
            {formatNumber(searchCtx.cryptoInformation.quote.USD.percent_change_24h)}
            %
          </span>
        );
      } else if (searchCtx.cryptoInformation.quote.USD.percent_change_24h > 0.1) {
        percent = (
          <span className="colorGreen text-center">
            {formatNumber(searchCtx.cryptoInformation.quote.USD.percent_change_24h)}
            %
          </span>
        );
      }
  return (
    <div className="w-1/1 md:w-3xl p-5 min-h-96">
      <div className="max-w-96 h-[20vh]">
        <div className="w-full sm:w-full h-1/2 flex items-center justify-start gap-5">
          <span className="text-5xl text-[#F0B90B] text-center">
            <FontAwesomeIcon icon={faBitcoin} />
          </span>
          <h1 className="sm:text-2xl text-xl text-white ">
            <span>{searchCtx.cryptoInformation.name} </span>Price
          </h1>
          <h2 className="text-xl font-bold text-white">
            ({searchCtx.cryptoInformation.symbol})
          </h2>
        </div>

        <div className="w-full h-1/2 flex items-center justify-start gap-7">
          <h1 className="text-3xl font-bold text-white">
            ${formatNumber(searchCtx.cryptoInformation.quote.USD.price)}
          </h1>
          {percent}
          <span className="font-bold not-first:text-gray-500">24h</span>
        </div>
      </div>
      <InfoLikeCrypto />
    </div>
  );
}