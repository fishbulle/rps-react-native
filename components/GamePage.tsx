import { View, StyleSheet, Pressable, Image } from "react-native";
import { LMBoldItalic, LMLight, LMLightItalic } from "./MyFonts";
import { MyButton } from "./MyButton";
import useGames from "../hooks/useGames";
import { useEffect, useState } from "react";
import { gameInfo, getData, makeMove } from "./Api";

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
                    setGames(res)
                    setPlayer(res.playerOne.username)

                    if (res.playerTwo !== null) {
                        setOpponent(res.playerTwo.username)
                    }

                    if (res.playerOneMove !== null
                        && res.playerTwoMove !== null) {
                        setResult(res.result)

                        if (getData('token') === res.playerOne.playerId) {
                            setPlayerMove(res.playerOneMove)
                            setOpponentMove(res.playerTwoMove)
                        } else if (getData('token') === res.playerTwo.playerId) {
                            setPlayerMove(res.playerOneMove)
                            setOpponentMove(res.playerTwoMove)
                        }
                    }
                })
                .catch(e => console.log(e))
        }

        const interval = setInterval(() => {
            fetchGameInfo()
        }, 1000)

        fetchGameInfo()

        return () => clearInterval(interval)
    }, [])

    const handlePress = (move: string) => {
        makeMove(move)
            .then(res => setGames(res.sign))
    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <LMLight style={styles.text}>{player}</LMLight>
                <LMLightItalic style={styles.text2}> vs </LMLightItalic>
                <LMLight style={styles.text}>{opponent ? opponent : 'Opponent missing'}</LMLight>
            </View>
            <View style={styles.container3}>
                <Pressable
                    disabled={disable}
                    onPress={() => {
                        handlePress('rock')
                        setDisable(true)
                    }}>
                    <Image
                        source={require('../assets/rock.png')}
                        style={styles.img} />
                </Pressable>
                <Pressable
                    disabled={disable}
                    onPress={() => {
                        handlePress('paper')
                        setDisable(true)
                    }}>
                    <Image
                        source={require('../assets/paper.png')}
                        style={styles.img} />
                </Pressable>
                <Pressable
                    disabled={disable}
                    onPress={() => {
                        handlePress('scissors')
                        setDisable(true)
                    }}>
                    <Image
                        source={require('../assets/sax.png')}
                        style={styles.img} />
                </Pressable>
            </View>
            <View style={styles.container4}>
                {result === 'WIN' ? (
                    <LMBoldItalic style={styles.result}>{player} WINS!</LMBoldItalic>
                ) : null}
                {result === 'LOSE' ? (
                    <LMBoldItalic style={styles.result}>{opponent} WINS!</LMBoldItalic>
                ) : null}
                {result === 'DRAW' ? (
                    <LMBoldItalic style={styles.result}>IT'S A DRAW!</LMBoldItalic>
                ) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 30
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container4: {
        paddingTop: 50
    },
    text: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 40
    },
    text2: {
        fontSize: 10,
        color: '#fff',
        paddingTop: 4
    },
    result: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'center'
    },
    img: {
        height: 100,
        width: 100
    }
})