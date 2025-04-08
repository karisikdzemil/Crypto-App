export default function BuyContainer() {
  return (
    <div className="w-9/12 h-[55vh] rounded-lg bg-[#23272Eff] flex flex-col items-center">
      <div className="w-full h-17 flex items-center justify-center">
        <button className="w-2/5 h-full bg-slate-900 border-b-2 cursor-pointer border-amber-400 text-xl font-bold text-white">
          Buy
        </button>
        <button className="w-2/5 h-full text-xl font-bold cursor-pointer text-white">
          Sell
        </button>
      </div>
      <div className="w-full h-60 flex flex-col gap-5 items-center justify-center">
        <div className="w-10/12 h-25 flex justify-between items-center p-3 rounded-md relative bg-gray-600 ">
          <h2 className="absolute top-1 left-5 font-bold text-white">Buy</h2>
          <input
            type="number"
            placeholder="Enter Amount"
            className="w-9/12 h-10 bg-gray-600 rounded-md p-5 text-white text-xl"
          />
          <span className="text-white font-bold">CASH</span>
        </div>

        <div className="w-10/12 h-20 flex justify-between items-center p-3 rounded-md relative bg-gray-600 ">
          <h2 className="absolute top-1 left-5 font-bold text-white">
            Receive
          </h2>
          <input
            type="number"
            placeholder="0.00"
            className="w-9/12 h-10 bg-gray-600 rounded-md p-5 text-white"
          />
          <span className="text-white font-bold">BTC</span>
        </div>
      </div>
      <button className="bg-amber-400 w-10/12 h-12 text-white rounded-md text-xl font-bold cursor-pointer mt-10 hover:bg-amber-500">
        Invest
      </button>
    </div>
  );
}
