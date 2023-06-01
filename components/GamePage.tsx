import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LMBoldItalic, LMLight } from "./MyFonts";
import useGames from "../hooks/useGames";
import { useEffect, useState } from "react";
import { gameInfo, getData, makeMove } from "./Api";
import { MyModal } from "./MyModal";

export function GamePage() {
    const { setGames } = useGames()
    const [player, setPlayer] = useState('')
    const [opponent, setOpponent] = useState(null)
    const [playerMove, setPlayerMove] = useState('')
    const [opponentMove, setOpponentMove] = useState('')
    const [result, setResult] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            gameInfo().then((res) => {
                setGames(res)
                setPlayer(res.playerOne.username)

                if (res.playerTwo !== null) {
                    setOpponent(res.playerTwo.username)
                }

                if (res.playerOne && res.playerTwo) {
                    return clearInterval(interval)
                }
            })
                .catch(e => console.log(e.message))
        }, 1000)

        if (opponent) {
            const newInterval = setInterval(() => {
                gameInfo().then(res => {
                    if (res.playerOneMove && res.playerTwoMove) {
                        setResult(res.result)

                        if (res.playerOne.userId === (getData('token'))) {
                            setOpponentMove(res.playerTwoMove)
                            setPlayerMove(res.playerOneMove)
                        } else {
                            setOpponentMove(res.playerOneMove)
                            setPlayerMove(res.playerTwoMove)
                        }

                        clearInterval(newInterval)
                    }
                })
            }, 1000)
        }

    }, [opponent])

    const handlePress = (move: string) => {
        makeMove(move)
            .then(res => setGames(res.sign))
    }

    return (
        <View style={styles.container}>
            <View>
                <LMBoldItalic style={styles.text2}>{playerMove}</LMBoldItalic>
            </View>
            <View style={styles.players}>
                <LMLight style={styles.text}>{player}</LMLight>
            </View>
            <View style={styles.imgContainer}>
                <TouchableOpacity
                    onPress={() => {
                        handlePress('lemon')
                    }}>
                    <Image
                        source={require('../assets/lemon.png')}
                        style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        handlePress('strawberry')
                    }}>
                    <Image
                        source={require('../assets/strawberry.png')}
                        style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        handlePress('apple')
                    }}>
                    <Image
                        source={require('../assets/apple.png')}
                        style={styles.img} />
                </TouchableOpacity>
            </View>
            <View>
                <LMBoldItalic style={styles.text2}>{opponentMove}</LMBoldItalic>
            </View>

            <View style={styles.players}>
                <LMLight style={styles.text}>{opponent ? opponent : 'Opponent missing'}</LMLight>
            </View>
            {result ? (
                <MyModal>
                    <View style={styles.result}>
                        {result === 'WIN' ? (
                            <Image style={styles.resultImg} source={require('../assets/winner.png')} />
                        ) : null}
                        {result === 'LOSE' ? (
                            <Image style={styles.resultImg} source={require('../assets/loser.png')} />
                        ) : null}
                        {result === 'DRAW' ? (
                            <Image style={styles.resultImg} source={require('../assets/draw.png')} />
                        ) : null}
                    </View>
                </MyModal>
            ) : null}
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
    text2: {
        fontSize: 15,
        textAlign: 'center',
        color: '#333'
    },
    result: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    resultImg: {
        width: 300,
        resizeMode: 'contain'
    },
    img: {
        height: 80,
        width: 70
    }
})