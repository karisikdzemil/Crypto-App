import { useState, useEffect, useContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import List from "./components/pages/List";
import BuyCrypto from "./components/pages/BuyCrypto";
import RootLayout from "./components/pages/RootLayout";
import CryptoInfo from "./components/pages/CrytpoInfo";
import Wallet from "./components/pages/Wallet";
import Register, {action as registerUserAction} from "./components/pages/Register";
import SearchContext from "./store/SearchContext";

function App() {
      const coinCapKey = "43422c1a-2e87-4553-8af5-cabbd94100da";
      const [data, setData] = useState([]);
      const searchCtx = useContext(SearchContext);

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
          searchCtx.loadCryptoData(data);
      })
      .catch(error => console.error("Greška prilikom fetchovanja:", error));
  }, []);

  const router = createBrowserRouter([
    {path: '/', element: <RootLayout />, children: [
      {index: true, element: <Home/>},
      {path: '/list', element: <List/>},
      {path: '/buy-sell', element: <BuyCrypto buyOrSell={true}/>},
      {path: '/crypto-info', element: <CryptoInfo data={data}/>},
      {path: '/wallet', element: <Wallet/>},
      {path: '/register', element: <Register />, action: registerUserAction}
    ]}
  ])
   
  return (
        <RouterProvider router={router}/>
  )
}

export default App
