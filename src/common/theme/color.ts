export const Colors = {
  primary: '#6C63FF',
  primaryDark: '#534BD6',
  primaryLight: '#8B84FF',
  secondary: '#FF6584',
  background: '#F9F9F9',
  surface: '#FFFFFF',
  text: '#1A1A2E',
  textMuted: '#6B7280',
  textSecondary: '#9CA3AF',
  border: '#E5E7EB',
  error: '#EF4444',
  errorLight: '#FEE2E2',
  success: '#22C55E',
  successLight: '#DCFCE7',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  card: '#FFFFFF',
  cardAlt: '#F3F4F6',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  overlay: 'rgba(0, 0, 0, 0.5)',
} as const;

export type ColorType = typeof Colors;
export type ColorKey = keyof typeof Colors;
