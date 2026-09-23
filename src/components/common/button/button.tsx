import React from 'react'
import { Pressable, Text, ActivityIndicator } from 'react-native'
import { Colors } from '@/common/theme'
import type { ButtonProps } from './button.type'
import styles from './button.style'

const Button: React.FC<ButtonProps> = ({
    label,
    onPress,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    style,
    labelStyle,
    testID,
}) => {
    const isOutline = variant === 'outline'
    const isSecondary = variant === 'secondary'
    const isGhost = variant === 'ghost'

    return (
        <Pressable
            testID={testID}
            onPress={onPress}
            disabled={disabled || loading}
            style={[
                styles.base,
                size === 'sm' && styles.sizeSm,
                size === 'lg' && styles.sizeLg,
                isOutline && styles.outline,
                isSecondary && styles.secondary,
                isGhost && styles.ghost,
                (disabled || loading) && styles.disabled,
                style,
            ]}
        >
            {loading ? (
                <ActivityIndicator
                    testID="button-loading-indicator"
                    color={isOutline || isGhost ? Colors.primary : Colors.white}
                />
            ) : (
                <Text
                    style={[
                        styles.label,
                        size === 'sm' && styles.labelSm,
                        size === 'lg' && styles.labelLg,
                        (isOutline || isGhost) && styles.outlineLabel,
                        labelStyle,
                    ]}
                >
                    {label}
                </Text>
            )}
        </Pressable>
    )
}

export default Button
