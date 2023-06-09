import { TextInput, StyleSheet, View } from "react-native"
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { MyButton } from "./MyButton"
import { LMLight } from "./MyFonts"
import { fetchToken, setPlayerName } from "./Api"
import usePlayer from "../hooks/usePlayer"

export function PlayerName() {
    type Nav = {
        navigate: (value: string) => void
    }
    const nav = useNavigation<Nav>()
    const [username, setUsername] = useState('')
    const { setPlayer } = usePlayer()

    useEffect(() => {
        fetchToken()
    }, [])

    const handleUsername = () => {
        setPlayerName(username)
            .then(res => setPlayer(res.username))
        nav.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <LMLight style={styles.text}>What's your name?</LMLight>
            <TextInput
                style={styles.input}
                placeholder="username"
                autoComplete="off"
                value={username}
                onChangeText={(value) => setUsername(value)} />
            <MyButton
                text="Let's Play!"
                onPress={handleUsername} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#3f0528",
        margin: 10,
        padding: 10,
        textAlign: 'center'
    },
    text: {
        fontSize: 25,
        color: '#333',
        textAlign: 'center',
        paddingBottom: 40,
        letterSpacing: 1
    }
})