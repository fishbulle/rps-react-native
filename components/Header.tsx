import { LMBoldItalic, LMLightItalic } from "./MyFonts";
import { StyleSheet, View } from "react-native";

export function Header() {

    return (
        <View style={styles.container}>
            <LMBoldItalic style={styles.text}>R</LMBoldItalic>
            <LMLightItalic style={styles.text2}>ock </LMLightItalic>
            <LMBoldItalic style={styles.text}>P</LMBoldItalic>
            <LMLightItalic style={styles.text2}>aper </LMLightItalic>
            <LMBoldItalic style={styles.text}>S</LMBoldItalic>
            <LMLightItalic style={styles.text2}>icssors</LMLightItalic>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        marginTop: 100,
        justifyContent: 'center'
    },
    text: {
        fontSize: 60,
        color: '#fff'
    },
    text2: {
        fontSize: 20,
        color: '#fff',
        paddingTop: 32,
        textDecorationLine: 'line-through'
    }
})