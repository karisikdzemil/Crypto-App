import { useState, useEffect, useContext } from "react";
import SearchContext from "../store/SearchContext";
import Home from "./Home";
import List from "./List";
import CryptoInfo from "./CrytpoInfo";

const coinCapKey = "43422c1a-2e87-4553-8af5-cabbd94100da";

function MainContent() {
    const searchCtx = useContext(SearchContext);
    const [data, setData] = useState([]);
  
  useEffect(() => {
      fetch('/api/v1/cryptocurrency/listings/latest', {
          method: 'GET',
          headers: {
              'X-CMC_PRO_API_KEY': coinCapKey
          }
      })
      .then(response => response.json())
      .then(data => {
          setData(data);
      })
      .catch(error => console.error("Greška prilikom fetchovanja:", error));
  }, []);
  

    return (
        <>
            {searchCtx.currentPage === 'Home' && <Home data={data}/>}
            {searchCtx.currentPage === 'List' && <List data={data}/>}
            {searchCtx.currentPage === 'Info' && <CryptoInfo />}
        </>
    );
}

export default MainContent;
