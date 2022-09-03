import React, { createContext, useState, useEffect } from 'react'


export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUser(JSON.parse(localStorage.getItem('user')) || {})
            setLoading(false)
        }
    }, []);

    function login(user) {
        localStorage.setItem('user', JSON.stringify(user))
        setUser({ ...user })
    }

    function logout() {
        localStorage.removeItem('user')
        setUser({})
    }

    return <AuthContext.Provider value={{ user, login, logout }}>
        {loading ? <></> : children}
    </AuthContext.Provider>
}
