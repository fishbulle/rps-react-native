import { View, Image, StyleSheet } from "react-native"

export const ImageHeader = () => {

    return (
        <View style={styles.imgHeader}>
            <Image style={styles.img} source={require('../assets/lemon.png')} />
            <Image style={styles.img} source={require('../assets/strawberry.png')} />
            <Image style={styles.img} source={require('../assets/apple.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    imgHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 60
    }
})