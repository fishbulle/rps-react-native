import { useEffect, useState } from "react";
import { LMLight } from "./MyFonts";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { openGames } from "./Api";
import useGames from "../hooks/useGames";

export function OpenGamesList() {
    const { games, setGames } = useGames()
    const [gameId, setGameId] = useState('')

    useEffect(() => {
        const getOpenGames = () => {
            openGames().then(res => setGames(res))
        }

        const interval = setInterval(() => {
            getOpenGames()
        }, 1000)

        getOpenGames()

        return () => clearInterval(interval)
    }, [])

    return (
        <View style={styles.container}>
            <LMLight style={styles.text}>OPEN GAMES:</LMLight>
            <FlatList
                data={games}
                keyExtractor={(item) => item.gameId}
                renderItem={({ item }) =>
                    <LMLight style={styles.text}>
                        {item.playerOne.username}
                        </LMLight>
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
    }
})