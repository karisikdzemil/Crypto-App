import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import { SearchContextProvider } from "./store/SearchContext";
import { AuthContextProvider } from "./store/AuthContext";
import List from "./components/pages/List";
import BuyCrypto from "./components/pages/BuyCrypto";
import RootLayout from "./components/pages/RootLayout";
import CryptoInfo from "./components/pages/CrytpoInfo";
import Register, {action as registerUserAction} from "./components/pages/Register";
import Wallet from "./components/pages/Wallet";

function App() {
      const coinCapKey = "43422c1a-2e87-4553-8af5-cabbd94100da";
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

  const router = createBrowserRouter([
    {path: '/', element: <RootLayout />, children: [
      {index: true, element: <Home data={data}/>},
      {path: '/list', element: <List data={data}/>},
      {path: '/buy-sell', element: <BuyCrypto data={data} buyOrSell={true}/>},
      {path: '/wallet', element: <Wallet data={data}/>},
      {path: '/register', element: <Register />, action: registerUserAction}
    ]}
  ])
   
  return (
    <SearchContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router}/>
        </AuthContextProvider>
    </SearchContextProvider>
  )
}

export default App
