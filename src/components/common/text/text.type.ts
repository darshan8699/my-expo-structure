import type {
  TextProps as RNTextProps,
  StyleProp,
  TextStyle,
} from 'react-native';

export type TextVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body'
  | 'bodySm'
  | 'caption'
  | 'label'
  | 'error';

export type TextWeight = 'regular' | 'medium' | 'semiBold' | 'bold';

export interface AppTextProps extends RNTextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}
