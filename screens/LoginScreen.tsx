import { PlayerName } from "../components/PlayerName";
import { Header } from "../components/Header";
import { Background } from "../components/BackgroundImg";
import { ImageHeader } from "../components/ImageHeader";

export function Login() {
    return (
        <Background>
            <Header />
            <ImageHeader />
            <PlayerName />
        </Background>
    )
}