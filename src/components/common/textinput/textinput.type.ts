import type {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

export interface AppTextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoComplete?: any;
  onBlur?: (e: NativeSyntheticEvent<any>) => void;
  onFocus?: (e: NativeSyntheticEvent<any>) => void;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  testID?: string;
}
