import { PlayerName } from "../components/PlayerName";
import { Header } from "../components/Header";
import { Background } from "../components/BackgroundImg";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export function Login() {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <Background>
                <Header />
                <PlayerName />
            </Background>
        </TouchableWithoutFeedback>
    )
}