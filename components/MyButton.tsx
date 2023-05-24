import { Pressable, Text, StyleSheet, View } from "react-native"

interface Props {
    text: string,
    onPress(): void,
    style: {}
}

export const MyButton = ({ text, onPress, style}: Props) => {

    return (
        <View style={styles.buttonContainer}>
        <Pressable
            style={[styles.button, style]}
            onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
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
        backgroundColor: '#000099',
        paddingTop: 7,
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
        fontWeight: 'bold',
    }
})