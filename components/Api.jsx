import AsyncStorage from '@react-native-async-storage/async-storage'

const baseURL = 'http://192.168.1.112:8080'

export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        console.log(error)
    }
}

export const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (error) {
        console.log(error)
    }
}

export const fetchToken = async () => {
    try {
        const res = await fetch(baseURL + '/players/token')
        const text = await res.json()
        return await setData('token', text)
    } catch (e) {
        return console.error(e)
    }
}

export const setPlayerName = async (username) => {
    try {
        const res = await fetch(baseURL + '/players/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: await getData('token')
            },
            body: JSON.stringify({ username: username })
        })
        const text = await res.json()
        return text
    } catch (e) {
        return console.log(e)
    }
}

export const getPlayers = async () => {
    try {
        const res = await fetch(baseURL + '/players')
        const text = await res.json()
        return text
    } catch (e) {
        return console.error(e)
    }
}

export const startGame = async () => {
    try {
        const response = await fetch(baseURL + '/games/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token: await getData('token'),
            },
        })
        const text = await response.json()
        return await setData('gameId', text)
    } catch (e) {
        return console.error(e)
    }
}

export const openGames = async () => {
    try {
        const res = await fetch(baseURL + '/games')
        return await res.json()
    } catch (e) {
        return console.error(e)
    }
}

// export const gameInfo = async () => {
//     try {
//         const res = await fetch(baseURL + '/games/gameInfo', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 gameId: RpsApi.getGameId(),
//                 token: RpsApi.getToken()
//             }
//         });
//         const response = await res.json();
//         return response;
//     } catch (error) {
//         return console.log(`Something went wrong ${error}`);
//     }
// }

export const joinGame = async (gameId) => {
    try {
        const res = await fetch(baseURL + `/games/add/${gameId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                token: await getData('token'),
            }
        })
        const text = await res.json()
        return await setData('gameId', text)
    } catch (e) {
        return console.error(e)
    }
}

// export const makeMove = async (move) => {
//     try {
//         const res = await fetch(baseURL + `/games/update/${move}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 token: RpsApi.getToken()
//             },
//             body: JSON.stringify({ 'gameId': RpsApi.getGameId() })
//         });
//         const response = await res.json();
//         return response;
//     } catch (error) {
//         return console.log(`Something went wrong ${error}`);
//     }
// }