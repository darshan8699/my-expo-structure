import { Colors } from '@/utils/common/theme'
import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './textinput.style'
import type { AppTextInputProps } from './textinput.type'

const AppTextInput: React.FC<AppTextInputProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    error,
    secureTextEntry,
    keyboardType,
    autoCapitalize,
    autoComplete,
    onBlur,
    onFocus,
    style,
    inputStyle,
    testID,
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const isPassword = !!secureTextEntry

    return (
        <View style={[styles.wrapper, style]}>
            {!!label && <Text style={styles.label}>{label}</Text>}

            <View style={[styles.inputContainer, !!error && styles.inputError]}>
                <TextInput
                    testID={testID}
                    style={[styles.input, inputStyle]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.textMuted}
                    secureTextEntry={isPassword && !isVisible}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoComplete={autoComplete}
                    onBlur={onBlur}
                    onFocus={onFocus}
                />
                {isPassword && (
                    <TouchableOpacity
                        testID="textinput-password-toggle"
                        onPress={() => setIsVisible((v) => !v)}
                        style={styles.eyeBtn}
                    >
                        <Text style={styles.eyeIcon}>{isVisible ? '🙈' : '👁️'}</Text>
                    </TouchableOpacity>
                )}
            </View>
            {!!error && (
                <Text testID="textinput-error-text" style={styles.errorText}>
                    {error}
                </Text>
            )}
        </View>
    )
}

export default AppTextInput
