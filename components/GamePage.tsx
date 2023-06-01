import { View, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
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
            <View style={styles.players}>
                <LMLight style={styles.text}>{player}</LMLight>
            </View>
            <View style={styles.imgContainer}>
                <TouchableOpacity
                    onPress={() => {
                        handlePress('scissors')
                    }}>
                    <Image
                        source={require('../assets/lemon.png')}
                        style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        handlePress('paper')
                    }}>
                    <Image
                        source={require('../assets/strawberry.png')}
                        style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        handlePress('rock')
                    }}>
                    <Image
                        source={require('../assets/apple.png')}
                        style={styles.img} />
                </TouchableOpacity>
            </View>
            <View style={styles.players}>
                <LMLight style={styles.text}>{opponent ? opponent : 'Opponent missing'}</LMLight>
            </View>
            <View style={styles.result}>
                {result === 'WIN' ? (
                    <LMBoldItalic style={{}}>YOU WIN!</LMBoldItalic>
                ) : null}
                {result === 'LOSE' ? (
                    <LMBoldItalic style={{}}>YOU LOSE!</LMBoldItalic>
                ) : null}
                {result === 'DRAW' ? (
                    <LMBoldItalic style={{}}>IT'S A DRAW!</LMBoldItalic>
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
    players: {
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 40,
        marginLeft: 70,
        marginRight: 70,
        padding: 20,
        shadowColor: '#333',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 2
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 60,
        paddingBottom: 60
    },
    text: {
        fontSize: 20,
        color: '#333',
        textAlign: 'center'
    },
    result: {
        fontSize: 35,
        color: '#333',
        textAlign: 'center',
        marginTop: 30
    },
    img: {
        height: 80,
        width: 70
    }
})