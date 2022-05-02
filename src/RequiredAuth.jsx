import { useAuth } from "contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({children}) =>{
    let location = useLocation();
    const {isLoggedIn} = useAuth();
    return isLoggedIn ? children : <Navigate to="/login" state={{from: location}} replace />;
}