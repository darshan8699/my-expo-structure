import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { DEMOS } from '@/pages/practical-2/dashboard/p2-dashboard.data';
import styles from '@/pages/practical-2/dashboard/p2-dashboard.style';
import type { DemoItem } from '@/pages/practical-2/dashboard/p2-dashboard.type';

export default function P2DashboardScreen() {
  const handlePress = (item: DemoItem) => {
    router.push(item.route as any);
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.intro}>
        Explore nine state management and API patterns, each in its own demo
        screen. Tap a card to dive in.
      </Text>

      {DEMOS.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => handlePress(item)}
        >
          <View style={[styles.iconBox, { backgroundColor: item.color + '20' }]}>
            <Text style={styles.emoji}>{item.emoji}</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.description}</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: item.color + '15' }]}>
            <Text style={[styles.badgeText, { color: item.color }]}>›</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
