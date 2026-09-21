import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useDrawer } from '@/services/context/drawer-context';
import CustomDrawer from '@/components/modules/custom-drawer/custom-drawer';
import { styles } from '@/pages/practical-3/drawer-screens/drawer-screen.style';

export default function Screen2() {
  const { openDrawer } = useDrawer();
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <CustomDrawer />
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={openDrawer}
          hitSlop={{ top:15, bottom:15, left:15, right:15 }} activeOpacity={0.7}>
          <Text style={styles.headerIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Screen 2</Text>
        <TouchableOpacity style={styles.headerButton} onPress={() => router.replace('/practical-3/(tabs)/dashboard')}
          hitSlop={{ top:15, bottom:15, left:15, right:15 }} activeOpacity={0.7}>
          <Text style={styles.headerIcon}>✕</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.titleText}>Screen 2</Text>
      </View>
    </SafeAreaView>
  );
}
