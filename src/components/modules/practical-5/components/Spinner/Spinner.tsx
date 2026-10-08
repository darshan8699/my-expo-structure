import React from 'react'
import { ActivityIndicator, Modal, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import Colors from '../../constants/colors'

interface SpinnerProps {
    visible?: boolean
    textContent?: string
    textStyle?: StyleProp<TextStyle>
    color?: string
}

const Spinner: React.FC<SpinnerProps> = ({ visible = false, textContent, textStyle, color = '#FFFFFF' }) => {
    if (!visible) return null

    return (
        <Modal transparent animationType="none" visible={visible} onRequestClose={() => {}}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <ActivityIndicator size="large" color={color} />
                    {textContent ? <Text style={[styles.text, textStyle]}>{textContent}</Text> : null}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 10,
        color: Colors.Primary_BackgroundColor,
        fontSize: 16,
        fontWeight: '600',
    },
})

export default Spinner
