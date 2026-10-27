import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width: SCREEN_WIDTH } = Dimensions.get('window')

interface InteractiveMapProps {
    latitude: number
    longitude: number
    heading?: number
    isDriver?: boolean
    title?: string
    onCenter?: () => void
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
    latitude,
    longitude,
    heading = 0,
    isDriver = false,
    title,
    onCenter,
}) => {
    // Map bounding normalization for display (relative to baseline SFO coordinates)
    const baseLat = 37.78825
    const baseLng = -122.4324

    // Map offset coordinates to canvas percentage
    const offsetX = Math.min(Math.max(50 + (longitude - baseLng) * 2500, 10), 90)
    const offsetY = Math.min(Math.max(50 - (latitude - baseLat) * 2500, 15), 85)

    return (
        <View style={styles.mapContainer}>
            {/* Map Canvas Background with simulated streets and grid */}
            <View style={styles.canvasBackground}>
                {/* Horizontal & vertical simulated streets */}
                <View style={[styles.streetH, { top: '25%' }]} />
                <View style={[styles.streetH, { top: '50%', height: 14, backgroundColor: '#ffe599' }]} />
                <View style={[styles.streetH, { top: '75%' }]} />
                <View style={[styles.streetV, { left: '30%' }]} />
                <View style={[styles.streetV, { left: '55%', width: 14, backgroundColor: '#ffe599' }]} />
                <View style={[styles.streetV, { left: '80%' }]} />

                {/* Simulated Park / Lake zones */}
                <View style={styles.parkZone} />
                <View style={styles.waterZone} />

                {/* Simulated Route Polyline */}
                <View style={styles.routeLine} />

                {/* Pickup Marker */}
                <View style={[styles.marker, { left: '30%', top: '25%' }]}>
                    <View style={[styles.pinBubble, { backgroundColor: '#28a745' }]}>
                        <Ionicons name="location" size={18} color="#ffffff" />
                    </View>
                    <Text style={styles.pinLabel}>Pickup</Text>
                </View>

                {/* Dropoff Marker */}
                <View style={[styles.marker, { left: '80%', top: '75%' }]}>
                    <View style={[styles.pinBubble, { backgroundColor: '#dc3545' }]}>
                        <Ionicons name="flag" size={18} color="#ffffff" />
                    </View>
                    <Text style={styles.pinLabel}>Destination</Text>
                </View>

                {/* Animated Vehicle (car.png) */}
                <View
                    style={[
                        styles.carContainer,
                        {
                            left: `${offsetX}%`,
                            top: `${offsetY}%`,
                        },
                    ]}
                >
                    <Image
                        source={require('@/assets/images/practical-9/car.png')}
                        style={[
                            styles.carImage,
                            {
                                transform: [{ rotate: `${heading}deg` }],
                            },
                        ]}
                        resizeMode="contain"
                    />
                    <View style={styles.pulseRing} />
                </View>
            </View>

            {/* Title / Role Overlay Badge */}
            {title && (
                <View style={styles.titleBadge}>
                    <View style={[styles.roleDot, { backgroundColor: isDriver ? '#28a745' : '#007bff' }]} />
                    <Text style={styles.titleText}>{title}</Text>
                </View>
            )}

            {/* Map Controls */}
            <View style={styles.controls}>
                <TouchableOpacity style={styles.controlBtn} onPress={onCenter} activeOpacity={0.8}>
                    <MaterialCommunityIcons name="crosshairs-gps" size={22} color="#333333" />
                </TouchableOpacity>
            </View>

            {/* Coordinates & Telemetry Overlay Bar */}
            <View style={styles.telemetryBar}>
                <View style={styles.telemetryCol}>
                    <Text style={styles.telemetryLabel}>LATITUDE</Text>
                    <Text style={styles.telemetryValue}>{latitude.toFixed(5)}</Text>
                </View>
                <View style={styles.telemetryDivider} />
                <View style={styles.telemetryCol}>
                    <Text style={styles.telemetryLabel}>LONGITUDE</Text>
                    <Text style={styles.telemetryValue}>{longitude.toFixed(5)}</Text>
                </View>
                <View style={styles.telemetryDivider} />
                <View style={styles.telemetryCol}>
                    <Text style={styles.telemetryLabel}>HEADING</Text>
                    <Text style={styles.telemetryValue}>{Math.round(heading)}°</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
        backgroundColor: '#e5e3df',
        overflow: 'hidden',
    },
    canvasBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#eae7d6',
    },
    streetH: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 10,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#d5d2c2',
    },
    streetV: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 10,
        backgroundColor: '#ffffff',
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#d5d2c2',
    },
    parkZone: {
        position: 'absolute',
        top: '10%',
        right: '8%',
        width: 100,
        height: 70,
        backgroundColor: '#cbe6a3',
        borderRadius: 8,
    },
    waterZone: {
        position: 'absolute',
        bottom: '8%',
        left: '5%',
        width: 130,
        height: 80,
        backgroundColor: '#aadaff',
        borderRadius: 16,
    },
    routeLine: {
        position: 'absolute',
        left: '32%',
        top: '28%',
        width: '50%',
        height: '48%',
        borderLeftWidth: 4,
        borderBottomWidth: 4,
        borderColor: '#4285f4',
        borderStyle: 'dashed',
    },
    marker: {
        position: 'absolute',
        alignItems: 'center',
        marginLeft: -15,
        marginTop: -30,
    },
    pinBubble: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    pinLabel: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#222222',
        backgroundColor: '#ffffff',
        paddingHorizontal: 4,
        borderRadius: 3,
        marginTop: 2,
    },
    carContainer: {
        position: 'absolute',
        marginLeft: -25,
        marginTop: -25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    carImage: {
        width: 46,
        height: 46,
    },
    pulseRing: {
        position: 'absolute',
        width: 54,
        height: 54,
        borderRadius: 27,
        borderWidth: 2,
        borderColor: 'rgba(66, 133, 244, 0.4)',
    },
    titleBadge: {
        position: 'absolute',
        top: 16,
        left: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    roleDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 8,
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#222222',
    },
    controls: {
        position: 'absolute',
        right: 16,
        top: 16,
    },
    controlBtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    telemetryBar: {
        position: 'absolute',
        bottom: 20,
        left: 16,
        right: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        elevation: 4,
    },
    telemetryCol: {
        alignItems: 'center',
        flex: 1,
    },
    telemetryLabel: {
        fontSize: 10,
        color: '#888888',
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    telemetryValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#111111',
        marginTop: 2,
    },
    telemetryDivider: {
        width: 1,
        height: 24,
        backgroundColor: '#e5e7eb',
    },
})

export default InteractiveMap
