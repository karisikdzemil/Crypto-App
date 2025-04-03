import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer className="w-full h-[40vh] bg-slate-600 flex justify-between items-center flex-col">
      <div className="p-10">
        <h1 className="text-3xl text-white text-center">Try demo trading</h1>
        <h2 className="text-2xl text-amber-400 text-center">Become a pro</h2>
        <img
          className="w-15 h-15 rounded-md m-auto"
          src="icons8-crypto-64.png"
          alt=""
        />
        <div className="w-full flex gap-5 h-10 justify-center items-center">
            <h1 className="text-amber-400 text-2xl font-bold">Crypto</h1>
        <p className="text-white">karisikdzemil@gmail.com</p>
        </div>
      </div>
      <div className="w-full h-20 bg-slate-700 p-5 flex justify-center items-center flex-col ">
            <p className="text-white text-xs md:text-xl"><span className="text-white bg-transparent border-2 border-white rounded-[50%] text-xs p-1"><FontAwesomeIcon icon={faC} /></span> Created by Djemsy. All rights reserved.</p>
            <div className="flex gap-5">
            <a className="text-white" href="">Github</a>
            <a className="text-white" href="">LinkedIn</a>
            </div>
      </div>
    </footer>
  );
}
