import React, { createContext, useEffect, useState } from 'react';

const TokenContext = createContext('')

const TokenContextProvider = ({ children }) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const res = await fetch('http://192.168.1.112:8080/players/token')
                const text = await res.json()
                return setToken(text)
            } catch (error) {
                return console.log(`Something went wrong ${error}`)
            }
        }
        fetchToken()
    }, [])

    return (
        <TokenContext.Provider value={{ token }}>
            {children}
        </TokenContext.Provider>
    )
}

export { TokenContext, TokenContextProvider }