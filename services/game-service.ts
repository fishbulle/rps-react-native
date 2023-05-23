import { Player } from "./player-service"
import create from "./http-servics"

export interface Game {
    gameId: string
    playerOne: Player
    playerOneMove: string
    playerTwo: Player
    playerTwoMove: string
    status: string
    result: string
}

export default create('/games')
