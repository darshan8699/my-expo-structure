import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { AppTextInput, Button } from '@/components/common';
import styles from '@/pages/practical-1/auth/forgot-password/forgot-password.style';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError('Enter a valid email address');
      return false;
    }
    setEmailError(undefined);
    return true;
  };

  const handleSend = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.emoji}>{sent ? '✅' : '🔑'}</Text>
        <Text style={styles.title}>
          {sent ? 'Email Sent!' : 'Forgot Password?'}
        </Text>
        <Text style={styles.subtitle}>
          {sent
            ? `We've sent a reset link to ${email}. Check your inbox.`
            : "Enter your email and we'll send you a reset link."}
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {!sent ? (
          <>
            <AppTextInput
              label="Email Address"
              value={email}
              onChangeText={text => {
                setEmail(text);
                if (emailError) setEmailError(undefined);
              }}
              placeholder="you@example.com"
              error={emailError}
              keyboardType="email-address"
              autoComplete="email"
            />
            <Button
              label="Send Reset Link"
              onPress={handleSend}
              loading={loading}
            />
          </>
        ) : (
          <Button
            label="Back to Login"
            onPress={() => router.back()}
            variant="outline"
          />
        )}
      </View>
    </ScrollView>
  );
}
