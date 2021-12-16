import { createContext, useContext, useState } from "react";

export const NotificationContext = createContext();

export const types = {
    error: 'error',
    warn: 'warn',
    info: 'info',
    success: 'success'
}

export const NotificationProvider = ({
    children 
}) => {
    const [notification, setNotification] = useState({show: false, message: '', type: types.error});

    const addNotification = (message, type= types.error) => {
        setNotification({show: true, message, type})
    }

    return (
        <NotificationContext.Provider value={{notification, addNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationContext = () => {
    const notificationState = useContext(NotificationContext)
    return notificationState;
}