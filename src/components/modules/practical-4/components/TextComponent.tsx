import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

interface TextComponentProps {
    name: string
    style?: StyleProp<TextStyle>
    onPress?: () => void
}

const TextComponent: React.FC<TextComponentProps> = ({ name, style, onPress }) => {
    return (
        <Text style={style} onPress={onPress}>
            {name}
        </Text>
    )
}

export default TextComponent
