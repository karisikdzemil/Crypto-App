import { createContext, useState } from "react";

const SearchContext = createContext({
    isActive: false,
    searchForCryptos: () => {}
})

export function SearchContextProvider ({children}){
    const [isActive, setisActive] = useState(false);
    const [foundedCryptos, setFoundedCryptos] = useState([]);

    function searchForCryptos(event, data){
        event.target.value !== '' ? setisActive(true) : setisActive(false)
        const foundCryptos = data.data.filter((el) => (
            el.name.toUpperCase().includes(event.target.value.toUpperCase())  || el.symbol.toUpperCase().includes(event.target.value.toUpperCase()) || el.quote.USD.price.toString().includes(event.target.value)
        ));
        setFoundedCryptos(foundCryptos);
        console.log(foundedCryptos)
    }

    const searchContext = {
        isActive,
        foundedCryptos,
        searchForCryptos
    }

    return <SearchContext value={searchContext}>{children}</SearchContext>
}

export default SearchContext