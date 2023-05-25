import { TextInput, StyleSheet, View } from "react-native"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { MyButton } from "./MyButton"
import { Background } from "./BackgroundImg"
import { LMLight } from "./MyFonts"
import { setPlayerName } from "./Api"

export function PlayerName() {
    type Nav = {
        navigate: (value: string) => void
    }
    const nav = useNavigation<Nav>()
    const [username, setUsername] = useState('')
    const [player, setPlayer] = useState('')

    const handleUsername = (username: string) => {
        setPlayerName(username)

        nav.navigate('Home')
    }

    return (
        <Background>
            <View>
                <LMLight style={styles.text}>What's your name?</LMLight>
                <TextInput
                    style={styles.input}
                    placeholder="username"
                    autoComplete="off"
                    value={username}
                    onChangeText={(value) => setUsername(value)} />
                <MyButton
                    style={{}}
                    text="Let's Play!"
                    onPress={() => handleUsername(username)} />
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#3f0528",
        margin: 10,
        padding: 10,
        textAlign: 'center'
    },
    text: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 40
    }
})