import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/LoginScreen"
import { Home } from "../screens/HomeScreen"
import { Game } from "../screens/GameScreen"
import { OpenGames } from "../screens/OpenGamesScreen"
import { createContext, useEffect, useState } from "react"
import { fetchToken } from "./Api"

interface ITokenContext {
    token: string
    setToken: React.Dispatch<React.SetStateAction<string>>;
}

export const TokenContext = createContext<ITokenContext>({
    token: "",
    setToken: () => {
    }
});

export function Nav() {
    const [token, setToken] = useState("");

    useEffect(() => {
        fetchToken()
            .then((newToken: string) => {
                setToken(newToken)
            })
            .catch((error: any) => console.error(error));
    }, [])

    const Stack = createNativeStackNavigator()

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login">
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name='Login' component={Login} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name='Home' component={Home} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name='Game' component={Game} />
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name='OpenGames' component={OpenGames} />
                </Stack.Navigator>
            </NavigationContainer>
        </TokenContext.Provider>
    )
}