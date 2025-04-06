import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import { SearchContextProvider } from "./store/SearchContext";
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
