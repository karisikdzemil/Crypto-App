import { useContext } from "react";
import SearchContext from "../store/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const searchCtx = useContext(SearchContext);
  return (
    <header className="w-full h-[10vh] bg-slate-700 p-1.5 px-5 flex gap-20 xs:gap-80">
      <div className="flex justify-center items-center gap-5">
        <img
          className="w-15 h-15 rounded-md"
          src="icons8-crypto-64.png"
          alt=""
        />
        <h1 className="text-white font-bold text-md md:text-3xl">Crypto App</h1>
      </div>

      <button className="text-3xl text-white cursor-pointer md:hidden">
      <FontAwesomeIcon icon={faBars} />
      </button>

      <ul className="w-5/12 justify-evenly items-center md:flex hidden ">
        <li
          onClick={() => searchCtx.switchPages('Home')}
          className={
            " text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer"
          }
        >
          Home{" "}
        </li>
        <li
          onClick={() => searchCtx.switchPages('List')}
          className="text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer"
        >
          List{" "}
        </li>
        <li className="text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer">
          About Us{" "}
        </li>
      </ul>
    </header>
  );
}
