import { useEffect, useState } from "react"
import { Player } from "../services/player-service"
import { getPlayers } from "../components/Api"

const usePlayer = () => {
    const [player, setPlayer] = useState<Player[]>([])

    useEffect(() => {
        getPlayers()
            .then(res => setPlayer(res.data))
            .catch(e => console.log(e))
    }, [])

    return { player, setPlayer }
}

export default usePlayer