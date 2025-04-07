import { useContext } from "react"
import SearchContext from "../../store/SearchContext"
export default function PriceInformation () {
    const searchCtx = useContext(SearchContext);
    console.log(searchCtx.cryptoInformation)
    return(
        <div>
            <h1>{searchCtx.cryptoInformation.name} price information</h1>
            <div>
                <p>24h Low & High</p>
                <p>Low: $<span>{searchCtx.cryptoInformation.quote.USD.low_24h}</span></p>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <p>High: $<span>{searchCtx.cryptoInformation.quote.USD.high_24h}</span></p>
            </div>
        </div>
    )
}