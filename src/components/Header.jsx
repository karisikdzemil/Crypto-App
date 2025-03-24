import { useState } from "react";

export default function Header() {
  const [currentBtn, setCurrentBtn] = useState("Home");
  function switchBtnHandler() {
    setCurrentBtn((prevBtn) =>
      prevBtn === "Home" ? (prevBtn = "List") : (prevBtn = "Home")
    );
  }
  return (
    <header className="w-full h-[10vh] bg-slate-700 p-1.5 px-5 flex gap-80">
      <div className="flex justify-center items-center gap-5">
        <img
          className="w-15 h-15 rounded-md"
          src="icons8-crypto-64.png"
          alt=""
        />
        <h1 className="text-white font-bold text-3xl">Crypto App</h1>
      </div>

      <ul className="w-5/12 flex justify-evenly items-center ">
        {currentBtn === "Home" ? (
          <li className=" bg-amber-500 text-white text-lg font-semibold px-4 py-2 rounded-md cursor-pointer">
            Home{" "}
          </li>
        ) : (
          <li
            onClick={switchBtnHandler}
            className=" text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer"
          >
            Home{" "}
          </li>
        )}
        {currentBtn === "List" ? (
          <li className=" bg-amber-500 text-white text-lg font-semibold px-4 py-2 rounded-md cursor-pointer">
            List{" "}
          </li>
        ) : (
          <li
            onClick={switchBtnHandler}
            className=" text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer"
          >
            List{" "}
          </li>
        )}
      </ul>
    </header>
  );
}
