import { createContext, useState } from "react";

export const PlayerContext = createContext()

const PlayerContextProvider = ({children}) =>{
    const [isPlay, setIsPlay] = useState(false)

    const playerContextData ={
        isPlay,
        setIsPlay,
    }
    return (
        <PlayerContext.Provider value={playerContextData}>
            {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;