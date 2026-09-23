import { StyleSheet } from 'react-native'
import { Colors, BorderRadius, FontFamily, FontSize, Spacing, wp } from '@/common/theme'

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: Colors.overlay,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Spacing.lg,
    },
    backdropTouchable: {
        ...StyleSheet.absoluteFill,
    },
    modalContainer: {
        width: '100%',
        maxWidth: wp(90),
        backgroundColor: Colors.surface,
        borderRadius: BorderRadius.lg,
        padding: Spacing.lg,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.md,
    },
    title: {
        fontSize: FontSize.lg,
        fontFamily: FontFamily.bold,
        color: Colors.text,
        flex: 1,
    },
    closeBtn: {
        padding: Spacing.xs,
    },
    closeIcon: {
        fontSize: FontSize.md,
        fontFamily: FontFamily.semiBold,
        color: Colors.textMuted,
    },
    content: {
        marginBottom: Spacing.lg,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: Spacing.sm,
    },
    btn: {
        flex: 1,
    },
})

export default styles
