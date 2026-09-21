import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { AppTextInput, Button } from '@/components/common';
import { useDrawer } from '@/services/context/drawer-context';
import CustomDrawer from '@/components/modules/custom-drawer/custom-drawer';
import { styles } from '@/pages/practical-3/dashboard/dashboard.style';

const parseInputNumber = (val: string, fallback: number): number => {
  const n = parseInt(val, 10);
  return isNaN(n) ? fallback : n;
};

export default function P3DashboardScreen() {
  const { openDrawer } = useDrawer();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | undefined>();

  const handleInputChange = (text: string) => {
    setInputValue(text.replace(/[^0-9]/g, ''));
    setError(undefined);
  };

  const handleQuickSelect = (num: number) => {
    setInputValue(num.toString());
    setError(undefined);
  };

  const handleGenerate = () => {
    const n = parseInputNumber(inputValue, 0);
    if (!inputValue || n < 1 || n > 10) {
      setError('Please enter a number between 1 and 10');
      return;
    }
    router.push({ pathname: '/practical-3/detail', params: { count: n.toString() } });
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Custom Drawer overlay */}
      <CustomDrawer />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.headerButton} onPress={openDrawer}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} activeOpacity={0.7}>
            <Text style={styles.headerIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Dashboard</Text>
        </View>
        <TouchableOpacity style={styles.homeButton} onPress={handleBackToHome}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} activeOpacity={0.7}>
          <Text style={styles.homeButtonText}>← App Home</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag" showsVerticalScrollIndicator={false}>
        {/* Cube Generator Card */}
        <View style={styles.card}>
          <View style={styles.cardBadge}>
            <Text style={styles.cardBadgeText}>Dynamic Cube Demo</Text>
          </View>
          <Text style={styles.title}>Box Grid Generator</Text>
          <Text style={styles.subtitle}>
            Enter a number (N) to generate an interactive grid with{' '}
            {inputValue || '0'}² ={' '}
            {Math.pow(parseInputNumber(inputValue, 0), 2)} interactive color-cycling boxes.
          </Text>
          <View style={styles.inputSection}>
            <AppTextInput
              label="Enter Number (N):"
              value={inputValue}
              onChangeText={handleInputChange}
              placeholder="e.g. 4, 3, 5"
              keyboardType="number-pad"
              error={error}
            />
          </View>
          <View style={styles.quickSelectContainer}>
            <Text style={styles.quickSelectLabel}>Quick Select:</Text>
            <View style={styles.quickRow}>
              {[2, 3, 4, 5, 6].map(num => {
                const isActive = inputValue === num.toString();
                return (
                  <TouchableOpacity key={num}
                    style={[styles.quickChip, isActive && styles.quickChipActive]}
                    onPress={() => handleQuickSelect(num)}>
                    <Text style={[styles.quickChipText, isActive && styles.quickChipTextActive]}>{num}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <Button label="Generate Boxes & Go to Details" onPress={handleGenerate} variant="primary" size="lg" style={styles.submitButton} />
        </View>

        {/* Info Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoCardTitle}>Practical 3 Overview</Text>
          <View style={styles.infoCardRow}>
            <Text style={styles.infoCardBullet}>•</Text>
            <Text style={styles.infoCardText}>Left Drawer: Tap ☰ to open custom drawer with Screen 1, 2, 3.</Text>
          </View>
          <View style={styles.infoCardRow}>
            <Text style={styles.infoCardBullet}>•</Text>
            <Text style={styles.infoCardText}>Bottom Tabs: Easily toggle between Dashboard and Settings.</Text>
          </View>
          <View style={styles.infoCardRow}>
            <Text style={styles.infoCardBullet}>•</Text>
            <Text style={styles.infoCardText}>Details Grid: Tap any box to cycle colors (Default → Indigo → Emerald).</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
