import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows, faLinux } from "@fortawesome/free-brands-svg-icons";

export default function HomeDisplayImg () {
    const [image, setImage] = useState('Item');
    let displayImage = 'download-lite-dark-en.svg';
    function changeImage (img) {
        setImage(img);
    }
    if(image === 'Desktop'){
        displayImage = 'download-desktop-dark-en.png';
    }else if(image === 'Item'){
 displayImage = 'download-lite-dark-en.svg';
    }else if(image === 'Pro'){
 displayImage = 'download-pro-dark-en.svg';
    }
    
    return(
        <div className="w-full min-h-[90vh] bg-[#1A1C22ff] items-center flex gap-5 flex-col md:flex-row p-5">
           <div className="w-1/2 h-full flex items-center justify-center p-20">
           <div className="flex flex-col items-center gap-5">
                <img className="" src={displayImage} alt="" />
                <ul className="w-60 h-[3vh] flex justify-evenly border-b-2 border-gray-500 text-gray-300">
                    <li><button className={`cursor-pointer ${image === 'Desktop' && 'text-[#F0B90B] font-bold'}`} onClick={() => changeImage('Desktop')}>Desktop</button></li>
                    <li><button className={`cursor-pointer ${image === 'Item' && 'text-[#F0B90B] font-bold'}`} onClick={() => changeImage('Item')}>Item</button></li>
                    <li><button className={`cursor-pointer ${image === 'Pro' && 'text-[#F0B90B] font-bold'}`} onClick={() => changeImage('Pro')}>Pro</button></li>
                </ul>
            </div>
           </div>
           
           <div className="w-full md:w-1/2 h-full p-10 flex flex-col gap-10">
            <h1 className="text-white text-2xl sm:text-4xl text-left">Trade on the go. Anywhere, <br/>anytime.</h1>
            <div className="w-full h-[20vh] flex items-center gap-10">
                <div className="w-40 p-3 border-2 border-gray-500 rounded-md">
                    <img src="image copy.png" alt="" />
                </div>
                <div>
                <p className="text-gray-500 text-xs sm:text-base">Scan to Download App</p>
                <h3 className="text-white text-xs sm:text-xl">IOS and Android</h3>
                </div>
            </div>
                <ul className="w-full h-[20vh] flex items-center gap-10">
                    <li className="w-23 h-20 hover:bg-black hover:opacity-50 rounded-md">
                        <a href="https://www.binance.com/en" className="w-full h-full flex flex-col items-center justify-center gap-1 text-white">
                        <span className="text-4xl"><FontAwesomeIcon icon={faApple} /></span>
                        <p>MacOS</p>
                        </a>
                    </li>
                    <li className="w-23 h-20 hover:bg-black hover:opacity-50 rounded-md">
                        <a href="https://www.binance.com/en" className="w-full h-full flex flex-col items-center justify-center gap-1 text-white">
                        <span className="text-4xl"><FontAwesomeIcon icon={faWindows} /></span>
                        <p>Windows</p>
                        </a>
                    </li>
                    <li className="w-23 h-20 hover:bg-black hover:opacity-50 rounded-md">
                        <a href="https://www.binance.com/en" className="w-full h-full flex flex-col items-center justify-center gap-1 text-white">
                        <span className="text-4xl"><FontAwesomeIcon icon={faLinux} /></span>
                        <p>Linux</p>
                        </a>
                    </li>
                </ul>
           </div>
        </div>
    )
}