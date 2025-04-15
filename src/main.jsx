import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SearchContextProvider } from "./store/SearchContext";
import { AuthContextProvider } from "./store/AuthContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchContextProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </SearchContextProvider>
  </StrictMode>,
)
