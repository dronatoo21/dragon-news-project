import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(authContext);
    const location = useLocation();

    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};
export default PrivateRoute;