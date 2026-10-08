import { BorderRadius, Colors, FontFamily, FontSize, Spacing } from '@/utils/common/theme'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CONCEPT_CATEGORIES, DEMOS } from './p2-dashboard.data'
import type { ConceptItem, DemoItem } from './p2-dashboard.type'

export default function DashboardScreen() {
    const handleDemoPress = (item: DemoItem) => {
        router.push(item.route as any)
    }

    const handleConceptPress = (item: ConceptItem) => {
        router.push(`/practical-2/concepts/${item.id}` as any)
    }

    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            {/* ── Interactive Demos ───────────────────────────────────── */}
            <Text style={styles.sectionHeader}>🎮 Interactive Demos</Text>
            <Text style={styles.sectionSubtitle}>Live playgrounds — tap a card to try the pattern hands-on.</Text>

            {DEMOS.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={styles.card}
                    activeOpacity={0.8}
                    onPress={() => handleDemoPress(item)}
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

            {/* ── Concept Explorer ────────────────────────────────────── */}
            <Text style={[styles.sectionHeader, styles.sectionHeaderSpaced]}>📚 Concept Explorer</Text>
            <Text style={styles.sectionSubtitle}>Deep-dive explanations with focused examples — tap to explore.</Text>

            {CONCEPT_CATEGORIES.map((cat, catIdx) => (
                <View key={catIdx} style={styles.categorySection}>
                    <Text style={styles.categoryTitle}>{cat.title}</Text>
                    <View style={styles.conceptGrid}>
                        {cat.items.map((item) => (
                            <Pressable
                                key={item.id}
                                style={({ pressed }) => [styles.conceptCard, pressed && styles.conceptCardPressed]}
                                onPress={() => handleConceptPress(item)}
                            >
                                <View style={styles.conceptIconContainer}>
                                    <Text style={styles.conceptIcon}>{item.icon}</Text>
                                </View>
                                <View style={styles.conceptTextContainer}>
                                    <Text style={styles.conceptTitle}>{item.title}</Text>
                                    <Text style={styles.conceptSubtitle}>{item.subtitle}</Text>
                                </View>
                                <Text style={styles.arrow}>›</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    container: {
        padding: Spacing.lg,
        paddingBottom: Spacing.xxl,
    },
    sectionHeader: {
        fontSize: FontSize.lg,
        fontFamily: FontFamily.bold,
        color: Colors.text,
        marginBottom: Spacing.xs,
    },
    sectionHeaderSpaced: {
        marginTop: Spacing.xl,
    },
    sectionSubtitle: {
        fontSize: FontSize.xs,
        fontFamily: FontFamily.regular,
        color: Colors.textMuted,
        marginBottom: Spacing.md,
        lineHeight: 18,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.surface,
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        marginBottom: Spacing.sm,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    iconBox: {
        width: 48,
        height: 48,
        borderRadius: BorderRadius.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Spacing.md,
    },
    emoji: {
        fontSize: 24,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: FontSize.md,
        fontFamily: FontFamily.semiBold,
        color: Colors.text,
        marginBottom: 2,
    },
    cardDesc: {
        fontSize: FontSize.xs,
        fontFamily: FontFamily.regular,
        color: Colors.textMuted,
        lineHeight: 16,
    },
    badge: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Spacing.sm,
    },
    badgeText: {
        fontSize: 20,
        fontFamily: FontFamily.bold,
    },
    categorySection: {
        marginBottom: Spacing.lg,
    },
    categoryTitle: {
        fontSize: FontSize.sm,
        fontFamily: FontFamily.bold,
        color: Colors.text,
        marginBottom: Spacing.sm,
        marginLeft: Spacing.xs,
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    conceptGrid: {
        gap: Spacing.sm,
    },
    conceptCard: {
        flexDirection: 'row',
        backgroundColor: Colors.surface,
        borderRadius: BorderRadius.md,
        padding: Spacing.md,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 2,
    },
    conceptCardPressed: {
        backgroundColor: '#F3F4F6',
        transform: [{ scale: 0.99 }],
    },
    conceptIconContainer: {
        width: 42,
        height: 42,
        borderRadius: BorderRadius.sm + 4,
        backgroundColor: '#EEF2FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: Spacing.md,
    },
    conceptIcon: {
        fontSize: FontSize.lg,
    },
    conceptTextContainer: {
        flex: 1,
    },
    conceptTitle: {
        fontSize: FontSize.md - 1,
        fontFamily: FontFamily.bold,
        color: Colors.text,
    },
    conceptSubtitle: {
        fontSize: FontSize.xs,
        fontFamily: FontFamily.regular,
        color: Colors.textMuted,
        marginTop: 2,
    },
    arrow: {
        fontSize: FontSize.xl + 4,
        color: Colors.textMuted,
        fontFamily: FontFamily.regular,
        paddingHorizontal: Spacing.xs,
    },
})
