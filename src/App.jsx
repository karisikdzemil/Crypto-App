// import { useState, useEffect, useContext } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import List from "./components/list/List";
import Footer from "./components/UI/Footer";
import CryptoInfo from "./components/cryptoInfo/CrytpoInfo";
import { SearchContextProvider } from "./store/SearchContext";
import SearchContext from "./store/SearchContext";
import MainContent from "./components/MainContent";

function App() {
   
  return (
    <SearchContextProvider>
      <Header/>
      <MainContent />
      <Footer />
    </SearchContextProvider>
  )
}

export default App
