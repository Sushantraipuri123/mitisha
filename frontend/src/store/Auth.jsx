import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // Initialize state with token from localStorage
    const [token, setToken] = useState(() => localStorage.getItem('token') || '');

    // Store token in localStorage and update state
    const storeTokenInLocalStorage = (serverToken) => {
        localStorage.setItem('token', serverToken);
        setToken(serverToken);
    };

    // Determine if user is logged in
    const isLoggedin = !!token;

    // Logout user by removing token and clearing state
    const LogoutAadmin = () => {
        localStorage.removeItem('token');
        setToken('');
    };

    // Effect to synchronize token state with localStorage
    useEffect(() => {
        if (!token) {
            localStorage.removeItem('token');
        } else {
            localStorage.setItem('token', token);
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ storeTokenInLocalStorage, LogoutAadmin, isLoggedin }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for consuming the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};