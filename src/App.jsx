import { useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import List from "./components/List";
function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  function switchPagesHandler(arg){
    setCurrentPage(arg)
    console.log('switched')
  }
  return (
    <>
      <Header switchBtn={switchPagesHandler}/>
      {currentPage === 'Home' && <Home />}
      {currentPage === 'List' && <List />}
    </>
  )
}

export default App
