import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/LoginScreen"
import { Home } from "../screens/HomeScreen"
import { Game } from "../screens/GameScreen"
import { OpenGames } from "../screens/OpenGamesScreen"

export function Nav() {
    const Stack = createNativeStackNavigator()

    return (
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
    )
}