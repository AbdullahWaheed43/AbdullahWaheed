import { useState, useCallback, useEffect } from "react";

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState(false);

    const login = useCallback((id) => {
        setIsLoggedIn(true);
        setUserId(id);

        localStorage.setItem('userData', JSON.stringify({
            userId: id
        }))

    }, []);
    const logout = useCallback(() => {
        setIsLoggedIn(false);
        setUserId(null);
        localStorage.removeItem('userData')
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'))
        //console.log(storedData)
        if (storedData) {
            login(storedData.userId);
        }
    }, [login])

    return { login, logout, isLoggedIn, userId }

}