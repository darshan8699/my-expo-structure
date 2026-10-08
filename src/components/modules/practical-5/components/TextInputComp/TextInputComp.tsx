import React from 'react'
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../../constants/colors'
import { height } from '../../utils/dimension'

interface TextInputCompProps {
    value?: string | null
    KeyBoardType?: KeyboardTypeOptions
    onChangeText: (text: string) => void
    validationtext?: string | null
    placeholder?: string
    invalid?: boolean | null
}

const TextInputComp: React.FC<TextInputCompProps> = ({
    value,
    KeyBoardType = 'default',
    onChangeText,
    validationtext,
    placeholder,
    invalid,
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    styles.input,
                    {
                        borderColor: invalid ? Colors.validationcolor : Colors.Header_color,
                    },
                ]}
                placeholder={placeholder}
                placeholderTextColor={Colors.placeholder}
                value={value ?? ''}
                keyboardType={KeyBoardType}
                onChangeText={onChangeText}
            />
            {invalid ? <Text style={styles.errorText}>* {validationtext}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Primary_BackgroundColor,
    },
    input: {
        backgroundColor: Colors.Primary_BackgroundColor,
        marginHorizontal: height(2),
        marginTop: height(2.5),
        height: Math.max(height(5.5), 44),
        paddingHorizontal: height(1.5),
        borderWidth: 1,
        borderRadius: height(1),
        fontSize: 15,
        color: '#111827',
    },
    errorText: {
        color: Colors.validationcolor,
        marginHorizontal: height(2.5),
        marginTop: height(0.5),
        fontSize: 12,
    },
})

export default TextInputComp
