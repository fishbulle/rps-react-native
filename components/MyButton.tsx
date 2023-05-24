import { Pressable, Text, StyleSheet } from "react-native"

interface Props {
    text: string,
    onPress(): void,
    style: {}
}

export const MyButton = ({ text, onPress, style}: Props) => {

    return (
        <Pressable
            style={[styles.button, style]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#bd9f7f',
        paddingTop: 5,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
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
        fontWeight: 'bold',
    }
})