import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  primaryButtonText?: string;
  onPrimaryPress?: () => void;
  secondaryButtonText?: string;
  onSecondaryPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
}
