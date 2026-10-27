import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useMemo, useState } from 'react'
import { Alert, FlatList, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './list-catalog.style'

export interface CatalogItem {
    id: string
    name: string
    date: string
    date1: string
    status: string
}

const INITIAL_DATA: CatalogItem[] = [
    {
        name: 'Warehouse',
        date: '4/29/2020  15:07:34',
        date1: '4/28/2020  09:21:54',
        status: 'Count 1',
        id: '1',
    },
    {
        name: 'Store Front',
        date: '4/29/2020  15:07:34',
        date1: '4/28/2020  09:21:54',
        status: 'Count 2',
        id: '2',
    },
    {
        name: 'Distribution Center',
        date: '5/01/2020  10:15:22',
        date1: '4/30/2020  14:02:11',
        status: 'Count 3',
        id: '3',
    },
    {
        name: 'Back Storage Area',
        date: '5/03/2020  16:45:00',
        date1: '5/02/2020  08:30:19',
        status: 'Count 4',
        id: '4',
    },
]

const LOCATIONS = ['India', 'USA', 'China', 'Russia', 'United Kingdom', 'France']
const PRICE_LISTS = ['100', '200', '500']

export default function ListCatalogScreen() {
    const [data, setData] = useState<CatalogItem[]>(INITIAL_DATA)
    const [search, setSearch] = useState('')
    const [expandedId, setExpandedId] = useState<string | null>(null)
    const [isAddVisible, setIsAddVisible] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('India')
    const [selectedPriceList, setSelectedPriceList] = useState('100')

    const filteredData = useMemo(() => {
        if (!search.trim()) return data
        const q = search.toLowerCase()
        return data.filter((item) => item.name.toLowerCase().includes(q) || item.status.toLowerCase().includes(q))
    }, [data, search])

    const handleSave = () => {
        if (!newTitle.trim()) {
            Alert.alert('Required', 'Please enter a name for the catalog item.')
            return
        }

        const now = new Date()
        const dateStr = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.toLocaleTimeString()}`
        const newItem: CatalogItem = {
            id: String(Date.now()),
            name: newTitle.trim(),
            date: dateStr,
            date1: dateStr,
            status: `Count ${data.length + 1}`,
        }

        setData((prev) => [newItem, ...prev])
        setNewTitle('')
        setIsAddVisible(false)
        Alert.alert('Success', `"${newItem.name}" added to catalog.`)
    }

    const handleDelete = (id: string, name: string) => {
        Alert.alert('Delete Item', `Are you sure you want to delete "${name}"?`, [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                style: 'destructive',
                onPress: () => {
                    setData((prev) => prev.filter((item) => item.id !== id))
                    if (expandedId === id) setExpandedId(null)
                },
            },
        ])
    }

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id))
    }

    const handleLogoff = () => {
        Alert.alert('Logoff', 'Logged off successfully.', [{ text: 'OK', onPress: () => router.back() }])
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLogoContainer} onPress={() => router.back()} activeOpacity={0.8}>
                    <Ionicons name="arrow-back" size={24} color="#ffffff" />
                    <Text style={styles.headerTitle}>Physical Inventory</Text>
                </TouchableOpacity>
                <Text style={styles.headerRightText}>Catalog</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchSection}>
                <Ionicons name="search" size={20} color="#777777" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search catalog or status..."
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

            {/* Main Content */}
            <ScrollView style={styles.body} keyboardShouldPersistTaps="handled">
                {/* Add Item Panel */}
                {isAddVisible && (
                    <View style={styles.addSection}>
                        <View style={styles.addHeader}>
                            <TextInput
                                style={styles.addInput}
                                placeholder="Enter catalog title..."
                                value={newTitle}
                                onChangeText={setNewTitle}
                                placeholderTextColor="#888888"
                            />
                            <TouchableOpacity style={styles.addSaveButton} onPress={handleSave}>
                                <Text style={styles.addSaveButtonText}>SAVE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addCancelButton} onPress={() => setIsAddVisible(false)}>
                                <Text style={styles.addCancelButtonText}>CANCEL</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.pickerContainer}>
                            <Text style={styles.pickerLabel}>Location:</Text>
                            <View style={styles.pickerSelectorRow}>
                                {LOCATIONS.map((loc) => (
                                    <TouchableOpacity
                                        key={loc}
                                        style={[styles.pickerChip, selectedLocation === loc && styles.pickerChipActive]}
                                        onPress={() => setSelectedLocation(loc)}
                                    >
                                        <Text
                                            style={[
                                                styles.pickerChipText,
                                                selectedLocation === loc && styles.pickerChipTextActive,
                                            ]}
                                        >
                                            {loc}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <View style={styles.pickerContainer}>
                            <Text style={styles.pickerLabel}>Price List:</Text>
                            <View style={styles.pickerSelectorRow}>
                                {PRICE_LISTS.map((pl) => (
                                    <TouchableOpacity
                                        key={pl}
                                        style={[styles.pickerChip, selectedPriceList === pl && styles.pickerChipActive]}
                                        onPress={() => setSelectedPriceList(pl)}
                                    >
                                        <Text
                                            style={[
                                                styles.pickerChipText,
                                                selectedPriceList === pl && styles.pickerChipTextActive,
                                            ]}
                                        >
                                            ${pl}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>
                )}

                {/* Items List */}
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                    renderItem={({ item }) => {
                        const isExpanded = expandedId === item.id
                        return (
                            <View style={styles.itemCard}>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => toggleExpand(item.id)}>
                                    <View style={styles.itemHeader}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                        <View style={styles.itemStatusBadge}>
                                            <Text style={styles.itemStatusText}>{item.status}</Text>
                                        </View>
                                    </View>
                                    <Text style={styles.itemDate}>Created: {item.date}</Text>
                                </TouchableOpacity>

                                {isExpanded && (
                                    <View style={styles.expandedSection}>
                                        <Text style={styles.expandedDetail}>Start: {item.date}</Text>
                                        <Text style={styles.expandedDetail}>Saved: {item.date1}</Text>
                                        <Text style={styles.expandedDetail}>Status: {item.status}</Text>

                                        <View style={styles.actionButtonsRow}>
                                            <TouchableOpacity
                                                style={styles.actionButton}
                                                onPress={() => router.push('/practical-6/count-variance' as any)}
                                            >
                                                <MaterialCommunityIcons name="counter" size={22} color="#ed6f00" />
                                                <Text style={styles.actionButtonText}>COUNT</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={styles.actionButton}
                                                onPress={() =>
                                                    Alert.alert('Continue', `Continuing session for ${item.name}`)
                                                }
                                            >
                                                <Ionicons name="play-forward-outline" size={22} color="#ed6f00" />
                                                <Text style={styles.actionButtonText}>CONTINUE</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={styles.actionButton}
                                                onPress={() => handleDelete(item.id, item.name)}
                                            >
                                                <Ionicons name="trash-outline" size={22} color="#ed6f00" />
                                                <Text style={styles.actionButtonText}>DELETE</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            </View>
                        )
                    }}
                />
            </ScrollView>

            {/* Bottom Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.bottomBarButton} onPress={() => setIsAddVisible((prev) => !prev)}>
                    <Ionicons name="add-circle-outline" size={24} color="#f78b1e" />
                    <Text style={styles.bottomBarText}>ADD LIST</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bottomBarButton}
                    onPress={() => Alert.alert('Search Activated', 'Type in the top search bar to filter records.')}
                >
                    <Ionicons name="search" size={24} color="#f78b1e" />
                    <Text style={styles.bottomBarText}>SEARCH</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bottomBarButton}
                    onPress={() => router.push('/practical-6/count-variance' as any)}
                >
                    <Ionicons name="calculator-outline" size={24} color="#f78b1e" />
                    <Text style={styles.bottomBarText}>VARIANCE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomBarButton} onPress={handleLogoff}>
                    <Ionicons name="log-out-outline" size={24} color="#f78b1e" />
                    <Text style={styles.bottomBarText}>LOGOFF</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
