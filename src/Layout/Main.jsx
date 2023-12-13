import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHF = location.pathname.includes('login')||location.pathname.includes('register')|| location.pathname.includes('dashboard/cart')
    return (
        <div>
            { noHF || <Navbar></Navbar> }
             <Outlet></Outlet>
            { noHF || <Footer></Footer> }
        </div>
    );
};

export default Main;