import { rf } from './responsive';

export const FontSize = {
  xs: rf(12),
  sm: rf(14),
  md: rf(16),
  lg: rf(18),
  xl: rf(22),
  xxl: rf(28),
  display: rf(36),
} as const;

export type FontSizeType = typeof FontSize;
export type FontSizeKey = keyof typeof FontSize;
