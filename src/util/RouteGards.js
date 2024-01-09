import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

export const RouteGards = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user.email === undefined) {
        return <Navigate to='/login'></Navigate>
    }

    return children ? children : <Outlet />;
}