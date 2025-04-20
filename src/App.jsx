import { useEffect, useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import List from "./components/pages/List";
import BuyCrypto from "./components/pages/BuyCrypto";
import RootLayout from "./components/pages/RootLayout";
import CryptoInfo from "./components/pages/CrytpoInfo";
import Wallet from "./components/pages/Wallet";
import Register, {action as registerUserAction} from "./components/pages/Register";
import SearchContext from "./store/SearchContext";
import Contact from "./components/pages/Contact";

function App() {
      // const coinCapKey = "43422c1a-2e87-4553-8af5-cabbd94100da";
      const searchCtx = useContext(SearchContext);

      useEffect(() => {
        searchCtx.loadingDataSetter(true);
      
        fetch('/api/getCoins') 
          .then(response => response.json())
          .then(data => {
            searchCtx.loadCryptoData(data);
            searchCtx.loadingDataSetter(false);
          })
          .catch(error => {
            console.error("Greška prilikom fetchovanja:", error);
          });
      }, []);
      
    

  const router = createBrowserRouter([
    {path: '/', element: <RootLayout />, children: [
      {index: true, element: <Home/>},
      {path: '/list', element: <List/>},
      {path: '/buy-sell', element: <BuyCrypto buyOrSell={true}/>},
      {path: '/crypto-info', element: <CryptoInfo/>},
      {path: '/wallet', element: <Wallet/>},
      {path: '/register', element: <Register />, action: registerUserAction},
      {path: '/contact', element: <Contact/>},
    ]}
  ]);
   
  return (
        <RouterProvider router={router}/>
  )
}

export default App;
