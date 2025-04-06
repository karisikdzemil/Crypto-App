import { useState, useContext } from "react";
import SearchContext from "../../store/SearchContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

export default function InfoLikeCrypto () {
    const [like, setLike] = useState(50);
    const searchCtx = useContext(SearchContext);

    function likeHandler() {
        setLike(prev => (prev === 75 ? 50 : 75));
      }
    
        function dislikeHandler(){
          setLike(prev => (prev === 25 ? 50 : 25));
        }
    
    return(
        <div className="w-5/5 h-[30vh] xs:h-[20vh] flex flex-col justify-between mt-10">
        <div className="w-full h-12 flex justify-between items-center">
          <p className="sm:text-xl text-xs text-white font-bold">How do you feel about {searchCtx.cryptoInformation.name} today?</p>
          <div className="w-50 flex items-center justify-evenly p-5 gap-5">
          <button onClick={likeHandler} className="w-18 h-8 rounded-md text-white font-bold cursor-pointer bg-gray-700">Good <FontAwesomeIcon icon={faThumbsUp} /></button>
          <button onClick={dislikeHandler} className="w-18 h-8 rounded-md text-white font-bold cursor-pointer bg-gray-700">Bad <FontAwesomeIcon icon={faThumbsDown} /></button>
          </div>
        </div>
        <div className="bg-gray-700 rounded-md w-full h-2/5 flex justify-center  relative p-3">
          <div className="w-full h-1/2 flex items-center gap-5 justify-center">
          <p className=" w-18 rounded-md text-white xs:block absolute top-1 left-1 ">Good <FontAwesomeIcon icon={faThumbsUp} /> </p>
            <div className="w-full xs:w-2/3 h-1/3 flex gap-3 items-center mt-10">
              <div style={{ width: `${like}%` }} className={` bg-green-500 h-3 skew-x-36`}></div>
              <div style={{ width: `${100 - like}%` }} className={` bg-red-500 h-3 skew-x-36`}></div>
            </div>
            <p className="w-18 rounded-md text-white mx-2 xs:block absolute top-1 right-1 ">Bad <FontAwesomeIcon icon={faThumbsDown} /> </p>
          </div>    

            <p className="absolute bottom-1 left-1 text-gray-900 text-xs"><FontAwesomeIcon icon={faCircleExclamation} /> Note: This information is for reference only.</p>
        </div>
    </div>
    )
}