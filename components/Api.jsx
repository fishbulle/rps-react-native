import AsyncStorage from '@react-native-async-storage/async-storage'

const baseURL = 'http://192.168.1.112:8080'

export const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
            .then(() => console.log(key, value))
    } catch (error) {
        console.log(error)
    }
}

export const getData = async (key) => {
    try {
        await AsyncStorage.getItem(key)
            .then(() => console.log(key))
    } catch (error) {
        console.log(error)
    }
}

export const fetchToken = async () => {
    try {
        const res = await fetch(baseURL + '/players/token')
        const text = res.json()
        return await setData('token', text)
    } catch (e) {
        console.error(e)
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
        });
        return await res.json()
    } catch (error) {
        return console.log(error);
    }
}

// export const startGame = async () => {
//     try {
//         const response = await fetch(baseURL + '/games/create', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 token: RpsApi.getToken(),
//             },
//         });
//         const text = await response.json();
//         return RpsApi.setGameId(text.gameId);
//     } catch (error) {
//         return console.log(`Something went wrong ${error}`);
//     }
// }

// export const openGames = async () => {
//     try {
//         const res = await fetch(baseURL + '/games');
//         return await res.json();
//     } catch (error) {
//         return console.log(`Something went wrong ${error}`);
//     }
// }

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

// export const joinGame = async (gameId) => {
//     try {
//         const res = await fetch(baseURL + `/games/add/${gameId}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 token: RpsApi.getToken(),
//             }
//         });
//         const response = await res.json();
//         return RpsApi.setGameId(response.gameId);
//     } catch (error) {
//         return console.log(`Something went wrong ${error}`);
//     }
// }

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