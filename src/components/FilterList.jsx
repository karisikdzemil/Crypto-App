export default function FilterList( {changeActiveBtn, activeBtn} ) {
    return(
        <ul className="text-white text-xl font-bold flex gap-15 py-10">
        <li><button className={`cursor-pointer p-2 ${activeBtn === 'Favorites' ? ' border-b-3 border-amber-300' : ''}`} onClick={() => changeActiveBtn('Favorites')}>Favorites</button></li>
        <li><button className={`cursor-pointer p-2 ${activeBtn === 'All' ? ' border-b-3 border-amber-300' : ''}`} onClick={() => changeActiveBtn('All')}>All cryptos</button></li>
        <li><button className={`cursor-pointer p-2 ${activeBtn === 'Gainers' ? ' border-b-3 border-amber-300' : ''}`} onClick={() => changeActiveBtn('Gainers')}>Gainers</button></li>
        <li><button className={`cursor-pointer p-2 ${activeBtn === 'Losers' ? ' border-b-3 border-amber-300' : ''}`} onClick={() => changeActiveBtn('Losers')}>Losers</button></li>
        <li><button className={`cursor-pointer p-2 ${activeBtn === 'Hot' ? ' border-b-3 border-amber-300' : ''}`} onClick={() => changeActiveBtn('Market')}>Market Cap</button></li>
      </ul>
    )
}