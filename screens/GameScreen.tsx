import { Background } from "../components/BackgroundImg";
import { GamePage } from "../components/GamePage";
import { Header } from "../components/Header";

export function Game() {
    return (
        <Background>
            <Header />
            <GamePage />
        </Background>
    )
}