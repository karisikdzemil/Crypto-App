import { createContext, useState } from "react";

const SearchContext = createContext({
    isActive: false,
    foundedCryptos: [],
    favorites: [],
    addToFavorites: () => {},
    searchForCryptos: () => {},
    switchPages: () => {},
    currentPage: 'Home',

})

export function SearchContextProvider ({children}){
    const [isActive, setisActive] = useState(false);
    const [foundedCryptos, setFoundedCryptos] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [currentPage, setCurrentPage] = useState('Home');
    

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
    function switchPages(arg){
        setCurrentPage(arg)
        console.log(currentPage);
      }

    const searchContext = {
        isActive,
        foundedCryptos,
        searchForCryptos,
        addToFavorites,
        favorites,
        switchPages,
        currentPage
    }

    return <SearchContext value={searchContext}>{children}</SearchContext>
}

export default SearchContext