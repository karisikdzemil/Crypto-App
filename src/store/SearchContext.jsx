import { createContext, useState } from "react";

const SearchContext = createContext({
    isActive: false,
    foundedCryptos: [],
    favorites: [],
    addToFavorites: () => {},
    searchForCryptos: () => {},
    getCryptoInfo: () => {},
    cryptoInformation: {}
});

export function SearchContextProvider ({children}){
    const [isActive, setisActive] = useState(false);
    const [foundedCryptos, setFoundedCryptos] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cryptoInformation, setCryptoInformation] = useState({});
    

    function searchForCryptos(event, data){
        event.target.value !== '' ? setisActive(true) : setisActive(false)
        const foundCryptos = data.data.filter((el) => (
            el.name.toUpperCase().includes(event.target.value.toUpperCase())  || el.symbol.toUpperCase().includes(event.target.value.toUpperCase()) || el.quote.USD.price.toString().includes(event.target.value)
        ));
        setFoundedCryptos(foundCryptos);
        console.log(foundedCryptos)
    }
    
    function addToFavorites(data) {
        const exists = favorites.some(el => el.id === data.id);
    
        if (exists) {
            return setFavorites(prevFav => prevFav.filter(el => el.id !== data.id));
        }
    
        return setFavorites(prevFavorites => [...prevFavorites, data]);
    }

      function getCryptoInfo (data) {
        setCryptoInformation(data);
      }

    const searchContext = {
        isActive,
        foundedCryptos,
        searchForCryptos,
        addToFavorites,
        favorites,
        cryptoInformation,
        getCryptoInfo
    }

    return <SearchContext value={searchContext}>{children}</SearchContext>
}

export default SearchContext