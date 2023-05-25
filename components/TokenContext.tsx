import React, { createContext, useEffect, useState } from 'react';
import { fetchToken } from './Api';

interface ITokenContext {
    token: string
    setToken: React.Dispatch<React.SetStateAction<string>>;
}

const TokenContext = createContext<ITokenContext>({
    token: "",
    setToken: () => {
    }
});

const TokenContextProvider = ({ children }: any) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        fetchToken()
            .then((newToken) => {
                setToken(newToken)
            })
            .catch((error) => console.error(error));
    }, [])

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}

export { TokenContext, TokenContextProvider }