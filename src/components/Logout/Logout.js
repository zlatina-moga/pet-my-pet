import { Navigate } from "react-router-dom";
import * as authService from '../../services/authService'

export default function Logout({
    onLogout
}) {
    authService.logout()
    onLogout()

    return <Navigate to='/'replace={true} />;
}