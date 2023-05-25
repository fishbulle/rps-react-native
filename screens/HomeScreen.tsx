import { Menu } from "../components/Menu";
import { Background } from "../components/BackgroundImg";
import { Header } from "../components/Header";

export function Home() {
    return (
        <Background>
            <Header />
            <Menu />
        </Background>
    )
}