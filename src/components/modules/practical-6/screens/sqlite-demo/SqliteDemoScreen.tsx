import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { hp } from '../../utils/dimension'

interface SqlItem {
    listno: number
    itemname: string
}

export default function SqliteDemoScreen() {
    const [array, setArray] = useState<SqlItem[]>([
        { listno: 101, itemname: 'Industrial Bolt Pack M8' },
        { listno: 102, itemname: 'Ceramic High-Volt Fuse' },
        { listno: 103, itemname: 'Nylon Cable Ties 200mm' },
    ])

    const sendData = () => {
        // Simulates query execution tx.executeSql('SELECT * FROM listcatalog')
        const newRecord: SqlItem = {
            listno: 100 + array.length + 1,
            itemname: `Catalog Item #${array.length + 1}`,
        }
        setArray((prev) => [...prev, newRecord])
    }

    const ListViewItemSeparator = () => {
        return <View style={{ height: 1, width: '100%', backgroundColor: '#e0e0e0' }} />
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBack} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>SQLite Storage Demo</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.subtext}>
                    Database: <Text style={{ fontWeight: 'bold' }}>UserDatabase.db</Text> · Table:{' '}
                    <Text style={{ fontWeight: 'bold' }}>listcatalog</Text>
                </Text>

                <FlatList
                    data={array}
                    ItemSeparatorComponent={ListViewItemSeparator}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemRow}>
                            <Text style={styles.itemId}>Id: {item.listno}</Text>
                            <Text style={styles.itemName}>Name: {item.itemname}</Text>
                        </View>
                    )}
                />

                <TouchableOpacity style={styles.button} onPress={sendData}>
                    <Text style={styles.buttonText}>EXECUTE SQL / SEND DATA</Text>
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
        padding: hp(2),
    },
    subtext: {
        fontSize: hp(1.6),
        color: '#666666',
        marginBottom: hp(1.5),
    },
    itemRow: {
        paddingVertical: hp(1.5),
    },
    itemId: {
        fontSize: hp(1.8),
        fontWeight: 'bold',
        color: '#333333',
    },
    itemName: {
        fontSize: hp(1.6),
        color: '#555555',
        marginTop: hp(0.3),
    },
    button: {
        backgroundColor: '#ed6503',
        paddingVertical: hp(1.8),
        borderRadius: hp(1),
        alignItems: 'center',
        marginTop: hp(2),
    },
    buttonText: {
        color: '#ffffff',
        fontSize: hp(1.8),
        fontWeight: 'bold',
    },
})
