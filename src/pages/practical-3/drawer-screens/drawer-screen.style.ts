import { StyleSheet } from 'react-native';
import { Colors, Spacing, FontSize, BorderRadius, verticalScale } from '@/common/theme';

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.surface },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg, paddingVertical: verticalScale(10),
    minHeight: verticalScale(54), backgroundColor: Colors.surface,
    borderBottomWidth: 1, borderBottomColor: Colors.border,
  },
  headerButton: { padding: Spacing.sm, borderRadius: BorderRadius.sm },
  headerIcon: { fontSize: FontSize.xxl, color: Colors.text, fontWeight: '700' },
  headerTitle: { fontSize: FontSize.lg, fontWeight: '700', color: Colors.text },
  centerContent: {
    flex: 1, backgroundColor: Colors.background,
    justifyContent: 'center', alignItems: 'center', padding: Spacing.xl,
  },
  titleText: { fontSize: FontSize.xxl, fontWeight: '700', color: Colors.text, textAlign: 'center' },
});
