import { View, StyleSheet } from "react-native"
import { MyButton } from "./MyButton"
import { useNavigation } from "@react-navigation/native"
import { LMLight } from "./MyFonts"
import { startGame } from "./Api"

export function Menu() {
    type Nav = {
        navigate: (value: string) => void
    }
    const nav = useNavigation<Nav>()

    const handleStartGame = () => {
        startGame()
        nav.navigate('Game')
    }

    const handleListOpenGames = () => {
        nav.navigate('OpenGames')
    }

    return (
        <View style={styles.container}>
            <View>
                <LMLight style={styles.text}>What do you want to do?</LMLight>
            </View>
            <MyButton
                text="Start New Game"
                onPress={() => handleStartGame()} />
            <MyButton
                text="List Open Games"
                onPress={() => handleListOpenGames()} />
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
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 40
    },
})