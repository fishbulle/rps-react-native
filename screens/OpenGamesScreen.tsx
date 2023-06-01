import { OpenGamesList } from "../components/OpenGamesList";
import { Header } from "../components/Header";
import { Background } from "../components/BackgroundImg";
import { ImageHeader } from "../components/ImageHeader";

export function OpenGames() {
    return (
        <Background>
            <Header />
            <ImageHeader />
            <OpenGamesList />
        </Background>
    )
}