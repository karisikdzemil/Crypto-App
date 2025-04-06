import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
export default function InfoBuyCrypto() {
  return (
    <div className="min-w-1/1 min-h-96 flex flex-col items-center">
      <div className="w-10/12 h-[10vh] flex gap-7">
        <button className="text-white font-bold cursor-pointer p-2 transition-all duration-200 text-sm md:text-2xl">
          By USDT
        </button>
        <button className="text-white font-bold cursor-pointer p-2 transition-all duration-200 text-sm md:text-2xl">
          By cash
        </button>
      </div>
      <div className="w-10/12 h-25 flex justify-between items-center p-3 rounded-md relative bg-gray-600 ">
        <h2 className="absolute top-1 left-5 font-bold text-white">Buy</h2>
        <input
          type="number"
          placeholder="0.00"
          className="w-10/12 bg-gray-600  rounded-md p-5 text-white"
        />
        <span className="text-white font-bold">CASH</span>
      </div>
      <div className="w-10/12 h-[10vh] flex justify-between">
        <span className="text-white font-bold text-xl">USDT=</span>
        <span className="text-white font-bold text-xl">USD $0.00</span>
      </div>
      <div className="w-10/12 h-20 flex flex-col gap-2">
        <p className="text-xs font-bold">
          <FontAwesomeIcon icon={faMoneyBillWave} /> 0% trading fee on USDT/USD
          spot trading pair.
        </p>
        <button className="w-12/12 h-[6vh] cursor-pointer bg-amber-400 text-slate-900 font-bold rounded-md">
          Log in & Buy USDT
        </button>
      </div>
    </div>
  );
}
