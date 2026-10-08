import { BorderRadius, Colors, FontFamily, FontSize, Spacing } from '@/utils/common/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: Spacing.lg,
    },
    title: {
        fontSize: FontSize.xxl,
        fontFamily: FontFamily.bold,
        color: Colors.text,
    },
    subtitle: {
        fontSize: FontSize.sm,
        fontFamily: FontFamily.regular,
        color: Colors.textMuted,
        marginBottom: Spacing.xl,
    },
    infoCard: {
        backgroundColor: Colors.surface,
        padding: Spacing.md,
        borderRadius: BorderRadius.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    infoTitle: {
        fontSize: FontSize.lg,
        fontFamily: FontFamily.semiBold,
        color: Colors.text,
    },
    infoSub: {
        fontSize: FontSize.sm,
        color: Colors.textMuted,
        marginTop: Spacing.xs,
    },
    actions: {
        marginTop: Spacing.xl,
        gap: Spacing.md,
    },
})

export default styles
