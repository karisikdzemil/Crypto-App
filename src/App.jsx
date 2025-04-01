import { useState, useEffect } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import List from "./components/List";

const coinCapKey = "43422c1a-2e87-4553-8af5-cabbd94100da";
function App() {
  const [currentPage, setCurrentPage] = useState('Home');
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
  function switchPagesHandler(arg){
    setCurrentPage(arg)
    console.log('switched');
  }
  return (
    <>
      <Header switchBtn={switchPagesHandler}/>
      {currentPage === 'Home' && <Home data={data}/>}
      {currentPage === 'List' && <List data={data}/>}
    </>
  )
}

export default App
