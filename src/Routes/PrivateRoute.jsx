import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <progress className="progress progress-accent w-56" value="100" max="100"></progress>
    }
    if(user) {
        return children;
    }
    return <Navigate to='/login' state={{form:location}}></Navigate>
     
};

export default PrivateRoute;