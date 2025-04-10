import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';

import {
  faMoneyBillWave,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import SearchContext from "../../store/SearchContext";
export default function InfoBuyCrypto() {
  const [activeBuyBtn, setActiveBuyBtn] = useState("byCrypto");
  const searchCtx = useContext(SearchContext);

  function changeBtnToCryptoHandler() {
    setActiveBuyBtn("byCrypto");
  }
  function changeBtnToCashHandler() {
    setActiveBuyBtn("byCash");
  }

  return (
    <div className="sm:w-1/1 min-w-80 min-h-96 flex flex-col items-center">
      <div className="w-10/12 h-[10vh] flex gap-7">
        {
          <button
            onClick={changeBtnToCryptoHandler}
            className={`text-white font-bold cursor-pointer h-12 transition-all duration-200 text-sm md:text-2xl ${
              activeBuyBtn === "byCrypto" ? "border-b-4 border-[#FCD535]" : ""
            }`}
          >
            By {searchCtx.cryptoInformation.symbol}
          </button>
        }
        <button
          onClick={changeBtnToCashHandler}
          className={`text-white font-bold cursor-pointer h-12 p-2 transition-all duration-200 text-sm md:text-2xl ${
            activeBuyBtn === "byCash" ? "border-b-4 border-[#FCD535]" : ""
          }`}
        >
          By cash
        </button>
      </div>
      <div className="w-10/12 h-25 flex justify-between items-center p-3 rounded-md relative bg-[#1E2329] ">
        <h2 className="absolute top-1 left-5 font-bold text-white">Buy</h2>
        <input
          type="number"
          placeholder="0.00"
          className="w-9/12 h-10 bg-[#1E2329] rounded-md p-5 text-white"
        />
        {/* <span className="text-white font-bold"> <span className="text-green-400 text-xs"><FontAwesomeIcon icon={faMoneyBill} /></span>{activeBuyBtn === 'byCrypto' ? searchCtx.cryptoInformation.symbol : 'CASH'}</span> */}
       <span className="text-white font-bold">
  {activeBuyBtn === "byCrypto" ? (
    <span className="text-[#F0B90B] flex items-center gap-1">
      <FontAwesomeIcon icon={faBitcoin} />
      <span className="text-white font-bold">
        {searchCtx.cryptoInformation.symbol}
      </span>
    </span>
  ) : (
    <span className="text-green-400 flex items-center gap-1">
      <FontAwesomeIcon icon={faMoneyBill} />
      <span className="text-white font-bold">
        CASH
      </span>
    </span>
  )}
</span>

      </div>
      <div className="w-10/12 h-[10vh] flex justify-between">
        <span className="text-white font-bold text-xl">
          {activeBuyBtn === "byCrypto"
            ? searchCtx.cryptoInformation.symbol
            : "USD"}{" "}
          =
        </span>
        <span className="text-white font-bold text-xl">
          {activeBuyBtn !== "byCrypto"
            ? searchCtx.cryptoInformation.symbol
            : "USD"}{" "}
          $0.00
        </span>
      </div>
      <div className="w-10/12 h-20 flex flex-col gap-2">
        <p className="text-xs font-bold">
          <FontAwesomeIcon icon={faMoneyBillWave} /> 0% trading fee on USDT/USD
          spot trading pair.
        </p>
        <button className="w-12/12 h-[6vh] cursor-pointer hover:bg-[#F0B90B] bg-[#FCD535] text-slate-900 font-bold rounded-md">
          Log in & Buy USDT
        </button>
      </div>
    </div>
  );
}
