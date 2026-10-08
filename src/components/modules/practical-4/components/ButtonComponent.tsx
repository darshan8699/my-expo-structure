import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Size } from '../utils/sizes'

interface ButtonComponentProps {
    text: string
    onPress: () => void
    loading?: boolean
    disabled?: boolean
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ text, onPress, loading = false, disabled = false }) => {
    return (
        <TouchableOpacity
            style={[styles.button, (loading || disabled) && styles.disabled]}
            onPress={onPress}
            disabled={loading || disabled}
            activeOpacity={0.8}
        >
            {loading ? <ActivityIndicator color="#FFFFFF" /> : <Text style={styles.buttonText}>{text}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#C42B42',
        height: Size.FindSize(54),
        width: Size.FindSize(327),
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: Size.FindSize(35),
        borderRadius: Size.FindSize(50),
    },
    buttonText: {
        fontSize: Size.FindSize(16),
        textAlign: 'center',
        color: '#FFFFFF',
    },
    disabled: {
        opacity: 0.7,
    },
})

export default ButtonComponent
