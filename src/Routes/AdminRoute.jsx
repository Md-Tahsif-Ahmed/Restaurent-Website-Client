import useAuth from "../Hook/useAuth";
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hook/useAdmin';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AdminRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isLoading] = useAdmin();
    console.log('user and admin',user, isAdmin);
    if (loading || isLoading) {
        return <progress className="progress progress-accent w-56" value="100" max="100"></progress>;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ form: location }}></Navigate>;
};

export default AdminRoute;
