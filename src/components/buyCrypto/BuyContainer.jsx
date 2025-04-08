export default function BuyContainer({data, changeTransaction, isBuy}) {
    console.log(isBuy)
    const isBuyClass = ' border-b-2 border-amber-400 bg-[#1A1C22ff]';
  return (
    <div className='sm:w-9/12 w-full min-w-70 max-w-96 h-[55vh] rounded-lg bg-[#23272Eff] flex flex-col items-center'>
      <div className="w-full h-17 flex items-center justify-center">
        <button onClick={() => changeTransaction(true)} className={`w-2/5 h-full  cursor-pointer text-xl font-bold text-white ${isBuy && isBuyClass}`}>
          Buy
        </button>
        <button onClick={() => changeTransaction(false)} className={`w-2/5 h-full text-xl font-bold cursor-pointer text-white ${!isBuy && isBuyClass}`}>
          Sell
        </button>
      </div>
      <div className="w-full h-60 flex flex-col gap-5 items-center justify-center">
        <div className="w-10/12 h-25 flex justify-between items-center p-3 rounded-md relative bg-[#1A1C22ff] ">
          <h2 className="absolute top-1 left-5 font-bold text-white">Buy</h2>
          <input
            type="number"
            placeholder="Enter Amount"
            className="w-9/12 h-10 bg-[#1A1C22ff] rounded-md p-5 text-white text-xl"
          />
          {!isBuy ? <select className="text-white font-bold" name="" id="">
                {data.data.map(el => (
                    <option key={el.id} value="">{el.symbol}</option>
                )).slice(0, 20)}
          </select> : <span className="text-white font-bold">CASH</span>}
        </div>

        <div className="w-10/12 h-20 flex justify-between items-center p-3 rounded-md relative bg-[#1A1C22ff] ">
          <h2 className="absolute top-1 left-5 font-bold text-white">
            Receive
          </h2>
          <input
            type="number"
            placeholder="0.00"
            className="w-9/12 h-10 bg-[#1A1C22ff] rounded-md p-5 text-white"
          />
          {/* <span className="text-white font-bold">BTC</span> */}
         {isBuy ? <select className="text-white font-bold" name="" id="">
                {data.data.map(el => (
                    <option key={el.id} value="">{el.symbol}</option>
                )).slice(0, 20)}
          </select> : <span className="text-white font-bold">CASH</span>}
        </div>
      </div>
      <button className="bg-amber-400 w-10/12 h-12 text-white rounded-md text-xl font-bold cursor-pointer mt-10 hover:bg-amber-500">
        {isBuy ? 'Buy' : 'Sell'}
      </button>
    </div>
  );
}
