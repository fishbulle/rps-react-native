import { View, StyleSheet } from "react-native";
import { LMBoldItalic, LMLight, LMLightItalic } from "./MyFonts";
import { MyButton } from "./MyButton";

{/* spelsidan!!! */ }

export function GamePage() {

    const handlePress = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <LMLight style={styles.text}>Zelda</LMLight>
                <LMLightItalic style={styles.text2}> vs </LMLightItalic>
                <LMLight style={styles.text}>Link</LMLight>
            </View>
            <View style={styles.container2}>
                <MyButton 
                text="R"
                onPress={() => handlePress()}/>
                <MyButton
                    text="P"
                    onPress={() => handlePress()} />
                <MyButton
                    text="S"
                    onPress={() => handlePress()} />
            </View>
            <View style={styles.container3}>
                {/* if player2 === win ? visa texten : visa null */}
                <LMBoldItalic style={styles.result}>PLAYER 2 WINS!</LMBoldItalic>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        paddingLeft: 10,
        paddingRight: 10
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    container3: {
        paddingTop: 50
    },
    text: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        paddingBottom: 40
    },
    text2: {
        fontSize: 15,
        color: '#fff',
        paddingTop: 8
    },
    result: {
        fontSize: 40,
        color: '#fff',
        textAlign: 'center'
    }
})