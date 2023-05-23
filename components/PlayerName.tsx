import { ActivityIndicator, Pressable, SafeAreaView, TextInput, Text, StyleSheet, View } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"


export function PlayerName() {
    type Nav = {
        navigate: (value: string) => void
    }
    const nav = useNavigation<Nav>()
    const [isLoading, setLoading] = useState(true);
    const [token, setToken] = useState('')
    const [username, setUsername] = useState('')

    const fetchToken = async () => {
        try {
            const response = await fetch('http://localhost:8080/players/token')
            const text = await response.json()
            setToken(text)
            return await AsyncStorage.setItem('token', token)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchToken()
    }, [])

    const handleUsername = async (username: string) => {


        // try {
        //     await AsyncStorage.setItem('username', username)
        // } catch (error) {
        //     console.log(error)
        // }

        // nav.navigate('Home')

    }

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator color='#000' />
            ) : (
                <View>
                    <Text style={styles.text}>What's your name?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="username"
                        autoComplete="off"
                        value={username}
                        onChangeText={(value) => setUsername(value)} />
                    <Pressable
                        onPress={() => handleUsername(username)}>
                        <Text>Let's Play!</Text></Pressable>
                </View>
            )}
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
        color: '#571d0b',
        textAlign: 'center',
        paddingBottom: 40
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})