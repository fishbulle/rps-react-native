import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
            .then(() => console.log(key, jsonValue))
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

export const RpsApi = {
    fetchToken: async () => {
        try {
            const res = await fetch('http://192.168.1.112:8080/players/token');
            const text = await res.json();
            return setData('token', text);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },
    setUsername: async (username) => {
        try {
            const res = await fetch('http://192.168.1.112:8080/players/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: getData('token')
                },
                body: JSON.stringify({ 'username': username })
            });
            const text = await res.json()
            return setData('username', text)
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },
    startGame: async () => {
        try {
            const response = await fetch('http://192.168.1.112:8080/games/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: RpsApi.getToken(),
                },
            });
            const text = await response.json();
            return RpsApi.setGameId(text.gameId);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },
    openGames: async () => {
        try {
            const res = await fetch('http://192.168.1.112:8080/games');
            return await res.json();
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },
    gameInfo: async () => {
        try {
            const res = await fetch('http://192.168.1.112:8080/games/gameInfo', {
                headers: {
                    'Content-Type': 'application/json',
                    gameId: RpsApi.getGameId(),
                    token: RpsApi.getToken()
                }
            });
            const response = await res.json();
            return response;
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },
    joinGame: async (gameId) => {
        try {
            const res = await fetch(`http://192.168.1.112:8080/games/add/${gameId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: RpsApi.getToken(),
                }
            });
            const response = await res.json();
            return RpsApi.setGameId(response.gameId);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },
    makeMove: async (move) => {
        try {
            const res = await fetch(`http://192.168.1.112:8080/games/update/${move}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: RpsApi.getToken()
                },
                body: JSON.stringify({ 'gameId': RpsApi.getGameId() })
            });
            const response = await res.json();
            return response;
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    }
}