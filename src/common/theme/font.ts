export const FontFamily = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

export type FontFamilyType = typeof FontFamily;
export type FontFamilyKey = keyof typeof FontFamily;
