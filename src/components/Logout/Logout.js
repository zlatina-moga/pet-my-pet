import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as authService from '../../services/authService'

export default function Logout() {
    const navigate = useNavigate()
    const {user, logout} = useAuthContext();
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout()
                navigate('/')
            })
    }, [])
    return null;
}