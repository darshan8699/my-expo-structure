import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

export default function FeaturesDemoScreen() {
    const [authStatus, setAuthStatus] = useState<string | null>(null)
    const [pdfStatus, setPdfStatus] = useState<string | null>(null)

    const handleAuthenticate = () => {
        // Biometrics trigger simulation
        Alert.alert('Touch ID / Face ID', 'Authentication Required. Verify your identity with biometrics.', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Authenticate',
                onPress: () => {
                    setAuthStatus('Authentication Succeeded ✅')
                },
            },
        ])
    }

    const handleCreatePDF = () => {
        setPdfStatus('Generating PDF Document...')
        setTimeout(() => {
            setPdfStatus('PDF Created: location_report_2026.pdf (142 KB) 📄')
            Alert.alert('PDF Generated', 'Your location telemetry PDF report has been generated successfully.')
        }, 800)
    }

    // Chart mock data points
    const points = [20, 45, 28, 80, 99, 43, 65]
    const maxVal = Math.max(...points)

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>Charts, PDF & Biometrics</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Bezier Chart Card */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Telemetry Speed & Altitude Trend</Text>
                    <Text style={styles.cardSubtitle}>Bezier curve data points (km/h)</Text>

                    {/* Pure Visual SVG/Flex Bezier Line Chart */}
                    <View style={styles.chartContainer}>
                        <View style={styles.chartBars}>
                            {points.map((val, idx) => {
                                const heightPercent = (val / maxVal) * 80 + 10
                                return (
                                    <View key={idx} style={styles.barCol}>
                                        <Text style={styles.barVal}>{val}</Text>
                                        <View style={[styles.barFill, { height: `${heightPercent}%` }]} />
                                        <Text style={styles.barLabel}>{`T+${idx * 5}`}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>

                {/* Touch ID / Biometrics Section */}
                <View style={styles.card}>
                    <View style={styles.cardHeaderRow}>
                        <Ionicons name="finger-print" size={28} color="#e00606" />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={styles.cardTitle}>Biometric Authentication</Text>
                            <Text style={styles.cardSubtitle}>Touch ID / Face ID Scanner</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.actionButton} onPress={handleAuthenticate} activeOpacity={0.8}>
                        <Text style={styles.actionBtnText}>Authenticate with Touch ID</Text>
                    </TouchableOpacity>

                    {authStatus && <Text style={styles.statusSuccess}>{authStatus}</Text>}
                </View>

                {/* HTML to PDF Section */}
                <View style={styles.card}>
                    <View style={styles.cardHeaderRow}>
                        <Feather name="file-text" size={26} color="#4285f4" />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={styles.cardTitle}>PDF Report Generator</Text>
                            <Text style={styles.cardSubtitle}>HTML to PDF export module</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={[styles.actionButton, { backgroundColor: '#4285f4' }]}
                        onPress={handleCreatePDF}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.actionBtnText}>Create PDF Report</Text>
                    </TouchableOpacity>

                    {pdfStatus && <Text style={styles.statusPdf}>{pdfStatus}</Text>}
                </View>

                {/* WebView Preview Box */}
                <View style={styles.card}>
                    <View style={styles.cardHeaderRow}>
                        <MaterialCommunityIcons name="web" size={26} color="#673ab7" />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Text style={styles.cardTitle}>Embedded Web View</Text>
                            <Text style={styles.cardSubtitle}>Source: https://infinite.red</Text>
                        </View>
                    </View>

                    <View style={styles.webPreviewBox}>
                        <Text style={styles.webHead}>🌐 Infinite Red React Native Docs</Text>
                        <Text style={styles.webBody}>Connected successfully · HTML content rendering enabled.</Text>
                    </View>
                </View>
            </ScrollView>
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
    scrollContent: {
        padding: 16,
        paddingBottom: 40,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 14,
        padding: 18,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 5,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111827',
    },
    cardSubtitle: {
        fontSize: 13,
        color: '#6b7280',
        marginTop: 2,
    },
    cardHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14,
    },
    chartContainer: {
        height: 160,
        backgroundColor: '#1f2937',
        borderRadius: 12,
        padding: 12,
        marginTop: 14,
        justifyContent: 'flex-end',
    },
    chartBars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 120,
    },
    barCol: {
        alignItems: 'center',
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end',
    },
    barVal: {
        color: '#9ca3af',
        fontSize: 10,
        marginBottom: 4,
    },
    barFill: {
        width: 18,
        backgroundColor: '#ffa726',
        borderRadius: 4,
    },
    barLabel: {
        color: '#6b7280',
        fontSize: 9,
        marginTop: 4,
    },
    actionButton: {
        backgroundColor: '#e00606',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 8,
    },
    actionBtnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    statusSuccess: {
        marginTop: 10,
        color: '#16a34a',
        fontWeight: '600',
        fontSize: 13,
    },
    statusPdf: {
        marginTop: 10,
        color: '#2563eb',
        fontWeight: '600',
        fontSize: 13,
    },
    webPreviewBox: {
        backgroundColor: '#faf5ff',
        borderRadius: 10,
        padding: 14,
        borderWidth: 1,
        borderColor: '#e9d5ff',
    },
    webHead: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#581c87',
    },
    webBody: {
        fontSize: 12,
        color: '#7e22ce',
        marginTop: 4,
    },
})
