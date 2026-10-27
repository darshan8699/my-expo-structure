import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { hp } from '../../utils/dimension'

export default function LiveTrackingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>Livetracking</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Ionicons name="location-outline" size={60} color="#f0a700" />
                <Text style={styles.title}>Livetracking</Text>
                <Text style={styles.subtitle}>
                    Demo Screen from Demo-master. Full GPS live-tracking module with driver and user views is
                    implemented in Practical 9!
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/practical-9' as any)}>
                    <Text style={styles.buttonText}>OPEN PRACTICAL 9 LIVE TRACKING</Text>
                </TouchableOpacity>
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
        height: hp(8),
        backgroundColor: '#f0a700',
        justifyContent: 'center',
        paddingHorizontal: hp(2),
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: hp(2.2),
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: hp(1),
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: hp(3),
    },
    title: {
        fontSize: hp(2.6),
        fontWeight: 'bold',
        color: '#222222',
        marginTop: hp(2),
    },
    subtitle: {
        fontSize: hp(1.6),
        color: '#666666',
        textAlign: 'center',
        marginTop: hp(1),
        lineHeight: hp(2.4),
    },
    button: {
        backgroundColor: '#f78b1e',
        paddingHorizontal: hp(2.5),
        paddingVertical: hp(1.5),
        borderRadius: hp(1),
        marginTop: hp(3),
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: hp(1.6),
    },
})
