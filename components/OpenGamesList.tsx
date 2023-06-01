import { useContext, useEffect } from "react";
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
            <View style={styles.border}></View>
            <FlatList
                data={games}
                keyExtractor={(item) => item.gameId}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => handleJoinGame(item)}
                        key={item.gameId}>
                        <View style={styles.openGame}>
                            <LMLight style={styles.openGameText}>
                                {item.playerOne.username}
                            </LMLight>
                        </View>
                    </TouchableOpacity>
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        color: '#333',
        textAlign: 'center',
        paddingBottom: 10
    },
    border: {
        backgroundColor: '#333',
        height: 1.5,
        width: '70%',
        marginBottom: 20
    },
    openGame: {
        backgroundColor: '#FFE27D',
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    openGameText: {
        color: '#fff',
        fontSize: 25,
        textAlign: 'center'
    }
})