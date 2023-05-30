import { useEffect, useState } from "react"
import { Game } from "../services/game-service"
import { openGames } from "../components/Api"

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    
    useEffect(() => {
        openGames()
            .then(res => setGames(res.data))
            .catch(e => console.log(e))
    }, [])

    return { games, setGames }
}

export default useGames