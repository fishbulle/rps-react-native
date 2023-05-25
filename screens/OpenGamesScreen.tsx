import { OpenGamesList } from "../components/OpenGamesList";
import { Header } from "../components/Header";
import { Background } from "../components/BackgroundImg";

export function OpenGames() {
    return (
        <Background>
            <Header />
            <OpenGamesList />
        </Background>
    )
}