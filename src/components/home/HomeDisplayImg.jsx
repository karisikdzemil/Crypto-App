import { useState } from "react"

export default function HomeDisplayImg () {
    const [image, setImage] = useState('Item');

    function changeImage (img) {
        setImage(img);
    }
    return(
        <div className="w-full h-[90vh] ">
           <div className="w-1/2 h-full bg-amber-300 flex items-center justify-center">
           <div>
                <img src='download-pro-dark-en.svg' alt="" />
                <ul className="bg-red-300 w-full h-[3vh] flex justify-evenly border-b-2 border-gray-500 text-gray-300">
                    <li><button onClick={() => changeImage('Desktop')}>Desktop</button></li>
                    <li><button onClick={() => changeImage('Item')}>Item</button></li>
                    <li><button onClick={() => changeImage('Pro')}>Pro</button></li>
                </ul>
            </div>
           </div>
        </div>
    )
}