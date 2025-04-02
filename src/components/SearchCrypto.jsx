export default function SearchCrypto ( data ) {
    console.log(data.data.data)
    function searchForCryptosHandler (event) {
        const foundCryptos = data.data.data.filter((el) => (
            el.name.toUpperCase().includes(event.target.value.toUpperCase())  || el.symbol.toUpperCase().includes(event.target.value.toUpperCase()) 
        ))
        console.log(foundCryptos)
    }
    return(
        <div className="w-full h-20 flex justify-left items-center gap-5">
            <label className="text-white text-md">Search for Cryptos: </label>
            <input onChange={searchForCryptosHandler} className="w-1/2 h-10 rounded-md border-2 border-slate-700 text-white pl-5" placeholder="Name, Price, Symbol..." type="text" />
        </div>
    )
}