import { Colors, FontSize, Spacing, verticalScale } from '@/utils/common/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: Colors.surface },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.lg,
        paddingVertical: verticalScale(10),
        minHeight: verticalScale(54),
        backgroundColor: Colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    headerLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
    headerButton: { padding: Spacing.sm },
    headerIcon: { fontSize: FontSize.xxl, color: Colors.text, fontWeight: '700' },
    headerTitle: { fontSize: FontSize.lg, fontWeight: '700', color: Colors.text },
    headerRightPlaceholder: { width: 32 },
    blankContainer: { flex: 1, backgroundColor: Colors.background },
})

export default styles
