import { Background } from "./BackgroundImg";
import { LMLightItalic } from "./MyFonts";
import { StyleSheet } from "react-native";

{/* flatList som mappar öppna spel
    och tar spelaren till det öppna spelet den klickar på */ }

    export function OpenGamesList() {

        return (
            <Background>
                <LMLightItalic style={styles.text}>OPEN GAMES:</LMLightItalic>
            </Background>
        )
    }

const styles = StyleSheet.create({
    text: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 40
    }
})