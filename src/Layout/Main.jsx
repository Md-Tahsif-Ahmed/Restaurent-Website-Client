import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHF = location.pathname.includes('login')||location.pathname.includes('register')
    || location.pathname.includes('dashboard/cart')|| location.pathname.includes('dashboard/additem')
    || location.pathname.includes('dashboard/mitem')|| location.pathname.includes('dashboard/payment')||
    location.pathname.includes('dashboard/paymenthistory')|| location.pathname.includes('dashboard/adminhome')
    return (
        <div>
            { noHF || <Navbar></Navbar> }
             <Outlet></Outlet>
            { noHF || <Footer></Footer> }
        </div>
    );
};

export default Main;