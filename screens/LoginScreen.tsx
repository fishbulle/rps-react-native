import { View } from "react-native";
import { PlayerName } from "../components/PlayerName";
import { Header } from "../components/Header";
import { Background } from "../components/BackgroundImg";

export function Login() {
    return (
        <Background>
            <Header />
            <PlayerName />
        </Background>
    )
}