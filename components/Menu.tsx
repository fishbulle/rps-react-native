import { SafeAreaView, View, Text, StyleSheet } from "react-native"

export function Menu() {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>What do you want to do?</Text>
            </View>
            {/* länkar till starta nytt spel eller joina öppet spel */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3dfd5',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 30
    },
    text: {
        fontSize: 25,
        color: '#571d0b',
        textAlign: 'center',
        paddingBottom: 40
    }
})