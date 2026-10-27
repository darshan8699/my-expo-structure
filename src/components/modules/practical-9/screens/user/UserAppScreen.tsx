import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InteractiveMap } from '../../components/InteractiveMap'
import { PubNubLocationService } from '../../services/pubnubSimulator'

export default function UserAppScreen() {
    const [driverLocation, setDriverLocation] = useState(PubNubLocationService.getLastLocation())
    const [messagesCount, setMessagesCount] = useState(0)

    useEffect(() => {
        const unsubscribe = PubNubLocationService.subscribe((data) => {
            setDriverLocation(data)
            setMessagesCount((prev) => prev + 1)
        })

        return unsubscribe
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>User App</Text>
                </TouchableOpacity>
                <View style={styles.liveIndicator}>
                    <Text style={styles.liveText}>LISTENING ({messagesCount} updates)</Text>
                </View>
            </View>

            {/* Interactive Map */}
            <View style={styles.mapArea}>
                <InteractiveMap
                    latitude={driverLocation.latitude}
                    longitude={driverLocation.longitude}
                    heading={driverLocation.heading || 0}
                    isDriver={false}
                    title="User Tracking View"
                />
            </View>

            {/* Driver Status Card */}
            <View style={styles.driverCard}>
                <View style={styles.driverInfoRow}>
                    <View style={styles.avatar}>
                        <Ionicons name="person" size={26} color="#ffffff" />
                    </View>
                    <View style={styles.driverTextWrap}>
                        <Text style={styles.driverName}>Driver: Alex Johnson</Text>
                        <Text style={styles.vehicleDetails}>Toyota Prius · Black · CA-7XYZ99</Text>
                    </View>
                    <View style={styles.etaWrap}>
                        <Text style={styles.etaMinutes}>4 min</Text>
                        <Text style={styles.etaLabel}>Estimated Arrival</Text>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.footerRow}>
                    <Text style={styles.footerStatus}>
                        <Text style={{ color: '#28a745' }}>● </Text>PubNub Channel: 'location'
                    </Text>
                    <TouchableOpacity onPress={() => router.push('/practical-9/driver' as any)} activeOpacity={0.7}>
                        <Text style={styles.driverLink}>Control Driver ›</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        height: 56,
        backgroundColor: '#4285f4',
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
    liveIndicator: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    liveText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 11,
    },
    mapArea: {
        flex: 1,
    },
    driverCard: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.08,
        shadowRadius: 5,
        elevation: 6,
    },
    driverInfoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#4285f4',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    driverTextWrap: {
        flex: 1,
    },
    driverName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#111111',
    },
    vehicleDetails: {
        fontSize: 13,
        color: '#777777',
        marginTop: 2,
    },
    etaWrap: {
        alignItems: 'flex-end',
    },
    etaMinutes: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#28a745',
    },
    etaLabel: {
        fontSize: 11,
        color: '#888888',
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f0f0',
        marginVertical: 12,
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    footerStatus: {
        fontSize: 12,
        color: '#666666',
    },
    driverLink: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#4285f4',
    },
})
