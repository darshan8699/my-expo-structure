import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { height, totalSize } from '../../utils/dimension'

interface ButtonProps {
    title: string
    onPress: () => void
    color?: string
}

export const Button: React.FC<ButtonProps> = ({ title, onPress, color = '#4284f4' }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress} activeOpacity={0.8}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        alignSelf: 'center',
        paddingVertical: height(1.8),
        borderRadius: height(1.5),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#4284f4',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 4,
    },
    text: {
        color: '#ffffff',
        fontSize: totalSize(2),
        fontWeight: 'bold',
    },
})

export default Button
