import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import HambMenu from "./HambMenu";
import Logout from "../register/Logout";
import { useState, useContext } from "react";
import { AuthContext } from "../../store/AuthContext";
export default function Header() {
  const [hambMenu, setHambMenu] = useState(false);
  const userCtx = useContext(AuthContext);

  function hambMenuHandler() {
    setHambMenu(prevMenu => !prevMenu);
  }

  return (
    <header className="w-full h-[10vh] bg-[#0B0E11] p-1.5 px-5 flex gap-20 xs:gap-80">
      <div className="flex justify-center items-center gap-5">
        <img className="w-15 h-15 rounded-md" src="image.png" alt="" />
        <h1 className=" text-[#F0B90B] text-md md:text-4xl">
          Crypto <span className="text-white">App</span>
        </h1>
      </div>

      <button onClick={hambMenuHandler} className="text-3xl text-white cursor-pointer sm:hidden">
        <FontAwesomeIcon icon={faBars} />
      </button>
        {hambMenu && <HambMenu hambMenuHandler={hambMenuHandler}/>}
      <ul className="w-5/12 justify-evenly items-center sm:flex hidden ">
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
        <li>
          <NavLink
            to="/buy-sell"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
          >
            Buy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sell"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </li>
       {!userCtx.isUserData ? <li>
          <NavLink
            to="/register?/login"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer bg-[#F0B90B] ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
          >
            Login
          </NavLink>
        </li>: <Logout />}
      </ul>
    </header>
  );
}
