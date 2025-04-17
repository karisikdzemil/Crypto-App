import { useRef, useState, useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import { auth } from "../firebase";
import SearchContext from "../../store/SearchContext";
import Toast from "../UI/Toast";

export default function BuyContainer({ changeTransaction, isBuy }) {
  const authCtx = useContext(AuthContext);
  const searchCtx = useContext(SearchContext);
  const [selectedEl, setSelectedEl] = useState(searchCtx.cryptoData.data[0]);

  const enterInput = useRef();
  const receiveInput = useRef();

  const isBuyClass = " border-b-2 border-[#F0B90B] bg-[#1A1C22]";

  function calculateTransactionHandler(event) {
    const inputValue = +event.target.value;
  
    if (!selectedEl?.quote?.USD?.price || isNaN(inputValue)) return;

    const price = selectedEl.quote.USD.price;
  
    if (isBuy) {
      receiveInput.current.value = (inputValue / price).toFixed(5);
    } else {
      receiveInput.current.value = (inputValue * price).toFixed(2);
    }
  }

  let notAccount = '';

  async function transactionHandler() {
    if (!authCtx.user) {
      notAccount = 'You must be logged in!';
      return;
    }
  
    const entered = +enterInput.current.value;
    const received = +receiveInput.current.value;
  
    if (entered > 0 && received > 0) {
      try{
         await authCtx.recordTransaction({
        uid: auth.currentUser.uid,
        isBuy,
        coin: selectedEl,
        amountUSD: isBuy ? entered : received,    
        amountCoin: isBuy ? received : entered   
      });

      }catch(error){
        console.log(error)
      }
     
    } else {
      notAccount = 'Enter a valid amount';
      console.log('Invalid input');
    }
  }
  
  function changeHandler(e) {
    const parsed = JSON.parse(e.target.value);
    setSelectedEl(parsed);
  }

  function switchTo (arg) {
    changeTransaction(arg)
    setSelectedEl(searchCtx.cryptoData.data[0])
    enterInput.current.value = '';
    receiveInput.current.value = '';
  }

  return (
    <div className="sm:w-9/12 w-full min-w-70 max-w-96 h-[55vh] rounded-lg bg-[#1E2329] flex flex-col items-center">
      {authCtx.toast && <Toast message='Transaction completed' duration={2000} onClose={() => authCtx.toastSetter(false)} />} 
      <div className="w-full h-17 flex items-center justify-center">
        <button
          onClick={() => switchTo(true)}
          className={`w-2/5 h-full cursor-pointer text-xl font-bold text-white ${
            isBuy && isBuyClass
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => switchTo(false)}
          className={`w-2/5 h-full text-xl font-bold cursor-pointer text-white ${
            !isBuy && isBuyClass
          }`}
        >
          Sell
        </button>
      </div>

      <div className="w-full h-60 flex flex-col gap-5 items-center justify-center">

        <div className="w-10/12 h-25 flex justify-between items-center p-3 rounded-md relative bg-[#1A1C22]">
          <h2 className="absolute top-1 left-5 font-bold text-white">
            {isBuy ? "Buy" : "Sell"}
          </h2>
          <input
            onChange={calculateTransactionHandler}
            type="number"
            placeholder="Enter Amount"
            className="w-9/12 h-10 bg-[#1A1C22] rounded-md p-5 text-white text-xl"
            ref={enterInput}
          />
          {!isBuy ? (
            <select
              className="text-white font-bold bg-[#1A1C22]"
              onChange={changeHandler}
            >
              {searchCtx.cryptoData.data.slice(0, 20).map((el) => (
                <option key={el.id} value={JSON.stringify(el)}>
                  {el.symbol}
                </option>
              ))}
            </select>
          ) : (
            <span className="text-white font-bold">CASH</span>
          )}
        </div>

        <div className="w-10/12 h-20 flex justify-between items-center p-3 rounded-md relative bg-[#1A1C22]">
          <h2 className="absolute top-1 left-5 font-bold text-white">
            Receive
          </h2>
          <input
            onChange={calculateTransactionHandler}
            type="number"
            placeholder="0.00"
            className="w-9/12 h-10 bg-[#1A1C22] rounded-md p-5 text-white"
            ref={receiveInput}
            disabled
          />
          {isBuy ? (
            <select
              className="text-white font-bold bg-[#1A1C22]"
              onChange={changeHandler}
            >
              {searchCtx.cryptoData.data.slice(0, 20).map((el) => (
                <option key={el.id} value={JSON.stringify(el)}>
                  {el.symbol}
                </option>
              ))}
            </select>
          ) : (
            <span className="text-white font-bold">CASH</span>
          )}
        </div>
      </div>

      <button onClick={transactionHandler} className="bg-[#FCD535] w-10/12 h-12 text-white rounded-md text-xl font-bold cursor-pointer mt-10 hover:bg-[#F0B90B]">
        {isBuy ? "Buy" : "Sell"}
      </button>
         <p className="text-red-500">{notAccount}</p>
    </div>
  );
}
