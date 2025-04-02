import { useContext } from "react"
import SearchContext from "../store/SearchContext"
export default function SearchCrypto ( {data} ) {
    const searchCtx = useContext(SearchContext);

    // function searchForCryptosHandler (event) {
    //     const foundCryptos = data.data.data.filter((el) => (
    //         el.name.toUpperCase().includes(event.target.value.toUpperCase())  || el.symbol.toUpperCase().includes(event.target.value.toUpperCase()) || el.quote.USD.price.toString().includes(event.target.value)
    //     ));
    //     console.log(foundCryptos)
    // }

    return(
        <div className="w-full h-20 flex justify-left items-center gap-5">
            <label className="text-white text-md">Search for Cryptos: </label>
            <input onChange={(event) => searchCtx.searchForCryptos(event, data)} className="w-1/2 h-10 rounded-md border-2 border-slate-700 text-white pl-5" placeholder="Name, Price, Symbol..." type="text" />
        </div>
    )
}