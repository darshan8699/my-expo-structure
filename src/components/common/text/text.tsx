import React from 'react';
import { Text as RNText } from 'react-native';
import type { AppTextProps } from './text.type';
import styles from './text.style';

const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  weight,
  color,
  align,
  style,
  children,
  ...props
}) => {
  return (
    <RNText
      style={[
        styles.base,
        variant === 'display' && styles.display,
        variant === 'h1' && styles.h1,
        variant === 'h2' && styles.h2,
        variant === 'h3' && styles.h3,
        variant === 'body' && styles.body,
        variant === 'bodySm' && styles.bodySm,
        variant === 'caption' && styles.caption,
        variant === 'label' && styles.label,
        variant === 'error' && styles.error,
        weight === 'regular' && styles.weightRegular,
        weight === 'medium' && styles.weightMedium,
        weight === 'semiBold' && styles.weightSemiBold,
        weight === 'bold' && styles.weightBold,
        !!color && { color },
        !!align && { textAlign: align },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default AppText;
