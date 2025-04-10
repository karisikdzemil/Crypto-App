import { useContext } from "react";
import SearchContext from "../../store/SearchContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export default function Header() {
  const searchCtx = useContext(SearchContext);
  return (
    <header className="w-full h-[10vh] bg-[#0B0E11] p-1.5 px-5 flex gap-20 xs:gap-80">
      <div className="flex justify-center items-center gap-5">
        <img className="w-15 h-15 rounded-md" src="image.png" alt="" />
        <h1 className=" text-[#F0B90B] text-md md:text-4xl">
          Crypto <span className="text-white">App</span>
        </h1>
      </div>

      <button className="text-3xl text-white cursor-pointer md:hidden">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className="w-5/12 justify-evenly items-center md:flex hidden ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
          >
            List
          </NavLink>
        </li>
        <li className="text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer">
          <NavLink
            to="/buy"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
          >
            Buy
          </NavLink>
        </li>
        <li className="text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer">
          <NavLink
            to="/sell"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
          >
            Sell
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
