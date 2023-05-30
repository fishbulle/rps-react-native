import { useEffect } from "react";
import { LMLight, LMLightItalic } from "./MyFonts";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { joinGame, openGames } from "./Api";
import useGames from "../hooks/useGames";
import { Game } from "../services/game-service";
import { useNavigation } from "@react-navigation/native";

export function OpenGamesList() {
    type Nav = {
        navigate: (value: string) => void
    }
    const nav = useNavigation<Nav>()
    const { games, setGames } = useGames()

    useEffect(() => {
        const getOpenGames = () => {
            openGames()
                .then(res => setGames(res))
        }

        const interval = setInterval(() => {
            getOpenGames()
        }, 1000)

        getOpenGames()

        return () => clearInterval(interval)
    }, [])

    const handleJoinGame = async (game: Game) => {
        joinGame(game.gameId)
        nav.navigate('Game')
    }

    return (
        <View style={styles.container}>
            <LMLight style={styles.text}>OPEN GAMES</LMLight>
            <LMLightItalic style={styles.text2}>CLICK TO JOIN</LMLightItalic>
            <FlatList
                data={games}
                keyExtractor={(item) => item.gameId}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => handleJoinGame(item)}
                        key={item.gameId}>
                        <LMLight style={styles.openGame}>
                            {item.playerOne.username}
                        </LMLight>
                    </TouchableOpacity>
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        fontSize: 25,
        color: '#333',
        textAlign: 'center',
        paddingBottom: 10
    },
    text2: {
        fontSize: 15,
        color: '#333',
        textAlign: 'center',
        paddingBottom: 40,
        textDecorationLine: 'line-through'
    },
    openGame: {
        fontSize: 25,
        textAlign: 'center',
        color: '#333'
    }
})