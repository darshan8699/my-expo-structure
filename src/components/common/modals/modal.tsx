import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../button/button';
import type { AppModalProps } from './modal.type';
import styles from './modal.style';

const AppModal: React.FC<AppModalProps> = ({
  visible,
  onClose,
  title,
  children,
  primaryButtonText,
  onPrimaryPress,
  secondaryButtonText,
  onSecondaryPress,
  containerStyle,
  testID,
}) => {
  return (
    <Modal
      testID={testID}
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback testID="modal-backdrop" onPress={onClose}>
          <View style={styles.backdropTouchable} />
        </TouchableWithoutFeedback>

        <View style={[styles.modalContainer, containerStyle]}>
          {!!title && (
            <View style={styles.header}>
              <Text testID="modal-title" style={styles.title}>
                {title}
              </Text>
              <TouchableOpacity
                testID="modal-close-button"
                style={styles.closeBtn}
                onPress={onClose}
              >
                <Text style={styles.closeIcon}>✕</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.content}>{children}</View>

          {(primaryButtonText || secondaryButtonText) && (
            <View style={styles.actions}>
              {secondaryButtonText && (
                <View style={styles.btn}>
                  <Button
                    label={secondaryButtonText}
                    variant="outline"
                    onPress={onSecondaryPress || onClose}
                  />
                </View>
              )}
              {primaryButtonText && (
                <View style={styles.btn}>
                  <Button
                    label={primaryButtonText}
                    variant="primary"
                    onPress={onPrimaryPress || onClose}
                  />
                </View>
              )}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;
