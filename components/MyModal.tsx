import { useState } from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import { MyButton } from './MyButton'

interface Props {
    children: any
}

export const MyModal = ({ children }: Props) => {
    const [modalVisible, setModalVisible] = useState(true)

    return (
        <Modal
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}>
            <View style={styles.container}>
                <View>
                    {children}
                </View>
                <MyButton
                    text='Close'
                    onPress={() => setModalVisible(!modalVisible)} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 100,
        marginTop: 100
    }
})