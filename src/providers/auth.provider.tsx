import React, { useContext, useState, useEffect } from "react";
import { useLocalStorage } from '~/common';

const AuthContext = React.createContext({
    isLoggedIn: false,
    user: null
});

export function AuthContextProvider({ children, url, callback, onError, tokenKey = 'accessToken' } :
                                        { children: React.ReactNode, url: string, tokenKey?: string,
                                            callback?: (user: any) => void, onError?: () => void}) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useLocalStorage(tokenKey, '');
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const token = accessToken?.length ? accessToken : urlParams.get(tokenKey);
        if (token) {
            fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Authorization": `Bearer ${token}`,
                } as any
            })
                .then((response) => response.json())
                .then((data) => {
                    setUser(data)
                    setIsLoggedIn(true)
                    setAccessToken(token);
                    callback && callback(data)
                }).catch(() => {
                    onError && onError()
            });
        }
    }, []);
    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}
