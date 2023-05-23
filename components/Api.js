import AsyncStorage from "@react-native-async-storage/async-storage";

export const RpsApi = {
    setToken: async (token) => await AsyncStorage.setItem('token', token),
    getToken: async () => await AsyncStorage.getItem('token'),
    fetchToken: async () => {
        try {
            const res = await fetch('http://localhost:8080/players/token');
            const text = await res.json();
            return RpsApi.setToken(text);
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },
    setUsername: async (username) => {
        try {
            const res = await fetch('http://localhost:8080/players/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    token: RpsApi.getToken()
                },
                body: JSON.stringify({ 'username': username })
            });
            return await res.json();
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },
    setGameId: async (gameId) => await AsyncStorage.setItem('gameId', gameId),
    getGameId: async () => await AsyncStorage.getItem('gameId'),
    removeGameId: async () => await AsyncStorage.removeItem('gameId'),
    startGame: async () => {
        try {
            const response = await fetch('http://localhost:8080/games/create', {
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
            const res = await fetch('http://localhost:8080/games');
            return await res.json();
        } catch (error) {
            return console.log(`Something went wrong ${error}`);
        }
    },
    gameInfo: async () => {
        try {
            const res = await fetch('http://localhost:8080/games/gameInfo', {
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
            const res = await fetch(`http://localhost:8080/games/add/${gameId}`, {
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
            const res = await fetch(`http://localhost:8080/games/update/${move}`, {
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