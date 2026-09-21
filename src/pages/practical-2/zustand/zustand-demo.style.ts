import { StyleSheet } from 'react-native';
import {
  Colors, BorderRadius, FontFamily, FontSize, Spacing,
  scale, verticalScale, rf,
} from '@/common/theme';

export const ZUSTAND_ACCENT = '#FF6B35';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: Spacing.lg },
  conceptBox: {
    backgroundColor: ZUSTAND_ACCENT + '20', borderRadius: BorderRadius.md,
    padding: Spacing.md, borderLeftWidth: 4, borderLeftColor: ZUSTAND_ACCENT, marginBottom: Spacing.lg,
  },
  conceptTitle: { fontSize: FontSize.sm, fontFamily: FontFamily.semiBold, color: ZUSTAND_ACCENT, marginBottom: Spacing.xs },
  conceptText: { fontSize: FontSize.xs, fontFamily: FontFamily.regular, color: Colors.text, lineHeight: verticalScale(20) },
  bold: { fontFamily: FontFamily.semiBold },
  counterCard: {
    backgroundColor: Colors.surface, borderRadius: BorderRadius.lg,
    padding: Spacing.xl, alignItems: 'center',
    borderWidth: 1, borderColor: Colors.border, marginBottom: Spacing.lg,
  },
  label: { fontSize: FontSize.sm, fontFamily: FontFamily.regular, color: Colors.textMuted, marginBottom: Spacing.md },
  count: { fontSize: rf(64), fontFamily: FontFamily.bold, color: ZUSTAND_ACCENT, marginBottom: Spacing.lg },
  row: { flexDirection: 'row', gap: Spacing.md },
  btn: { width: scale(56), height: scale(56), borderRadius: scale(28), alignItems: 'center', justifyContent: 'center' },
  btnPrimary: { backgroundColor: ZUSTAND_ACCENT },
  btnOutline: { backgroundColor: Colors.transparent, borderWidth: 2, borderColor: ZUSTAND_ACCENT },
  btnText: { fontSize: rf(28), color: Colors.white, fontFamily: FontFamily.bold },
  btnOutlineText: { fontSize: rf(28), color: ZUSTAND_ACCENT, fontFamily: FontFamily.bold },
  resetBtn: { marginTop: Spacing.md, padding: Spacing.sm },
  resetText: { fontSize: FontSize.sm, fontFamily: FontFamily.medium, color: Colors.textMuted },
  codeBox: { backgroundColor: '#1A1A2E', borderRadius: BorderRadius.md, padding: Spacing.md },
  codeTitle: { fontSize: FontSize.xs, fontFamily: FontFamily.semiBold, color: ZUSTAND_ACCENT, marginBottom: Spacing.xs },
  code: { fontSize: FontSize.xs, fontFamily: FontFamily.regular, color: '#A5B4FC', lineHeight: verticalScale(20) },
});

export default styles;
