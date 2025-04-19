import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillWave, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { useContext, useRef, useState } from "react";
import SearchContext from "../../store/SearchContext";
import { AuthContext } from "../../store/AuthContext";
import { formatNumber } from "../../util/formatter";

export default function InfoBuyCrypto() {
  const [activeBuyBtn, setActiveBuyBtn] = useState("byCrypto");
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [coinQuantity, setCoinQuantity] = useState(0)
  const inputRef = useRef();
  const searchCtx = useContext(SearchContext);
  const authCtx = useContext(AuthContext);

  function coinQuantityHandler (e) {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setCoinQuantity(+value.toFixed(2));
    }else{
      setCoinQuantity(0)
    }
  }

  function changeBtnToCryptoHandler() {
    setActiveBuyBtn("byCrypto");
    setErrorMsg(null);
    setSuccessMsg(null);
    setCoinQuantity(0);
    inputRef.current.value = '';
  }

  function changeBtnToCashHandler() {
    setActiveBuyBtn("byCash");
    setErrorMsg(null);
    setSuccessMsg(null);
    setCoinQuantity(0);
    inputRef.current.value = '';
  }

  async function handleBuy() {
    setErrorMsg("");

    const value = parseFloat(inputRef.current.value);

    if (!authCtx.user) {
      setErrorMsg("You must be logged in to buy.");
      return;
    }

    if (isNaN(value) || value <= 0) {
      setErrorMsg("Enter a valid amount.");
      return;
    }

    const coin = searchCtx.cryptoInformation;
    const isBuy = activeBuyBtn === "byCrypto";

    const amountUSD = value * coin.quote.USD.price;
    const amountCoin = value ;

    try {
      await authCtx.recordTransaction({
        uid: authCtx.user.uid,
        isBuy,
        coin,
        amountUSD,
        amountCoin,
      });

      if(activeBuyBtn === 'byCrypto'){
        setSuccessMsg(`Successfully bought ${amountCoin.toFixed(6)} ${coin.symbol}`);
      }else{
        setSuccessMsg(`Successfully sold ${amountCoin.toFixed(6)} ${coin.symbol}`);
      }
      authCtx.toastSetter(false)
      inputRef.current.value = '';
    } catch (error) {
      setErrorMsg("Transaction failed. Try again.");
      console.error(error);
    }
  }

  return (
    <div className="sm:w-1/1 min-w-80 min-h-96 flex flex-col items-center">
      <div className="w-10/12 h-[10vh] flex gap-7">
        <button
          onClick={changeBtnToCryptoHandler}
          className={`text-white font-bold cursor-pointer h-12 transition-all duration-200 text-sm md:text-2xl ${
            activeBuyBtn === "byCrypto" ? "border-b-4 border-[#FCD535]" : ""
          }`}
        >
          Buy {searchCtx.cryptoInformation.symbol}
        </button>
        <button
          onClick={changeBtnToCashHandler}
          className={`text-white font-bold cursor-pointer h-12 p-2 transition-all duration-200 text-sm md:text-2xl ${
            activeBuyBtn === "byCash" ? "border-b-4 border-[#FCD535]" : ""
          }`}
        >
          Sell {searchCtx.cryptoInformation.symbol}
        </button>
      </div>

      <div className="w-10/12 h-25 flex justify-between items-center p-3 rounded-md relative bg-[#1E2329] ">
        <h2 className="absolute top-1 left-5 font-bold text-white">Buy</h2>
        <input
          ref={inputRef}
          onChange={coinQuantityHandler}
          type="number"
          placeholder="0.00"
          className="w-9/12 h-10 bg-[#1E2329] rounded-md p-5 text-white"
        />
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
              <span className="text-white font-bold">CASH</span>
            </span>
          )}
        </span>
      </div>

      <div className="w-10/12 h-[10vh] flex justify-between">
        <span className="text-white font-bold text-xl">
          {activeBuyBtn === "byCrypto" ? searchCtx.cryptoInformation.symbol : "USD"} = 
          {activeBuyBtn !== "byCrypto" ? coinQuantity * formatNumber(+searchCtx.cryptoInformation.quote.USD.price): coinQuantity.toFixed(3)}
        </span>
        <span className="text-white font-bold text-xl">
          {activeBuyBtn !== "byCrypto" ? searchCtx.cryptoInformation.symbol : "USD "} = 
          {activeBuyBtn === "byCrypto" ? coinQuantity * formatNumber(+searchCtx.cryptoInformation.quote.USD.price): `${coinQuantity.toFixed(3)} `}
        </span>
      </div>

      <div className="w-10/12 h-20 flex flex-col gap-2">
        {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
        {successMsg && <p className="text-green-400 text-sm">{successMsg}</p>}
        <p className="text-xs font-bold">
          <FontAwesomeIcon icon={faMoneyBillWave} /> 0% trading fee on USDT/USD.
        </p>
        <button
          onClick={handleBuy}
          className="w-full min-h-[6vh] cursor-pointer hover:bg-[#F0B90B] bg-[#FCD535] text-slate-900 font-bold rounded-md"
        >
         {activeBuyBtn === 'byCrypto' ? authCtx.user ? "Buy Now" : "Log in & Buy" : authCtx.user ? "Sell Now" : "Log in & Sell"}
        </button>
      </div>
    </div>
  );
}
