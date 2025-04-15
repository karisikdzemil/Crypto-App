import { createContext, useState } from "react";

const SearchContext = createContext({
    cryptoData: null,
    loadCryptoData: () => {},
    loadingDataSetter: () => {},
    isLoadingData: false,
    isActive: false,
    foundedCryptos: [],
    favorites: [],
    addToFavorites: () => {},
    searchForCryptos: () => {},
    getCryptoInfo: () => {},
    cryptoInformation: {}
});

export function SearchContextProvider ({children}){
    const [cryptoData, setCryptoData] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [foundedCryptos, setFoundedCryptos] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [cryptoInformation, setCryptoInformation] = useState({});


    function loadCryptoData (cryptos) {
        setCryptoData(cryptos)
    }

    function loadingDataSetter (value) {
        setIsLoadingData(value);
    }
    

    function searchForCryptos(event, data){
        event.target.value !== '' ? setIsActive(true) : setIsActive(false)
        const foundCryptos = data.data.filter((el) => (
            el.name.toUpperCase().includes(event.target.value.toUpperCase())  || el.symbol.toUpperCase().includes(event.target.value.toUpperCase()) || el.quote.USD.price.toString().includes(event.target.value)
        ));
        setFoundedCryptos(foundCryptos);
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
        cryptoData,
        loadCryptoData,
        loadingDataSetter,
        isLoadingData,
        isActive,
        foundedCryptos,
        searchForCryptos,
        addToFavorites,
        favorites,
        cryptoInformation,
        getCryptoInfo,
    }

    return <SearchContext.Provider value={searchContext}>{children}</SearchContext.Provider>
}

export default SearchContext
  