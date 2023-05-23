import create from "./http-servics"

export interface Player {
    playerId: string,
    username: string
}

export default create('/players')