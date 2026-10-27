import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useMemo, useState } from 'react'
import { Alert, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './count-variance.style'

interface VarianceItem {
    id: string
    name: string
    code: string
    name1: string
    amount: string
    amount1: string
    count: number
}

const INITIAL_VARIANCE_DATA: VarianceItem[] = [
    {
        id: '1',
        name: 'Fluorescent Desk Lamp',
        code: 'A11030',
        name1: 'Crate(48)',
        amount: '1:0.00000',
        amount1: '2:0.0000',
        count: 5,
    },
    {
        id: '2',
        name: '13W Mini Fluorescent Bulb',
        code: 'A11050',
        name1: 'Crate(48)',
        amount: '1:0.00000',
        amount1: '2:0.0000',
        count: 12,
    },
    {
        id: '3',
        name: 'LED Strip 5m Waterproof',
        code: 'A11080',
        name1: 'Box(24)',
        amount: '1:0.00000',
        amount1: '2:0.0000',
        count: 8,
    },
    {
        id: '4',
        name: 'Ceiling Pendant Light Fixture',
        code: 'A11110',
        name1: 'Single(1)',
        amount: '1:0.00000',
        amount1: '2:0.0000',
        count: 2,
    },
]

export default function CountVarianceScreen() {
    const [data, setData] = useState<VarianceItem[]>(INITIAL_VARIANCE_DATA)
    const [search, setSearch] = useState('')
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const filteredData = useMemo(() => {
        if (!search.trim()) return data
        const q = search.toLowerCase()
        return data.filter((item) => item.name.toLowerCase().includes(q) || item.code.toLowerCase().includes(q))
    }, [data, search])

    const updateCount = (id: string, delta: number) => {
        setData((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const nextVal = Math.max(0, item.count + delta)
                    return { ...item, count: nextVal }
                }
                return item
            }),
        )
    }

    const setCountDirectly = (id: string, value: string) => {
        const num = parseInt(value, 10)
        setData((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    return { ...item, count: isNaN(num) ? 0 : num }
                }
                return item
            }),
        )
    }

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id))
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBackContainer} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>Count Variance</Text>
                </TouchableOpacity>
                <Text style={styles.headerSubtext}>Audit Mode</Text>
            </View>

            {/* Search Input */}
            <View style={styles.searchSection}>
                <Ionicons name="search" size={20} color="#777777" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search item name or code..."
                    value={search}
                    onChangeText={setSearch}
                    placeholderTextColor="#999999"
                />
                {search.length > 0 && (
                    <TouchableOpacity onPress={() => setSearch('')}>
                        <Ionicons name="close-circle" size={18} color="#999999" />
                    </TouchableOpacity>
                )}
            </View>

            {/* Item List */}
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const isExpanded = expandedId === item.id
                    return (
                        <View style={styles.card}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => toggleExpand(item.id)}>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemCode}>{item.code}</Text>
                                </View>
                                <Text style={styles.itemSubtitle}>
                                    Package: {item.name1} · Current Count: {item.count}
                                </Text>
                            </TouchableOpacity>

                            {isExpanded && (
                                <View style={styles.expandedCard}>
                                    <View style={styles.quantityRow}>
                                        <View>
                                            <Text style={styles.quantityLabel}>{item.name1}</Text>
                                            <Text style={styles.statText}>Exp: {item.amount}</Text>
                                            <Text style={styles.statText}>Act: {item.amount1}</Text>
                                        </View>

                                        <View style={styles.counterControls}>
                                            <TouchableOpacity
                                                style={styles.counterBtn}
                                                onPress={() => updateCount(item.id, -1)}
                                            >
                                                <Text style={styles.counterBtnText}>-</Text>
                                            </TouchableOpacity>

                                            <TextInput
                                                style={styles.counterInput}
                                                keyboardType="numeric"
                                                value={String(item.count)}
                                                onChangeText={(txt) => setCountDirectly(item.id, txt)}
                                            />

                                            <TouchableOpacity
                                                style={styles.counterBtn}
                                                onPress={() => updateCount(item.id, 1)}
                                            >
                                                <Text style={styles.counterBtnText}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )}
                        </View>
                    )
                }}
            />

            {/* Bottom Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => router.push('/practical-6' as any)}>
                    <Ionicons name="list-outline" size={24} color="#f78b1e" />
                    <Text style={styles.bottomBarText}>CATALOG</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bottomBarButton}
                    onPress={() => Alert.alert('Email Summary', 'Variance report ready to email.')}
                >
                    <Ionicons name="mail-outline" size={24} color="#f78b1e" />
                    <Text style={styles.bottomBarText}>EMAIL</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bottomBarButton}
                    onPress={() => Alert.alert('Upload Data', 'Variance counts uploaded successfully.')}
                >
                    <Ionicons name="cloud-upload-outline" size={24} color="#f78b1e" />
                    <Text style={styles.bottomBarText}>UPLOAD</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomBarButton} onPress={() => router.back()}>
                    <Ionicons name="log-out-outline" size={24} color="#f78b1e" />
                    <Text style={styles.bottomBarText}>EXIT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
