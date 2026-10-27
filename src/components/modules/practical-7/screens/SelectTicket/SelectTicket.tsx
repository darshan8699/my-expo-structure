import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from '../../components/Button/Button'
import CustomeHeader from '../../components/CustomeHeader/CustomeHeader'
import Color from '../../constants/Color'
import { height, totalSize } from '../../utils/dimension'

interface TicketOption {
    id: string
    airline: string
    code: string
    departureTime: string
    arrivalTime: string
    duration: string
    price: string
    classType: string
}

const TICKETS: TicketOption[] = [
    {
        id: '1',
        airline: 'Delta Air Lines',
        code: 'DL-2041',
        departureTime: '08:45 AM',
        arrivalTime: '05:15 PM',
        duration: '5h 30m · Direct',
        price: '$450',
        classType: 'Business',
    },
    {
        id: '2',
        airline: 'United Airlines',
        code: 'UA-1102',
        departureTime: '11:20 AM',
        arrivalTime: '07:55 PM',
        duration: '5h 35m · Direct',
        price: '$390',
        classType: 'Economy',
    },
    {
        id: '3',
        airline: 'American Airlines',
        code: 'AA-840',
        departureTime: '03:10 PM',
        arrivalTime: '11:40 PM',
        duration: '5h 30m · Direct',
        price: '$520',
        classType: 'First Class',
    },
]

export default function SelectTicketScreen() {
    const [selectedTicket, setSelectedTicket] = useState('1')

    const handleConfirm = () => {
        const ticket = TICKETS.find((t) => t.id === selectedTicket)
        Alert.alert(
            'Booking Confirmed! ✈️',
            `You booked ${ticket?.airline} (${ticket?.code}) from San Francisco to New York for ${ticket?.price}.`,
            [{ text: 'Return to Home', onPress: () => router.push('/practical-7' as any) }],
        )
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <CustomeHeader heading="Select Ticket" />

                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Flight Summary Card */}
                    <View style={styles.routeBanner}>
                        <View style={styles.routeRow}>
                            <View>
                                <Text style={styles.cityCode}>SFO</Text>
                                <Text style={styles.cityName}>San Francisco</Text>
                            </View>
                            <View style={styles.flightIconWrap}>
                                <Ionicons name="airplane" size={24} color="#4284f4" />
                                <Text style={styles.flightDate}>5 Jul 2026</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={styles.cityCode}>JFK</Text>
                                <Text style={styles.cityName}>New York</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.sectionHeader}>Available Flights</Text>

                    {TICKETS.map((item) => {
                        const isSelected = selectedTicket === item.id
                        return (
                            <TouchableOpacity
                                key={item.id}
                                style={[styles.ticketCard, isSelected && styles.ticketCardActive]}
                                onPress={() => setSelectedTicket(item.id)}
                                activeOpacity={0.8}
                            >
                                <View style={styles.ticketHeader}>
                                    <View>
                                        <Text style={styles.airlineName}>{item.airline}</Text>
                                        <Text style={styles.flightCode}>{item.code}</Text>
                                    </View>
                                    <View style={styles.priceWrap}>
                                        <Text style={styles.priceText}>{item.price}</Text>
                                        <Text style={styles.classBadge}>{item.classType}</Text>
                                    </View>
                                </View>

                                <View style={styles.divider} />

                                <View style={styles.flightSchedule}>
                                    <View>
                                        <Text style={styles.timeText}>{item.departureTime}</Text>
                                        <Text style={styles.airportLabel}>SFO</Text>
                                    </View>
                                    <View style={styles.durationWrap}>
                                        <Text style={styles.durationText}>{item.duration}</Text>
                                        <View style={styles.durationLine} />
                                    </View>
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Text style={styles.timeText}>{item.arrivalTime}</Text>
                                        <Text style={styles.airportLabel}>JFK</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}

                    <View style={styles.ctaWrapper}>
                        <Button title="Confirm & Pay" onPress={handleConfirm} />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.white,
    },
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    scrollContent: {
        paddingHorizontal: height(2),
        paddingBottom: height(5),
    },
    routeBanner: {
        backgroundColor: '#edf4fe',
        borderRadius: 14,
        padding: height(2),
        marginTop: height(1),
        marginBottom: height(2),
    },
    routeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cityCode: {
        fontSize: totalSize(3),
        fontWeight: 'bold',
        color: '#1F1F1F',
    },
    cityName: {
        fontSize: totalSize(1.4),
        color: '#666666',
        marginTop: 2,
    },
    flightIconWrap: {
        alignItems: 'center',
    },
    flightDate: {
        fontSize: totalSize(1.2),
        color: '#4284f4',
        fontWeight: '600',
        marginTop: 4,
    },
    sectionHeader: {
        fontSize: totalSize(2.2),
        fontWeight: 'bold',
        color: '#1F1F1F',
        marginBottom: height(1.5),
    },
    ticketCard: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: height(2),
        marginBottom: height(1.5),
        borderWidth: 1.5,
        borderColor: '#e5e9f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    ticketCardActive: {
        borderColor: '#4284f4',
        backgroundColor: '#fafcff',
    },
    ticketHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    airlineName: {
        fontSize: totalSize(1.8),
        fontWeight: 'bold',
        color: '#1F1F1F',
    },
    flightCode: {
        fontSize: totalSize(1.4),
        color: '#888888',
        marginTop: 2,
    },
    priceWrap: {
        alignItems: 'flex-end',
    },
    priceText: {
        fontSize: totalSize(2.4),
        fontWeight: 'bold',
        color: '#4284f4',
    },
    classBadge: {
        fontSize: totalSize(1.2),
        color: '#28a745',
        fontWeight: '600',
        marginTop: 2,
    },
    divider: {
        height: 1,
        backgroundColor: '#f0f3f8',
        marginVertical: height(1.5),
    },
    flightSchedule: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeText: {
        fontSize: totalSize(1.8),
        fontWeight: 'bold',
        color: '#333333',
    },
    airportLabel: {
        fontSize: totalSize(1.4),
        color: '#888888',
        marginTop: 2,
    },
    durationWrap: {
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: height(2),
    },
    durationText: {
        fontSize: totalSize(1.2),
        color: '#888888',
        marginBottom: 4,
    },
    durationLine: {
        height: 2,
        width: '100%',
        backgroundColor: '#4284f4',
    },
    ctaWrapper: {
        marginTop: height(2),
    },
})
