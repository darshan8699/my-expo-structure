import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { hp } from '../../utils/dimension'

interface DemoScreenItem {
    id: string
    title: string
    description: string
    icon: any
    route: string
    tag: string
}

const SCREENS: DemoScreenItem[] = [
    {
        id: '1',
        title: 'List Catalog',
        description: 'Physical inventory catalog, expandable cards, location & price filter, add new list',
        icon: 'list-circle-outline',
        route: '/practical-6/list-catalog',
        tag: 'PRIMARY UI',
    },
    {
        id: '2',
        title: 'Count Variance',
        description: 'Stock audit count variance with +/- counter adjustments and package grouping',
        icon: 'calculator-outline',
        route: '/practical-6/count-variance',
        tag: 'AUDIT',
    },
    {
        id: '3',
        title: 'SQLite Database',
        description: 'Execute SQL queries, UserDatabase.db operations, row iteration and listcatalog records',
        icon: 'server-outline',
        route: '/practical-6/sqlite-demo',
        tag: 'DATABASE',
    },
    {
        id: '4',
        title: 'API Test',
        description: 'Remote Axios HTTP POST call with multipart/JSON payload, request inspection and error handling',
        icon: 'code-slash-outline',
        route: '/practical-6/api-test',
        tag: 'NETWORK',
    },
    {
        id: '5',
        title: 'File Upload',
        description: 'Document and catalog file uploader with upload simulation and status feedback',
        icon: 'cloud-upload-outline',
        route: '/practical-6/file-upload',
        tag: 'STORAGE',
    },
    {
        id: '6',
        title: 'Livetracking Preview',
        description: 'Original Livetracking screen from Demo-master (see Practical 9 for full live GPS map)',
        icon: 'navigate-outline',
        route: '/practical-6/live-tracking',
        tag: 'MAPS',
    },
]

export default function Practical6Dashboard() {
    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>Practical 6</Text>
                </TouchableOpacity>
                <Text style={styles.headerSubtitle}>Demo-master</Text>
            </View>

            <View style={styles.banner}>
                <Text style={styles.bannerTitle}>Inventory & Catalog Suite</Text>
                <Text style={styles.bannerDesc}>
                    Complete set of screens and functionality from Demo-master including List Catalog, Count Variance,
                    SQLite, API integration, and file operations.
                </Text>
            </View>

            {/* Screens List */}
            <FlatList
                data={SCREENS}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        activeOpacity={0.8}
                        onPress={() => router.push(item.route as any)}
                    >
                        <View style={styles.iconContainer}>
                            <Ionicons name={item.icon} size={28} color="#f0a700" />
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                                <View style={styles.tagBadge}>
                                    <Text style={styles.tagText}>{item.tag}</Text>
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
        backgroundColor: '#f8f9fa',
    },
    header: {
        height: hp(8),
        backgroundColor: '#f0a700',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: hp(2),
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: hp(2.3),
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: hp(1),
    },
    headerSubtitle: {
        fontSize: hp(1.6),
        color: '#ffffff',
        fontWeight: '600',
    },
    banner: {
        backgroundColor: '#ffffff',
        padding: hp(2),
        marginHorizontal: hp(2),
        marginTop: hp(2),
        borderRadius: hp(1.2),
        borderLeftWidth: 4,
        borderLeftColor: '#f0a700',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    bannerTitle: {
        fontSize: hp(2),
        fontWeight: 'bold',
        color: '#222222',
    },
    bannerDesc: {
        fontSize: hp(1.5),
        color: '#666666',
        marginTop: hp(0.5),
        lineHeight: hp(2.2),
    },
    listContent: {
        padding: hp(2),
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: hp(1.8),
        borderRadius: hp(1.2),
        marginBottom: hp(1.5),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 3,
        elevation: 1,
    },
    iconContainer: {
        width: hp(5.5),
        height: hp(5.5),
        borderRadius: hp(1),
        backgroundColor: '#fff7e6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: hp(1.5),
    },
    cardContent: {
        flex: 1,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp(0.4),
    },
    cardTitle: {
        fontSize: hp(1.8),
        fontWeight: 'bold',
        color: '#111111',
    },
    tagBadge: {
        backgroundColor: '#fff0cc',
        paddingHorizontal: hp(0.8),
        paddingVertical: hp(0.2),
        borderRadius: hp(0.4),
    },
    tagText: {
        fontSize: hp(1.1),
        fontWeight: 'bold',
        color: '#b87700',
    },
    cardDesc: {
        fontSize: hp(1.4),
        color: '#666666',
        lineHeight: hp(1.9),
    },
})
