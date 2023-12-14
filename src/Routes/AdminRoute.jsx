import useAuth from '../Hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hook/useAdmin';

const AdminRoute = ({children}) => {
    const [user, loading] = useAuth();
    const location = useLocation();
    const [isAdmin, isAdminLoading] = useAdmin();
    if(loading || isAdminLoading){
        <progress className="progress progress-accent w-56" value="100" max="100"></progress>
    }
    if(user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{form:location}}></Navigate>
     
};

export default AdminRoute;