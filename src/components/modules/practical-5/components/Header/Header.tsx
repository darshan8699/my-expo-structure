import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Style from './Style'

interface HeaderProps {
    text: string
    onBack?: () => void
}

const { container, nametext, backButton, backText } = Style

const Header: React.FC<HeaderProps> = ({ text, onBack }) => {
    return (
        <View style={container}>
            {onBack ? (
                <TouchableOpacity onPress={onBack} style={backButton}>
                    <Text style={backText}>←</Text>
                </TouchableOpacity>
            ) : null}
            <Text style={nametext}>{text}</Text>
        </View>
    )
}

export default Header
