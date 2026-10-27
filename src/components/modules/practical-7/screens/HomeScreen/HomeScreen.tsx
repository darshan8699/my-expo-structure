import { Feather, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Box from '../../components/Box/Box'
import CustomeHeader from '../../components/CustomeHeader/CustomeHeader'
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer'
import Options from '../../components/Options/Options'
import Color from '../../constants/Color'
import FontFamily from '../../constants/FontFamily'
import { height, totalSize } from '../../utils/dimension'

const PLACES_DATA = [
    { id: '1', title: 'New York Skyline', distance: 'Distance to 2,999 mi' },
    { id: '2', title: 'Paris Eiffel Tower', distance: 'Distance to 3,620 mi' },
    { id: '3', title: 'Tokyo Shinjuku', distance: 'Distance to 5,420 mi' },
    { id: '4', title: 'London Big Ben', distance: 'Distance to 3,450 mi' },
    { id: '5', title: 'Dubai Burj Khalifa', distance: 'Distance to 7,200 mi' },
]

export default function FlightBookHomeScreen() {
    const [search, setSearch] = useState('')

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <CustomeHeader heading="Flight Explorer" />

                <View style={styles.content}>
                    {/* Greeting */}
                    <View style={styles.greetingSection}>
                        <Text style={styles.greetingSub}>Hi, Robert 👋</Text>
                        <Text style={styles.greetingTitle}>Find Deals</Text>
                    </View>

                    {/* Search Bar */}
                    <View style={styles.searchBar}>
                        <Feather name="search" size={20} color="#888888" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search Flight, Hotels, etc..."
                            value={search}
                            onChangeText={setSearch}
                            placeholderTextColor="#999999"
                        />
                        <Ionicons name="options-outline" size={20} color="#4284f4" />
                    </View>

                    {/* Options Row */}
                    <View style={styles.optionsRow}>
                        <Options
                            name="aircraft"
                            color="#4284f4"
                            gotoFlight={() => {
                                router.push('/practical-7/book-flight' as any)
                            }}
                        />
                        <Options
                            name="direction"
                            color="#ff9800"
                            gotoFlight={() => {
                                router.push('/practical-7/book-flight' as any)
                            }}
                        />
                        <Options
                            name="drive"
                            color="#fbc02d"
                            gotoFlight={() => {
                                router.push('/practical-7/book-flight' as any)
                            }}
                        />
                        <Options
                            name="dots-two-horizontal"
                            color="#4285f4"
                            gotoFlight={() => {
                                router.push('/practical-7/book-flight' as any)
                            }}
                        />
                    </View>

                    {/* Popular Places Header */}
                    <HeaderContainer
                        heading="Popular Places"
                        onViewAll={() => router.push('/practical-7/book-flight' as any)}
                    />

                    {/* Places Carousel */}
                    <FlatList
                        data={PLACES_DATA}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.placesList}
                        renderItem={({ item }) => <Box title={item.title} distance={item.distance} />}
                    />
                </View>
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
    content: {
        flex: 1,
        paddingTop: height(1),
    },
    greetingSection: {
        paddingHorizontal: height(2.5),
        marginBottom: height(1.5),
    },
    greetingSub: {
        fontSize: totalSize(1.8),
        color: '#666666',
        fontWeight: '500',
    },
    greetingTitle: {
        fontFamily: FontFamily.Bold,
        fontSize: totalSize(3.2),
        fontWeight: 'bold',
        color: '#1F1F1F',
        marginTop: 2,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: height(2),
        backgroundColor: '#f5f7fa',
        borderRadius: height(1.8),
        paddingHorizontal: height(1.8),
        paddingVertical: height(1.4),
        borderWidth: 1,
        borderColor: '#e8edf3',
    },
    searchInput: {
        flex: 1,
        marginLeft: height(1),
        fontSize: totalSize(1.6),
        color: '#333333',
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: height(1.5),
        marginTop: height(1),
    },
    placesList: {
        paddingHorizontal: height(1),
        paddingBottom: height(2),
    },
})
