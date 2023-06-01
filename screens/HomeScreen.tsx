import { Menu } from "../components/Menu";
import { Background } from "../components/BackgroundImg";
import { Header } from "../components/Header";
import { ImageHeader } from "../components/ImageHeader";

export function Home() {
    return (
        <Background>
            <Header />
            <ImageHeader />
            <Menu />
        </Background>
    )
}