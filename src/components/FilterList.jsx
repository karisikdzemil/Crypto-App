import { useState } from "react"

export default function FilterList() {
    const [activeBtn, setActiveBtn] = useState('All');
    function changeActiveBtn (btnName) {
        setActiveBtn(btnName);
    }
    return(
        <ul className="text-white text-xl font-bold flex gap-15 py-10">
        <li><button className={`${activeBtn === 'Favorites' ? ' text-red-600' : ''}`} onClick={() => setActiveBtn('Favorites')}>Favorites</button></li>
        <li><button onClick={() => setActiveBtn('All')}>All cryptos</button></li>
        <li><button onClick={() => setActiveBtn('Hot')}>Hot</button></li>
        <li><button onClick={() => setActiveBtn('Gainers')}>Gainers</button></li>
        <li><button onClick={() => setActiveBtn('Losers')}>Losers</button></li>
      </ul>
    )
}