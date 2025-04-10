import { Outlet } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
export default function RootLayout() {
    return(
        <>
           <Header /> 
           <main>
           <Outlet />
           </main>
            <Footer />
        </>
    )
}