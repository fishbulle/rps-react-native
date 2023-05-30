import { useEffect } from "react";
import { LMLight } from "./MyFonts";
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
            <LMLight style={styles.text}>OPEN GAMES:</LMLight>
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
        flex: 4,
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 40
    },
    openGame: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'
    }
})