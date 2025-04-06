export default function FilterList( {changeActiveBtn, activeBtn} ) {
    return(
      <ul className="max-w-full h-20 text-white text-sm font-bold flex justify-between md:justify-start gap-1 items-center py-4 px-4 md:text-xl md:gap-2 flex-nowrap">
      {['Favorites', 'All', 'Gainers', 'Losers', 'Market'].map((item) => (
        <li key={item} className="max-w-[19%]">
          <button
            className={`cursor-pointer p-2 transition-all duration-200 text-sm md:text-2xl ${
              activeBtn === item ? 'border-b-4 border-amber-300' : ''
            }`}
            onClick={() => changeActiveBtn(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
    )
}