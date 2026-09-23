import { StyleSheet } from 'react-native'
import { Colors, FontFamily, FontSize } from '@/common/theme'

const styles = StyleSheet.create({
    base: {
        fontFamily: FontFamily.regular,
        fontSize: FontSize.md,
        color: Colors.text,
    },
    display: {
        fontSize: FontSize.display,
        fontFamily: FontFamily.bold,
    },
    h1: {
        fontSize: FontSize.xxl,
        fontFamily: FontFamily.bold,
    },
    h2: {
        fontSize: FontSize.xl,
        fontFamily: FontFamily.bold,
    },
    h3: {
        fontSize: FontSize.lg,
        fontFamily: FontFamily.semiBold,
    },
    body: {
        fontSize: FontSize.md,
        fontFamily: FontFamily.regular,
    },
    bodySm: {
        fontSize: FontSize.sm,
        fontFamily: FontFamily.regular,
    },
    caption: {
        fontSize: FontSize.xs,
        fontFamily: FontFamily.regular,
        color: Colors.textMuted,
    },
    label: {
        fontSize: FontSize.sm,
        fontFamily: FontFamily.medium,
        color: Colors.text,
    },
    error: {
        fontSize: FontSize.xs,
        fontFamily: FontFamily.regular,
        color: Colors.error,
    },
    weightRegular: {
        fontFamily: FontFamily.regular,
    },
    weightMedium: {
        fontFamily: FontFamily.medium,
    },
    weightSemiBold: {
        fontFamily: FontFamily.semiBold,
    },
    weightBold: {
        fontFamily: FontFamily.bold,
    },
})

export default styles
