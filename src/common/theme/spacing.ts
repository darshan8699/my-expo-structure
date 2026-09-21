import { moderateScale } from './responsive';

export const Spacing = {
  xs: moderateScale(4),
  sm: moderateScale(8),
  md: moderateScale(16),
  lg: moderateScale(24),
  xl: moderateScale(32),
  xxl: moderateScale(48),
} as const;

export type SpacingType = typeof Spacing;
export type SpacingKey = keyof typeof Spacing;
