import React, { createContext, useEffect, useState } from 'react';

const PlayerContext = createContext()

const PlayerContextProvider = ({ children }) => {
    const [player, setPlayer] = useState(null)

    return (
        <PlayerContext.Provider value={{ player, setPlayer }}>
            {children}
        </PlayerContext.Provider>
    )
}

export { PlayerContext, PlayerContextProvider }