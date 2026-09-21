import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { AppTextInput, Button } from '@/components/common';
import styles from '@/pages/practical-1/auth/signup/signup.style';

interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignupScreen() {
  const [form, setForm] = useState<SignupForm>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<SignupErrors>({});
  const [loading, setLoading] = useState(false);

  const setField = (key: keyof SignupForm, value: string) => {
    setForm(f => ({ ...f, [key]: value }));
    if (errors[key]) setErrors(e => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: SignupErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!form.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Account Created! 🎉',
        'Welcome! Redirecting to dashboard...',
        [
          {
            text: 'OK',
            onPress: () => {
              router.replace('/practical-1/(tabs)/dashboard');
            },
          },
        ],
      );
    }, 500);
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.emoji}>🚀</Text>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <AppTextInput
          label="Full Name"
          value={form.name}
          onChangeText={text => setField('name', text)}
          placeholder="John Doe"
          error={errors.name}
          autoCapitalize="words"
          autoComplete="name"
        />
        <AppTextInput
          label="Email Address"
          value={form.email}
          onChangeText={text => setField('email', text)}
          placeholder="you@example.com"
          error={errors.email}
          keyboardType="email-address"
          autoComplete="email"
        />
        <AppTextInput
          label="Password"
          value={form.password}
          onChangeText={text => setField('password', text)}
          placeholder="Min 6 characters"
          error={errors.password}
          secureTextEntry
        />
        <AppTextInput
          label="Confirm Password"
          value={form.confirmPassword}
          onChangeText={text => setField('confirmPassword', text)}
          placeholder="Re-enter password"
          error={errors.confirmPassword}
          secureTextEntry
        />

        <Button
          label="Create Account"
          onPress={handleSignup}
          loading={loading}
        />

        {/* Login Link */}
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => router.back()}
        >
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Text style={styles.loginLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
