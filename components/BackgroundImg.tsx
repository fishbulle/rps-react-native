import { ImageBackground, SafeAreaView, StyleSheet } from "react-native"

interface Props {
    children: any
}

export const Background = ({ children }: Props) => {
     return (
         <SafeAreaView style={styles.container}>
         <ImageBackground source={require('../assets/sky.jpg')} style={styles.image} resizeMode="cover">
            {children}
         </ImageBackground>
         </SafeAreaView>
     )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    }
})