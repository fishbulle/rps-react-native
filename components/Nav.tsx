import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Login } from "../screens/Login"
import { Home } from "../screens/Home"
import { Game } from "../screens/Game"
import { OpenGames } from "../screens/OpenGames"

export function Nav() {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontSize: 30,
                        color: '#571d0b',
                        fontWeight: 'bold'
                    },
                    headerTitleAlign: 'center'

                }}>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name='Login' component={Login} />
                <Stack.Screen
                    options={{ headerShown: true }} 
                    name='Home' component={Home} />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name='Game' component={Game} />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name='OpenGames' component={OpenGames} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}