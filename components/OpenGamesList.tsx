import { LMLight} from "./MyFonts";
import { StyleSheet, View } from "react-native";

{/* flatList som mappar öppna spel
    och tar spelaren till det öppna spelet den klickar på */ }

    export function OpenGamesList() {

        return (
            <View style={styles.container}>
                <LMLight style={styles.text}>OPEN GAMES:</LMLight>
            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 4,
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 40
    }
})