import { Pressable, StyleSheet, View } from "react-native"
import { LM } from "./MyFonts"

interface Props {
    text: string,
    onPress(): void
}

export const MyButton = ({ text, onPress }: Props) => {

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? '#FFE27D'
                            : '#FF7D7D'
                    },
                    styles.button
                ]}
                onPress={onPress}>
                <LM style={styles.buttonText}>{text}</LM>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        letterSpacing: 1
    }
})