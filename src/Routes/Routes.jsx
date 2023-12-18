import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Homepage/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Secret from "../Pages/Shared/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <Menu></Menu>,
      },
      {
        path: '/order',
        element: <Order></Order>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element:  <Register></Register>,
      },
      {
        path: '/secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          // normal user route
          {
            path: 'cart', // Adjusted path to be relative to its parent "/dashboard"
            element: <Cart></Cart>,
          },
          // admin only
          {
            path: 'additem',
            element:<AddItem></AddItem>,
          },
         

          {
            path: 'allusers',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>, 
          },

         {
          path: 'mitem',
          element: <ManageItem></ManageItem>,
         }


        ],
      },
    ],
  },
]);
