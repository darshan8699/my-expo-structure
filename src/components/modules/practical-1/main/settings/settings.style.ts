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
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.surface,
        padding: Spacing.md,
        borderRadius: BorderRadius.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    mt: {
        marginTop: Spacing.sm,
    },
    itemText: {
        fontSize: FontSize.md,
        fontFamily: FontFamily.medium,
        color: Colors.text,
    },
    itemVal: {
        fontSize: FontSize.md,
        color: Colors.textMuted,
    },
})

export default styles
