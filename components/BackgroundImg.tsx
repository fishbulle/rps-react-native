import { ImageBackground, StyleSheet, View } from "react-native"

interface Props {
    children: any
}

export const Background = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/melon.jpg')} style={styles.image} resizeMode="cover">
                <View style={styles.opacity}>
                {children}
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    opacity: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
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