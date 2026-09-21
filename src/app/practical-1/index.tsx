import { router } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { AppTextInput, Button } from '@/components/common';
import styles from '@/pages/practical-1/auth/login/login.style';

interface LoginForm {
  email: string;
  password: string;
}
interface LoginErrors {
  email?: string;
  password?: string;
}

export default function LoginScreen() {
  const [form, setForm] = useState<LoginForm>({ email: '', password: '' });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: LoginErrors = {};
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/practical-1/(tabs)/dashboard');
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
        <Text style={styles.emoji}>👋</Text>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <AppTextInput
          label="Email Address"
          value={form.email}
          onChangeText={text => {
            setForm(f => ({ ...f, email: text }));
            if (errors.email) setErrors(e => ({ ...e, email: undefined }));
          }}
          placeholder="you@example.com"
          error={errors.email}
          keyboardType="email-address"
          autoComplete="email"
        />
        <AppTextInput
          label="Password"
          value={form.password}
          onChangeText={text => {
            setForm(f => ({ ...f, password: text }));
            if (errors.password)
              setErrors(e => ({ ...e, password: undefined }));
          }}
          placeholder="••••••••"
          error={errors.password}
          secureTextEntry
        />

        {/* Forgot Password */}
        <TouchableOpacity
          style={styles.forgotBtn}
          onPress={() => router.push('/practical-1/forgot-password')}
        >
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <Button label="Sign In" onPress={handleLogin} loading={loading} />

        {/* Divider */}
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Signup Link */}
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => router.push('/practical-1/signup')}
        >
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={styles.signupLink}>Create one</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
