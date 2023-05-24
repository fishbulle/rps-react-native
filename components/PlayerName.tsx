import { TextInput, Text, StyleSheet, View } from "react-native"
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { fetchToken, setData, setPlayer } from "./Api"
import { MyButton } from "./MyButton"
import { Background } from "./BackgroundImg"

export function PlayerName() {
    type Nav = {
        navigate: (value: string) => void
    }
    const nav = useNavigation<Nav>()
    const [username, setUsername] = useState('')

    useEffect(() => {
        fetchToken()
    }, [])

    const handleUsername = async (username: string) => {
        await setPlayer(username)
        await setData('username', username)
        nav.navigate('Home')
    }

    return (
        <Background>
            <View>
                <Text style={styles.text}>What's your name?</Text>
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
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})