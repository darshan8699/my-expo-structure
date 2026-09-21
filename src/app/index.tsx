import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { router } from 'expo-router';
import { AppTextInput } from '@/components/common';
import { Colors } from '@/common/theme';
import type { PracticalItem } from '@/pages/home/home.type';
import { PRACTICALS, PAGE_SIZE } from '@/pages/home/home.data';
import styles from '@/pages/home/home.style';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Filter practicals by search input
  const filteredPracticals = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return PRACTICALS;

    return PRACTICALS.filter(
      item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  // Paginated items to display
  const displayedPracticals = useMemo(() => {
    return filteredPracticals.slice(0, page * PAGE_SIZE);
  }, [filteredPracticals, page]);

  const hasMore = displayedPracticals.length < filteredPracticals.length;

  // Reset pagination on search
  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    setPage(1);
  };

  // Load next page on scroll down
  const handleEndReached = () => {
    if (!hasMore || isLoadingMore) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      setPage(prev => prev + 1);
      setIsLoadingMore(false);
    }, 400);
  };

  // Card click handler
  const handlePress = (item: PracticalItem) => {
    if (item.route) {
      router.push(item.route as any);
    } else {
      Alert.alert(
        `${item.title} 🚀`,
        `${item.description}\n\nThis practical module is coming soon!`,
      );
    }
  };

  const renderItem = ({ item }: { item: PracticalItem }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => handlePress(item)}
    >
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          {item.comingSoon && (
            <View style={styles.badgeComingSoon}>
              <Text style={styles.badgeTextComingSoon}>Coming Soon</Text>
            </View>
          )}
        </View>
        <Text style={styles.cardDesc}>{item.description}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header with Search */}
        <View style={styles.header}>
          <Text style={styles.heading}>Practicals</Text>
          <Text style={styles.subheading}>
            Tap a practical to explore its concepts and screens.
          </Text>

          <AppTextInput
            placeholder="Search practicals by title, topic..."
            value={searchQuery}
            onChangeText={handleSearchChange}
            style={styles.searchWrapper}
          />
        </View>

        {/* Clean FlatList with On-Scroll Pagination */}
        <FlatList
          data={displayedPracticals}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            isLoadingMore ? (
              <View style={styles.loadingFooter}>
                <ActivityIndicator size="small" color={Colors.primary} />
              </View>
            ) : !hasMore && displayedPracticals.length > 0 ? (
              <View style={styles.endFooter}>
                <Text style={styles.endFooterText}>
                  More practicals coming soon…
                </Text>
              </View>
            ) : undefined
          }
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyEmoji}>🔍</Text>
              <Text style={styles.emptyTitle}>No practicals found</Text>
              <Text style={styles.emptySubtitle}>
                Try searching for a different keyword.
              </Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
