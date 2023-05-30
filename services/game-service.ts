import { Player } from "./player-service"

export interface Game {
    gameId: string
    playerOne: Player
    playerOneMove: string
    playerTwo: Player
    playerTwoMove: string
    status: string
    result: string
}