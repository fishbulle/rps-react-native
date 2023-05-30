import { View, StyleSheet } from "react-native";
import { LMBoldItalic, LMLight, LMLightItalic } from "./MyFonts";
import { MyButton } from "./MyButton";
import useGames from "../hooks/useGames";
import { useEffect, useState } from "react";
import { gameInfo, getData } from "./Api";

export function GamePage() {
    const { setGames } = useGames()
    const [player, setPlayer] = useState('')
    const [opponent, setOpponent] = useState(null)
    const [playerOneMove, setPlayerMove] = useState('')
    const [opponentMove, setOpponentMove] = useState('')
    const [result, setResult] = useState('')
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        const fetchGameInfo = () => {
            gameInfo()
                .then(res => {
                    console.log(res)


                                        // setGames(res)
                    // setPlayer(res.playerOne.username)

                    // if (res.playerTwo !== null) {
                    //     setOpponent(res.playerTwo.username)
                    // }

                    // if (res.playerOneMove !== null
                    //     && res.playerTwoMove !== null) {
                    //     setResult(res.result)

                    //     if (getData('token') === res.playerOne.playerId) {
                    //         setPlayerMove(res.playerOneMove)
                    //         setOpponentMove(res.playerTwoMove)
                    //     } else if (getData('token') === res.playerTwo.playerId) {
                    //         setPlayerMove(res.playerOneMove)
                    //         setOpponentMove(res.playerTwoMove)
                    //     }
                    // }
                })
                .catch(e => console.log(e))
        }

        const interval = setInterval(() => {
            fetchGameInfo()
        }, 1000)

        fetchGameInfo()

        return () => clearInterval(interval)
    }, [])



    const handlePress = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <LMLight style={styles.text}>{player}</LMLight>
                <LMLightItalic style={styles.text2}> vs </LMLightItalic>
                <LMLight style={styles.text}>{opponent ? opponent : 'Opponent missing'}</LMLight>
            </View>
            <View style={styles.container2}>
                <MyButton
                    text="R"
                    onPress={() => handlePress()} />
                <MyButton
                    text="P"
                    onPress={() => handlePress()} />
                <MyButton
                    text="S"
                    onPress={() => handlePress()} />
            </View>
            <View style={styles.container3}>
                {/* if player2 === win ? visa texten : visa null */}
                <LMBoldItalic style={styles.result}>PLAYER 2 WINS!</LMBoldItalic>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        paddingLeft: 10,
        paddingRight: 10
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    container3: {
        paddingTop: 50
    },
    text: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 40
    },
    text2: {
        fontSize: 15,
        color: '#fff',
        paddingTop: 8
    },
    result: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'center'
    }
})