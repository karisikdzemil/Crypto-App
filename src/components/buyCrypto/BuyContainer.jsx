import { useRef, useState } from "react";
export default function BuyContainer({data, changeTransaction, isBuy}) {
  const [selectedEl, setSelectedEl] = useState(data.data[0]);

  const enterInput = useRef();
  const receiveInput = useRef();

    const isBuyClass = ' border-b-2 border-[#F0B90B] bg-[#1A1C22]';

    function calculateTransactionHandler (event) {
      if(isBuy){
        receiveInput.current.value = (+event.target.value / selectedEl.quote.USD.price).toFixed(5);
      }
      // if(!isBuy){
      //   enterInput.current.value = (+event.target.value / selectedEl.quote.USD.price).toFixed(5);
      // }
    }

    function changeHandler (e) {
      const parsed = JSON.parse(e.target.value);
      setSelectedEl(parsed);
      console.log('selected el', selectedEl)
    }
  return (
    <div className='sm:w-9/12 w-full min-w-70 max-w-96 h-[55vh] rounded-lg bg-[#1E2329] flex flex-col items-center'>
      <div className="w-full h-17 flex items-center justify-center">
        <button onClick={() => changeTransaction(true)} className={`w-2/5 h-full  cursor-pointer text-xl font-bold text-white ${isBuy && isBuyClass}`}>
          Buy
        </button>
        <button onClick={() => changeTransaction(false)} className={`w-2/5 h-full text-xl font-bold cursor-pointer text-white ${!isBuy && isBuyClass}`}>
          Sell
        </button>
      </div>
      <div className="w-full h-60 flex flex-col gap-5 items-center justify-center">
        <div className="w-10/12 h-25 flex justify-between items-center p-3 rounded-md relative bg-[#1A1C22] ">
          <h2 className="absolute top-1 left-5 font-bold text-white">Buy</h2>
          <input
          onChange={calculateTransactionHandler}
            type="number"
            placeholder="Enter Amount"
            className="w-9/12 h-10 bg-[#1A1C22] rounded-md p-5 text-white text-xl"
            ref={enterInput}
          />
          {!isBuy ? <select className="text-white font-bold" name="" id="" onChange={changeHandler}>
                {data.data.map(el => (
                    <option key={el.id} value={JSON.stringify(el)}>{el.symbol}</option>
                )).slice(0, 20)}
          </select> : <span className="text-white font-bold">CASH</span>}
        </div>

        <div className="w-10/12 h-20 flex justify-between items-center p-3 rounded-md relative bg-[#1A1C22] ">
          <h2 className="absolute top-1 left-5 font-bold text-white">
            Receive
          </h2>
          <input
            onChange={calculateTransactionHandler}
            type="number"
            placeholder="0.00"
            className="w-9/12 h-10 bg-[#1A1C22] rounded-md p-5 text-white"
            ref={receiveInput}
          />
          {/* <span className="text-white font-bold">BTC</span> */}
         {isBuy ? <select className="text-white font-bold" name="" id="" onChange={changeHandler}>
                {data.data.map(el => (
                    <option key={el.id} value={JSON.stringify(el)}>{el.symbol}</option>
                )).slice(0, 20)}
          </select> : <span className="text-white font-bold">CASH</span>}
        </div>
      </div>
      <button className="bg-[#FCD535] w-10/12 h-12 text-white rounded-md text-xl font-bold cursor-pointer mt-10 hover:bg-[#F0B90B]">
        {isBuy ? 'Buy' : 'Sell'}
      </button>
    </div>
  );
}
