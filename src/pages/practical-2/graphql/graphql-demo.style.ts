import { StyleSheet } from 'react-native'
import { Colors, BorderRadius, FontFamily, FontSize, Spacing } from '@/common/theme'

const C = '#E535AB'

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background, padding: Spacing.lg },
    conceptBox: {
        backgroundColor: C + '15',
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        borderLeftWidth: 4,
        borderLeftColor: C,
        marginBottom: Spacing.lg,
    },
    conceptTitle: { fontSize: FontSize.sm, fontFamily: FontFamily.semiBold, color: C, marginBottom: Spacing.xs },
    conceptText: { fontSize: FontSize.xs, fontFamily: FontFamily.regular, color: Colors.text, lineHeight: 20 },
    bold: { fontFamily: FontFamily.semiBold },
    fetchBtn: {
        backgroundColor: C,
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        alignItems: 'center',
        marginBottom: Spacing.lg,
    },
    fetchBtnText: { fontSize: FontSize.md, fontFamily: FontFamily.semiBold, color: '#fff' },
    continentCard: {
        backgroundColor: Colors.surface,
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        marginBottom: Spacing.sm,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    continentRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    continentName: { fontSize: FontSize.md, fontFamily: FontFamily.semiBold, color: Colors.text },
    continentCount: { fontSize: FontSize.xs, fontFamily: FontFamily.regular, color: Colors.textMuted },
    countriesList: { marginTop: Spacing.sm, paddingTop: Spacing.sm, borderTopWidth: 1, borderTopColor: Colors.border },
    countryItem: { fontSize: FontSize.xs, fontFamily: FontFamily.regular, color: Colors.text, paddingVertical: 2 },
    moreText: { fontSize: FontSize.xs, fontFamily: FontFamily.regular, color: Colors.textMuted, marginTop: 4 },
    resultHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    resultLabel: { fontSize: FontSize.sm, fontFamily: FontFamily.medium, color: Colors.text },
    refetchText: { fontSize: FontSize.sm, fontFamily: FontFamily.semiBold, color: C },
    errorText: { fontSize: FontSize.sm, color: Colors.error, textAlign: 'center', marginTop: Spacing.xl },
    codeBox: { backgroundColor: '#1A1A2E', borderRadius: BorderRadius.md, padding: Spacing.md, marginTop: Spacing.sm },
    codeTitle: { fontSize: FontSize.xs, fontFamily: FontFamily.semiBold, color: C, marginBottom: Spacing.xs },
    code: { fontSize: FontSize.xs, fontFamily: FontFamily.regular, color: '#A5B4FC', lineHeight: 20 },
})

export default styles
