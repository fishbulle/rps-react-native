import { ImageBackground, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native"

interface Props {
    children: any
}

export const Background = ({ children }: Props) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss()
            }}>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/melon.jpg')} style={styles.image} resizeMode="cover">
                    <View style={styles.opacity}>
                        {children}
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    opacity: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40,
        marginBottom: 15,
        borderRadius: 30
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})