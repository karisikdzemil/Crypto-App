import PartOfList from "../list/PartOfList";
import Loading from "../UI/Loading";
import HomeDisplayImg from "../home/HomeDisplayImg";
import { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
import SearchContext from "../../store/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  const userCtx = useContext(AuthContext);
  const searchCtx = useContext(SearchContext);

  let email = "****@*********";
  let balance = "******* ";
  if (userCtx.isUserData) {
    email = userCtx.userData.email;
    balance = userCtx.userData.balance;
    console.log(userCtx.userData);
  }

  return (
    <>
      {" "}
      <section className="w-full min-h-[90vh] bg-[#1A1C22ff] p-10 flex items-center justify-center gap-5 flex-col md:flex-row flex-wrap">
        <div className=" w-full h-4/5 flex flex-col items-center text-center justify-evenly gap-5 sm:w-7/12">
          <h1 className="text-xl font-extrabold text-white md:text-5xl w-full">
            Welcome to <span className="text-[#F0B90B]">Crypto</span>, a site
            for tracking and buying cryptocurrencies!
          </h1>
          <Link className="max-w-96 min-w-70" to={userCtx.isUserData ? "/list" : "/register"}>
            {" "}
            <button className="bg-[#F0B90B] p-3 w-full h-full text-black rounded-md sm:text-xl font-bold cursor-pointer hover:bg-[#FCD535]">
              {userCtx.isUserData ? "Invest" : "Log in & Invest"}{" "}
            </button>
          </Link>

          <div className="md:w-2/3 w-full bg-[#2A2D38] p-4 rounded-xl shadow-md text-white flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCircleUser} />
              <p className="text-sm sm:text-base font-medium break-words">
                {email}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="https://img.icons8.com/ios-filled/50/f0b90b/money.png"
                alt="Balance Icon"
                className="w-6 h-6"
              />
              <p className="text-sm sm:text-base font-semibold text-[#F0B90B]">
                Balance: ${userCtx.isUserData ? balance.toFixed(2) : '*********'}
              </p>
            </div>
          </div>

          <img
            className="w-20 md:w-50"
            src="icons8-crypto-wallet-64.png"
            alt=""
          />
        </div>
       {searchCtx.isLoadingData ? (
          <Loading />
        ) : (
          <PartOfList
            title="Most popular cryptocurency"
            data={searchCtx.cryptoData.data}
          />
        )}
      </section>
      <HomeDisplayImg />
    </>
  );
}
