import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native'
import { Size } from '../utils/sizes'

interface TextInputComponentProps {
    placeHolder?: string
    LeftIcon?: string
    RightIcon?: string
    MaterialIcons?: boolean
    secureTextEntry?: boolean
    onChangeText?: (text: string) => void
    keyboardType?: KeyboardTypeOptions
    value?: string
    onRightButtonPress?: () => void
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
    placeHolder,
    LeftIcon,
    RightIcon,
    MaterialIcons: isMaterialIcon,
    secureTextEntry,
    onChangeText,
    keyboardType = 'default',
    value,
    onRightButtonPress,
    autoCapitalize,
}) => {
    return (
        <View style={styles.container}>
            {LeftIcon && isMaterialIcon ? (
                <MaterialIcons name={LeftIcon as any} size={20} style={styles.LeftIcon} />
            ) : LeftIcon ? (
                <FontAwesome5 name={LeftIcon as any} size={20} style={styles.LeftIcon} />
            ) : null}
            <TextInput
                placeholder={placeHolder}
                placeholderTextColor="#838E92"
                style={styles.input}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                value={value}
                autoCapitalize={autoCapitalize}
            />
            {RightIcon ? (
                <FontAwesome5 name={RightIcon as any} size={20} style={styles.RightIcon} onPress={onRightButtonPress} />
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Size.FindSize(58),
        marginVertical: Size.FindSize(10),
        justifyContent: 'center',
    },
    input: {
        height: Size.FindSize(58),
        backgroundColor: '#FFFFFF',
        paddingLeft: Size.FindSize(60),
        paddingRight: Size.FindSize(50),
        borderRadius: Size.FindSize(10),
        color: '#838E92',
        fontSize: Size.FindSize(14),
    },
    LeftIcon: {
        position: 'absolute',
        zIndex: 1,
        left: Size.FindSize(20),
        color: '#838E92',
    },
    RightIcon: {
        position: 'absolute',
        zIndex: 1,
        right: Size.FindSize(20),
        color: '#838E92',
    },
})

export default TextInputComponent
