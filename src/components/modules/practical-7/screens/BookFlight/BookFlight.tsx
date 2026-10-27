import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import Box from '../../components/Box/Box'
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import CustomeHeader from '../../components/CustomeHeader/CustomeHeader'
import Filter from '../../components/Filter/Filter'
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer'
import Color from '../../constants/Color'
import FontFamily from '../../constants/FontFamily'
import { height, totalSize } from '../../utils/dimension'

const RECOMMENDED_DATA = [
    { id: '1', title: 'New York City Skyline', distance: 'Distance to 2,999 mi' },
    { id: '2', title: 'San Francisco Bay', distance: 'Distance to 450 mi' },
    { id: '3', title: 'Los Angeles Coast', distance: 'Distance to 800 mi' },
]

export default function BookFlightScreen() {
    const [selectedTrip, setSelectedTrip] = useState<'one-way' | 'round-trip'>('round-trip')

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <CustomeHeader heading="Book Flight" />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={styles.titleSection}>
                        <Text style={styles.screenTitle}>Book Your Flight</Text>
                        <Text style={styles.screenSubtitle}>Select travel preferences and destinations</Text>
                    </View>

                    {/* Filters: One Way vs Round Trip */}
                    <View style={styles.filtersRow}>
                        <Filter
                            name="One Way"
                            icon="minus-circle"
                            active={selectedTrip === 'one-way'}
                            onPress={() => setSelectedTrip('one-way')}
                        />
                        <Filter
                            name="Round Trip"
                            icon="swap"
                            active={selectedTrip === 'round-trip'}
                            onPress={() => setSelectedTrip('round-trip')}
                        />
                    </View>

                    {/* Flight Details Containers */}
                    <Container type="From" name="San Francisco (SFO)" icon="aircraft" />
                    <Container type="To" name="New York (JFK)" icon="flow-line" />
                    <Container type="Passengers" name="2 Adults, 1 Child" icon="text-document" />

                    <View style={styles.splitContainers}>
                        <Container type="Departures" name="5 July 2026" width="48%" icon="man" />
                        <Container type="Class" name="Business" width="48%" icon="popup" />
                    </View>

                    {/* Recommended Section */}
                    <HeaderContainer heading="Recommended" />

                    <FlatList
                        data={RECOMMENDED_DATA}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.recommendedList}
                        renderItem={({ item }) => <Box title={item.title} distance={item.distance} />}
                    />

                    {/* Select Ticket CTA */}
                    <View style={styles.ctaWrapper}>
                        <Button
                            title="Select Ticket"
                            onPress={() => router.push('/practical-7/select-ticket' as any)}
                        />
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
        paddingBottom: height(5),
    },
    titleSection: {
        paddingHorizontal: height(2.5),
        marginTop: height(1),
        marginBottom: height(1),
    },
    screenTitle: {
        fontFamily: FontFamily.Bold,
        fontSize: totalSize(3),
        fontWeight: 'bold',
        color: '#1F1F1F',
    },
    screenSubtitle: {
        fontSize: totalSize(1.6),
        color: '#777777',
        marginTop: 4,
    },
    filtersRow: {
        flexDirection: 'row',
        paddingHorizontal: height(1),
        marginBottom: height(1),
    },
    splitContainers: {
        flexDirection: 'row',
        paddingHorizontal: height(1),
        justifyContent: 'space-between',
    },
    recommendedList: {
        paddingHorizontal: height(1),
        paddingBottom: height(2),
    },
    ctaWrapper: {
        marginTop: height(2),
        paddingHorizontal: height(2),
    },
})
