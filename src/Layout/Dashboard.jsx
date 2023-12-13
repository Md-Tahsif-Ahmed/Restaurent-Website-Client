import { NavLink, Outlet } from "react-router-dom";
import { CiBookmark, CiCalendar, CiHome, CiReceipt, CiSearch, CiShoppingCart } from "react-icons/ci";
 
 

const Dashboard = () => {
 
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu p-4"> 
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/userHome'><CiHome size={28}/>User Home</NavLink></li>
                 
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/reservation'><CiCalendar size={28}/>Resevation</NavLink></li>
                 
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/review'><CiReceipt size={28}/>My Review</NavLink></li>
                
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/reservation'><CiBookmark size={28}/>My Booking</NavLink></li>
               

              
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/dashboard/cart'><CiShoppingCart size={28}/>My Cart</NavLink></li>

                    <div className="divider"></div>
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/'><CiHome size={28}/>Home</NavLink></li>
                    
                    <li className=" rounded-lg text-white">
                        
                        <NavLink to='/order/salad'><CiSearch size={28}/>Menu</NavLink></li>
                    

                </ul>
            </div>
            <div className="flex-1">
              
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;