import { StyleSheet } from 'react-native';
import {
  Colors,
  BorderRadius,
  FontFamily,
  FontSize,
  Spacing,
  verticalScale,
} from '@/common/theme';

const styles = StyleSheet.create({
  base: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: verticalScale(44),
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  outline: {
    backgroundColor: Colors.transparent,
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  ghost: {
    backgroundColor: Colors.transparent,
  },
  sizeSm: {
    paddingVertical: Spacing.xs + 2,
    paddingHorizontal: Spacing.sm,
    minHeight: verticalScale(34),
  },
  sizeMd: {
    paddingVertical: Spacing.sm + 4,
    paddingHorizontal: Spacing.lg,
    minHeight: verticalScale(44),
  },
  sizeLg: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    minHeight: verticalScale(52),
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: Colors.white,
    fontSize: FontSize.md,
    fontFamily: FontFamily.semiBold,
  },
  outlineLabel: {
    color: Colors.primary,
  },
  ghostLabel: {
    color: Colors.primary,
  },
  labelSm: {
    fontSize: FontSize.sm,
  },
  labelMd: {
    fontSize: FontSize.md,
  },
  labelLg: {
    fontSize: FontSize.lg,
  },
});

export default styles;
