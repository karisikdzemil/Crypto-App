import PartOfList from "../list/PartOfList";
import BuyCart from "./BuyCart";
import BuyContainer from "./BuyContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheckDollar, faMoneyBillTrendUp, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function BuyCrypto({ data }) {
    const [isBuy, setIsBuy] = useState(true);

    function changeTransaction (arg) {
        setIsBuy(arg)
    }

  if (!data || !data.data || data.data.length === 0) {
    return <p>Loading... </p>;
  }
  return (
    <section className="w-full min-h-[90vh] bg-[#1A1C22ff] xs:p-10">
      <div className="w-full min-h-[30vh] flex flex-wrap-reverse items-center justify-center">
        <div className="md:w-3/5 w-full min-h-[30vh] py-5 my-10 flex flex-col items-center justify-center ">

          <h1 className="text-4xl font-bold text-white mb-7">{isBuy?'Buy':'Sell'} Crypto</h1>
            <PartOfList title="Some of the most popular cryptocurencies!" data={data.data} />

        </div>
        <div className="md:w-2/5 sm:w-3/5 w-full md:p-10 p-5  flex items-end justify-center">
            <BuyContainer data={data} changeTransaction={changeTransaction} isBuy={isBuy}/>
        </div>  
      </div>
    <div className="w-full min-h-[45vh] flex flex-col py-10">
        <h1 className="text-3xl font-bold text-white m-auto">How To Buy Crypto?</h1>
    <div className="w-full min-h-[40vh] flex items-center justify-evenly gap-5 flex-wrap py-10">
      <BuyCart icon={<FontAwesomeIcon icon={faMoneyCheckDollar} />} title='1.Enter Amount & Select Payment' text={`Enter the amount, select the available payment method, and choose the payment account ${isBuy ? 'bind' : 'receive'} the payment.`}/>
      <BuyCart icon={<FontAwesomeIcon icon={faMoneyBillTrendUp} />} title='2.Confirm Order' text='Confirmation of transaction detail information, including trading pair quotes, fees, and other explanatory tips.'/>
      <BuyCart icon={<FontAwesomeIcon icon={faHandHoldingDollar} />} title={`3.Receive ${isBuy ? 'Crypto' : 'Cash'}`} text='After successful payment, the purchased crypto to will reach Spot Wallet.'/>
      </div>
    </div>
    </section>
  );
}
