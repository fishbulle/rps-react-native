import { PlayerName } from "../components/PlayerName";
import { Header } from "../components/Header";
import { Background } from "../components/BackgroundImg";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { ImageHeader } from "../components/ImageHeader";

export function Login() {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <Background>
                <Header />
                <ImageHeader />
                <PlayerName />
            </Background>
        </TouchableWithoutFeedback>
    )
}