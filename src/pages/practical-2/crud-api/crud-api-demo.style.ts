import { StyleSheet } from 'react-native';
import { Colors, BorderRadius, FontFamily, FontSize, Spacing } from '@/common/theme';

const C = '#22C55E';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: Spacing.lg },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.md },
  sectionTitle: { fontSize: FontSize.lg, fontFamily: FontFamily.semiBold, color: Colors.text },
  createBtn: { backgroundColor: C, paddingHorizontal: Spacing.md, paddingVertical: Spacing.xs, borderRadius: BorderRadius.md },
  createBtnText: { fontSize: FontSize.sm, fontFamily: FontFamily.semiBold, color: '#fff' },
  postCard: { backgroundColor: Colors.surface, borderRadius: BorderRadius.md, padding: Spacing.md, marginBottom: Spacing.sm, borderWidth: 1, borderColor: Colors.border },
  postId: { fontSize: FontSize.xs, fontFamily: FontFamily.semiBold, color: C, marginBottom: 2 },
  postTitle: { fontSize: FontSize.sm, fontFamily: FontFamily.medium, color: Colors.text, marginBottom: Spacing.sm },
  postActions: { flexDirection: 'row', gap: Spacing.sm },
  editBtn: { backgroundColor: '#FEF3C7', paddingHorizontal: Spacing.sm, paddingVertical: 4, borderRadius: BorderRadius.sm },
  editBtnText: { fontSize: FontSize.xs, fontFamily: FontFamily.medium, color: '#D97706' },
  deleteBtn: { backgroundColor: '#FEE2E2', paddingHorizontal: Spacing.sm, paddingVertical: 4, borderRadius: BorderRadius.sm },
  deleteBtnText: { fontSize: FontSize.xs, fontFamily: FontFamily.medium, color: Colors.error },
  codeBox: { backgroundColor: '#1A1A2E', borderRadius: BorderRadius.md, padding: Spacing.md, marginTop: Spacing.sm },
  codeTitle: { fontSize: FontSize.xs, fontFamily: FontFamily.semiBold, color: C, marginBottom: Spacing.xs },
  code: { fontSize: FontSize.xs, fontFamily: FontFamily.regular, color: '#A5B4FC', lineHeight: 20 },
  modalOverlay: { flex: 1, backgroundColor: '#00000080', justifyContent: 'flex-end' },
  modalCard: { backgroundColor: Colors.surface, borderTopLeftRadius: BorderRadius.lg, borderTopRightRadius: BorderRadius.lg, padding: Spacing.lg },
  modalTitle: { fontSize: FontSize.lg, fontFamily: FontFamily.bold, color: Colors.text, marginBottom: Spacing.md },
  modalInput: { borderWidth: 1.5, borderColor: Colors.border, borderRadius: BorderRadius.md, padding: Spacing.md, fontSize: FontSize.md, color: Colors.text, marginBottom: Spacing.md },
  modalActions: { flexDirection: 'row', gap: Spacing.sm },
  modalBtn: { flex: 1, padding: Spacing.md, borderRadius: BorderRadius.md, alignItems: 'center' },
  cancelBtn: { backgroundColor: Colors.background },
  cancelBtnText: { fontSize: FontSize.sm, fontFamily: FontFamily.medium, color: Colors.textMuted },
  submitBtn: { backgroundColor: C },
  submitBtnText: { fontSize: FontSize.sm, fontFamily: FontFamily.semiBold, color: '#fff' },
});

export default styles;
