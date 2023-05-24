import { SafeAreaView, View, Text, StyleSheet } from "react-native"
import { MyButton } from "./MyButton"
import { useNavigation } from "@react-navigation/native"

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
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3dfd5',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 30
    },
    text: {
        fontSize: 25,
        color: '#571d0b',
        textAlign: 'center',
        paddingBottom: 40
    }
})