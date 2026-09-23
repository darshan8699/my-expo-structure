import { StyleSheet } from 'react-native'
import { Colors, Spacing, FontSize, BorderRadius, scale, verticalScale } from '@/common/theme'

export const DRAWER_WIDTH = scale(280)

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        elevation: 1000,
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.5)',
    },
    drawerPanel: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: DRAWER_WIDTH,
        backgroundColor: Colors.surface,
        shadowColor: Colors.black,
        shadowOffset: { width: 4, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 16,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: Colors.primary,
        paddingTop: verticalScale(12),
        paddingBottom: verticalScale(20),
        paddingHorizontal: Spacing.lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerInfo: {
        flex: 1,
    },
    headerTitle: {
        fontSize: FontSize.lg,
        fontWeight: '700',
        color: Colors.white,
        marginBottom: verticalScale(2),
    },
    headerSubtitle: {
        fontSize: FontSize.xs,
        color: '#E0E7FF',
    },
    closeButton: {
        width: scale(32),
        height: scale(32),
        borderRadius: BorderRadius.full,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        fontSize: FontSize.md,
        color: Colors.white,
        fontWeight: '700',
    },
    sectionTitle: {
        fontSize: FontSize.xs,
        fontWeight: '700',
        color: Colors.textMuted,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        marginHorizontal: Spacing.lg,
        marginTop: verticalScale(16),
        marginBottom: verticalScale(8),
    },
    menuList: {
        flex: 1,
        paddingVertical: Spacing.sm,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(12),
        paddingHorizontal: Spacing.lg,
        marginHorizontal: Spacing.sm,
        borderRadius: BorderRadius.md,
    },
    menuItemPressed: {
        backgroundColor: Colors.primaryLight,
    },
    menuItemIcon: {
        fontSize: FontSize.lg,
        marginRight: Spacing.md,
        width: scale(26),
        textAlign: 'center',
    },
    menuItemText: {
        fontSize: FontSize.md,
        fontWeight: '600',
        color: Colors.text,
    },
    divider: {
        height: 1,
        backgroundColor: Colors.border,
        marginVertical: verticalScale(12),
        marginHorizontal: Spacing.lg,
    },
    footer: {
        padding: Spacing.lg,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        backgroundColor: Colors.surface,
    },
    footerText: {
        fontSize: FontSize.xs,
        color: Colors.textMuted,
        textAlign: 'center',
    },
})
