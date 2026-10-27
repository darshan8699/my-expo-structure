import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useEffect, useRef, useState } from 'react'
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InteractiveMap } from '../../components/InteractiveMap'
import { PubNubLocationService } from '../../services/pubnubSimulator'

// Waypoints simulating route through city
const WAYPOINTS = [
    { latitude: 37.78825, longitude: -122.4324, heading: 45 },
    { latitude: 37.7891, longitude: -122.4312, heading: 60 },
    { latitude: 37.7905, longitude: -122.43, heading: 90 },
    { latitude: 37.7908, longitude: -122.4285, heading: 110 },
    { latitude: 37.7899, longitude: -122.427, heading: 145 },
    { latitude: 37.7885, longitude: -122.426, heading: 180 },
    { latitude: 37.7872, longitude: -122.4255, heading: 160 },
    { latitude: 37.786, longitude: -122.4248, heading: 135 },
]

export default function DriverAppScreen() {
    const [stepIndex, setStepIndex] = useState(0)
    const [isDriving, setIsDriving] = useState(false)
    const [currentCoord, setCurrentCoord] = useState(WAYPOINTS[0])
    const timerRef = useRef<any>(null)

    const publishLocation = (coord: { latitude: number; longitude: number; heading: number }) => {
        setCurrentCoord(coord)
        PubNubLocationService.publish(coord)
    }

    const nextStep = () => {
        setStepIndex((prev) => {
            const nextIdx = (prev + 1) % WAYPOINTS.length
            publishLocation(WAYPOINTS[nextIdx])
            return nextIdx
        })
    }

    const toggleDrivingSimulation = () => {
        if (isDriving) {
            if (timerRef.current) clearInterval(timerRef.current)
            setIsDriving(false)
        } else {
            setIsDriving(true)
            timerRef.current = setInterval(() => {
                nextStep()
            }, 1200)
        }
    }

    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Navigation Bar */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>Driver App</Text>
                </TouchableOpacity>
                <View style={styles.liveIndicator}>
                    <View style={styles.pulsingDot} />
                    <Text style={styles.liveText}>BROADCASTING</Text>
                </View>
            </View>

            {/* Interactive Map */}
            <View style={styles.mapArea}>
                <InteractiveMap
                    latitude={currentCoord.latitude}
                    longitude={currentCoord.longitude}
                    heading={currentCoord.heading}
                    isDriver={true}
                    title="Driver GPS Broadcaster"
                    onCenter={() => publishLocation(WAYPOINTS[0])}
                />
            </View>

            {/* Bottom Controls Bar */}
            <View style={styles.controlsBar}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoText}>
                        Channel: <Text style={{ fontWeight: 'bold', color: '#4285f4' }}>'location'</Text> · PubNub
                        Active
                    </Text>
                    <TouchableOpacity onPress={() => router.push('/practical-9/user' as any)} activeOpacity={0.7}>
                        <Text style={styles.switchRoleLink}>View As User ›</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsRow}>
                    <TouchableOpacity
                        style={[styles.actionBtn, isDriving ? styles.stopBtn : styles.startBtn]}
                        onPress={toggleDrivingSimulation}
                        activeOpacity={0.8}
                    >
                        <Ionicons name={isDriving ? 'pause' : 'play'} size={20} color="#ffffff" />
                        <Text style={styles.btnText}>{isDriving ? 'PAUSE DRIVE' : 'START DRIVE'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.stepBtn} onPress={nextStep} activeOpacity={0.8}>
                        <Ionicons name="play-forward" size={20} color="#333333" />
                        <Text style={styles.stepBtnText}>STEP</Text>
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
        backgroundColor: '#1bce8d',
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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.25)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    pulsingDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        marginRight: 6,
    },
    liveText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 11,
    },
    mapArea: {
        flex: 1,
    },
    controlsBar: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderTopWidth: 1,
        borderTopColor: '#eeeeee',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 5,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    infoText: {
        fontSize: 13,
        color: '#555555',
    },
    switchRoleLink: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#4285f4',
    },
    buttonsRow: {
        flexDirection: 'row',
        gap: 12,
    },
    actionBtn: {
        flex: 1,
        height: 48,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    startBtn: {
        backgroundColor: '#1bce8d',
    },
    stopBtn: {
        backgroundColor: '#e53935',
    },
    btnText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    stepBtn: {
        width: 100,
        height: 48,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    },
    stepBtnText: {
        fontWeight: 'bold',
        color: '#333333',
        fontSize: 14,
    },
})
