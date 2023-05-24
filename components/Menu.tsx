import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import { MyButton } from "./MyButton"
import { useNavigation } from "@react-navigation/native"
import { Background } from "./BackgroundImg"

export function Menu() {
    type Nav = {
        navigate: (value: string) => void
    }
    const nav = useNavigation<Nav>()

    const handleStartGame = () => {
        console.log('Startar nytt spel...')
        nav.navigate('Game')
    }

    const handleListOpenGames = () => {
        console.log('Skickar dig till sidan för öppna spel...')
        nav.navigate('OpenGames')
    }

    return (
        <Background>
            <View>
                <Text style={styles.text}>What do you want to do?</Text>
            </View>
            {/* länkar till sidorna för starta nytt spel eller joina öppet spel */}
            <MyButton
                style={{}}
                text="Start New Game"
                onPress={() => handleStartGame()} />
            <MyButton
                style={{}}
                text="List Open Games"
                onPress={() => handleListOpenGames()} />
        </Background>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 40
    },
})