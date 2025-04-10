import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faHouse, faListUl, faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export default function HambMenu({ hambMenuHandler }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-40">
  <div
    onClick={hambMenuHandler}
    className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-30"
  ></div>

  <div className="absolute top-0 right-0 w-2/3 h-full bg-[#1A1C22ff] z-40 transform transition-transform duration-300 translate-x-0">
  <div className="w-full h-20 flex items-center justify-between">
       <div className="w-2/3 flex items-center gap-2">
       <img className="w-15 h-15 rounded-md" src="image.png" alt="" />
        <h1 className=" text-[#F0B90B] text-md md:text-4xl">
          Crypto <span className="text-white">App</span>
        </h1>
       </div>
        <button
          className="w-12 h-12 text-2xl text-white bg-black opacity-60 cursor-pointer"
          onClick={() => hambMenuHandler()}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <ul className="max-w-full min-h-1/2 justify-evenly items-center flex flex-col">
        <li onClick={() => hambMenuHandler()}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
            end
          >
            <FontAwesomeIcon className="mr-2" icon={faHouse} /> 
            Home
          </NavLink>
        </li>
        <li onClick={() => hambMenuHandler()}>
          <NavLink
            to="/list"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
          >
            <FontAwesomeIcon className="mr-2" icon={faListUl} />
            List
          </NavLink>
        </li>
        <li onClick={() => hambMenuHandler()}>
          <NavLink
            to="/buy-sell"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
          >
            <FontAwesomeIcon className="mr-2" icon={faCartShopping} />
            Buy
          </NavLink>
        </li>
        <li onClick={() => hambMenuHandler()}>
          <NavLink
            to="/sell"
            className={({ isActive }) =>
              `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
                isActive ? "border-b-2 border-amber-400" : ""
              }`
            }
          >
            <FontAwesomeIcon className="mr-2" icon={faPhone} />
            Contact
          </NavLink>
        </li>
      </ul>
  </div>
</div>

    // <div className="w-2/3 h-full bg-[#1A1C22ff] absolute top-0 right-0 z-10">
    //   <div className="w-full h-20 flex items-center justify-between">
    //    <div className="w-2/3 flex items-center gap-2">
    //    <img className="w-15 h-15 rounded-md" src="image.png" alt="" />
    //     <h1 className=" text-[#F0B90B] text-md md:text-4xl">
    //       Crypto <span className="text-white">App</span>
    //     </h1>
    //    </div>
    //     <button
    //       className="w-12 h-12 text-2xl text-white bg-black opacity-60 cursor-pointer"
    //       onClick={() => hambMenuHandler()}
    //     >
    //       <FontAwesomeIcon icon={faXmark} />
    //     </button>
    //   </div>
    //   <ul className="w-full min-h-1/2 justify-evenly items-center flex flex-col">
    //     <li>
    //       <NavLink
    //         to="/"
    //         className={({ isActive }) =>
    //           `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
    //             isActive ? "border-b-2 border-amber-400" : ""
    //           }`
    //         }
    //         end
    //       >
    //         <FontAwesomeIcon className="mr-2" icon={faHouse} /> 
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/list"
    //         className={({ isActive }) =>
    //           `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
    //             isActive ? "border-b-2 border-amber-400" : ""
    //           }`
    //         }
    //       >
    //         <FontAwesomeIcon className="mr-2" icon={faListUl} />
    //         List
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/buy-sell"
    //         className={({ isActive }) =>
    //           `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
    //             isActive ? "border-b-2 border-amber-400" : ""
    //           }`
    //         }
    //       >
    //         <FontAwesomeIcon className="mr-2" icon={faCartShopping} />
    //         Buy
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/sell"
    //         className={({ isActive }) =>
    //           `text-white text-lg font-semibold px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer ${
    //             isActive ? "border-b-2 border-amber-400" : ""
    //           }`
    //         }
    //       >
    //         <FontAwesomeIcon className="mr-2" icon={faPhone} />
    //         Contact
    //       </NavLink>
    //     </li>
    //   </ul>
    // </div>
  );
}
