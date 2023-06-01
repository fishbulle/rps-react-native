import { LMBoldItalic, LMLightItalic } from "./MyFonts";
import { StyleSheet, View } from "react-native";

export const Header = () => {

    return (
        <View style={styles.container}>
            <LMBoldItalic style={styles.text}>FRUIT COCKTAIL</LMBoldItalic>
            <LMLightItalic style={styles.rules}>Lemon &gt; Strawberry &gt; Apple </LMLightItalic>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        color: '#333',
        paddingTop: 40,
        paddingBottom: 10
    },
    rules: {
        fontSize: 15,
        color: '#333'
    }
})