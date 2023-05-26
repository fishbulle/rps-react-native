import React, { createContext, useEffect, useState } from 'react';

const TokenContext = createContext('')

const TokenContextProvider = ({ children }) => {
    const [token, setToken] = useState('')
    const baseURL = "http://192.168.1.112:8080"

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const res = await fetch(baseURL + '/players/token')
                return await res.json()
            } catch (error) {
                return console.log(error)
            }
        }
        fetchToken()
            .then(newToken => setToken(newToken))
    }, [])

    return (
        <TokenContext.Provider value={token}>
            {children}
        </TokenContext.Provider>
    )
}

export { TokenContext, TokenContextProvider }
