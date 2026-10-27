import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Practical9Item {
    id: string
    title: string
    description: string
    icon: any
    route: string
    badge: string
    badgeColor: string
}

const ITEMS: Practical9Item[] = [
    {
        id: '1',
        title: 'Driver Tracking App',
        description: 'GPS coordinate transmitter, route driving simulator, heading rotation, and PubNub publisher',
        icon: 'car-sport-outline',
        route: '/practical-9/driver',
        badge: 'TRANSMITTER',
        badgeColor: '#1bce8d',
    },
    {
        id: '2',
        title: 'User Tracking App',
        description: 'Real-time vehicle tracking receiver on PubNub location channel with live animated marker and ETA',
        icon: 'navigate-circle-outline',
        route: '/practical-9/user',
        badge: 'RECEIVER',
        badgeColor: '#4285f4',
    },
    {
        id: '3',
        title: 'Charts, Biometrics & PDF',
        description:
            'Interactive Bezier line charts, Touch ID / Face ID scanner, HTML to PDF generation, and web preview',
        icon: 'stats-chart-outline',
        route: '/practical-9/features',
        badge: 'EXTRAS',
        badgeColor: '#e00606',
    },
    {
        id: '4',
        title: 'Horizontal Scroll Demo',
        description: 'Horizontal snapping scroll container with page calculations and custom interval paging dots',
        icon: 'swap-horizontal-outline',
        route: '/practical-9/scroll-demo',
        badge: 'UI DEMO',
        badgeColor: '#8e44ad',
    },
    {
        id: '5',
        title: 'Localization Demo',
        description: 'Multi-lingual localization support switching between Hindi, Marathi, English, and French',
        icon: 'language-outline',
        route: '/practical-9/localization',
        badge: 'I18N',
        badgeColor: '#f78b1e',
    },
]

export default function Practical9Dashboard() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>Practical 9</Text>
                </TouchableOpacity>
                <Text style={styles.headerSubtitle}>Live Tracking</Text>
            </View>

            {/* Banner */}
            <View style={styles.banner}>
                <Text style={styles.bannerTitle}>Live Tracking & GPS Pub/Sub</Text>
                <Text style={styles.bannerDesc}>
                    Complete ecosystem from 'live tracking': Driver App, User App, real-time PubNub messaging, chart
                    visualizations, biometrics, PDF generation, and localization.
                </Text>
            </View>

            {/* List */}
            <FlatList
                data={ITEMS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.8}
                        onPress={() => router.push(item.route as any)}
                    >
                        <View style={styles.iconContainer}>
                            <Ionicons name={item.icon} size={28} color="#2c3e50" />
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                                <View style={[styles.badge, { backgroundColor: `${item.badgeColor}20` }]}>
                                    <Text style={[styles.badgeText, { color: item.badgeColor }]}>{item.badge}</Text>
                                </View>
                            </View>
                            <Text style={styles.cardDesc}>{item.description}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#cccccc" />
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fb',
    },
    header: {
        height: 56,
        backgroundColor: '#2c3e50',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 8,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '600',
    },
    banner: {
        backgroundColor: '#ffffff',
        padding: 16,
        marginHorizontal: 16,
        marginTop: 16,
        borderRadius: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#1bce8d',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    bannerTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#111827',
    },
    bannerDesc: {
        fontSize: 13,
        color: '#6b7280',
        marginTop: 4,
        lineHeight: 18,
    },
    listContent: {
        padding: 16,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 10,
        backgroundColor: '#f1f5f9',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    cardContent: {
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    cardDesc: {
        fontSize: 13,
        color: '#6b7280',
        lineHeight: 17,
    },
})
