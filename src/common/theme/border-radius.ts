import { moderateScale } from './responsive';

export const BorderRadius = {
  xs: moderateScale(2),
  sm: moderateScale(4),
  md: moderateScale(8),
  lg: moderateScale(16),
  xl: moderateScale(24),
  full: 9999,
} as const;

export type BorderRadiusType = typeof BorderRadius;
export type BorderRadiusKey = keyof typeof BorderRadius;
