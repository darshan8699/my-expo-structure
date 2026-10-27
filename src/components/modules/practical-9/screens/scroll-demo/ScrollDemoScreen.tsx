import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width: windowWidth } = Dimensions.get('window')

export default function ScrollDemoScreen() {
    const [pageIndex, setPageIndex] = useState(0)

    const handleScroll = (event: any) => {
        const xOffset = event.nativeEvent.contentOffset.x
        const currentIdx = Math.round(xOffset / windowWidth)
        setPageIndex(currentIdx)
    }

    const pages = [
        {
            title: 'Welcome Screen',
            desc: 'Horizontal paging with smooth snap interval and viewport boundaries.',
            bg: '#2c3e50',
            emoji: '📱',
        },
        {
            title: 'Live Tracking Feed',
            desc: 'Real-time telemetry and PubNub stream synchronization.',
            bg: '#1bce8d',
            emoji: '🛰️',
        },
        {
            title: 'Interactive Maps',
            desc: 'Smooth coordinate transitions and heading calculations.',
            bg: '#4285f4',
            emoji: '🗺️',
        },
        {
            title: 'Analytics & Insights',
            desc: 'Export trip reports directly to PDF and encrypted stores.',
            bg: '#8e44ad',
            emoji: '📊',
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>Horizontal Scroll Snap</Text>
                </TouchableOpacity>
                <Text style={styles.indicatorText}>
                    {pageIndex + 1} / {pages.length}
                </Text>
            </View>

            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                snapToInterval={windowWidth}
                decelerationRate="fast"
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {pages.map((p, idx) => (
                    <View key={idx} style={[styles.page, { backgroundColor: p.bg }]}>
                        <Text style={styles.emoji}>{p.emoji}</Text>
                        <Text style={styles.pageTitle}>{p.title}</Text>
                        <Text style={styles.pageDesc}>{p.desc}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Paging Dots */}
            <View style={styles.dotsContainer}>
                {pages.map((_, idx) => (
                    <View key={idx} style={[styles.dot, pageIndex === idx && styles.dotActive]} />
                ))}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    header: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        backgroundColor: 'rgba(0,0,0,0.2)',
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
    indicatorText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    page: {
        width: windowWidth,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    emoji: {
        fontSize: 64,
        marginBottom: 20,
    },
    pageTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 12,
    },
    pageDesc: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.85)',
        textAlign: 'center',
        lineHeight: 24,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.4)',
        marginHorizontal: 5,
    },
    dotActive: {
        width: 22,
        backgroundColor: '#ffffff',
    },
})
