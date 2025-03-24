export default function Header () {
    return(
        <header className="w-full h-[10vh] bg-slate-600 p-1.5 px-5 flex gap-80">
            <div className="flex justify-center items-center gap-5">
                <img className="w-15 h-15 rounded-md" src="icons8-crypto-64.png" alt="" />
            <h1 className="text-white font-bold text-3xl">Crypto App</h1>
            </div>

            <ul className="w-5/12 flex justify-evenly items-center ">
                <li className="w-20 h-8 rounded-md text-center text-white text-xl bg-amber-500 cursor-pointer ">Home</li>
                <li className="text-white text-xl">List</li>
                <li className="text-white text-xl">Calculate</li>
            </ul>
            
        </header>
    )
}