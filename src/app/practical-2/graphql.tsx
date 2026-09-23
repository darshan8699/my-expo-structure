import React, { useState } from 'react'
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Spacing } from '@/common/theme'
import styles from '@/pages/practical-2/graphql/graphql-demo.style'

const ACCENT = '#E535AB'
const GQL_URL = 'https://countries.trevorblades.com/'
const QUERY = `query { continents { code name countries { name emoji } } }`

interface Country {
    name: string
    emoji: string
}
interface Continent {
    code: string
    name: string
    countries: Country[]
}

export default function GraphQLDemoScreen() {
    const [data, setData] = useState<Continent[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [fetched, setFetched] = useState(false)
    const [expanded, setExpanded] = useState<string | null>(null)

    const fetchData = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await fetch(GQL_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: QUERY }),
            })
            const json = await res.json()
            setData(json.data.continents)
            setFetched(true)
        } catch (e: any) {
            setError(e.message ?? 'Network error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.conceptBox}>
                <Text style={styles.conceptTitle}>How GraphQL Works</Text>
                <Text style={styles.conceptText}>
                    1. Single endpoint (POST request){'\n'}
                    2. <Text style={styles.bold}>Query</Text> — declare exactly what data you need{'\n'}
                    3. Response matches the query shape exactly{'\n'}
                    4. No over-fetching or under-fetching{'\n'}
                    5. Using public Countries API (trevorblades.com)
                </Text>
            </View>

            {!fetched && (
                <TouchableOpacity style={styles.fetchBtn} onPress={fetchData}>
                    <Text style={styles.fetchBtnText}>◈ Run GraphQL Query</Text>
                </TouchableOpacity>
            )}
            {loading && <ActivityIndicator color={ACCENT} size="large" style={{ marginTop: Spacing.xl }} />}
            {error && <Text style={styles.errorText}>Error: {error}</Text>}

            {fetched && !loading && (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.code}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={styles.resultHeader}>
                            <Text style={styles.resultLabel}>✅ Fetched {data.length} continents</Text>
                            <TouchableOpacity onPress={fetchData}>
                                <Text style={styles.refetchText}>↺ Refetch</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    renderItem={({ item }) => {
                        const isOpen = expanded === item.code
                        return (
                            <TouchableOpacity
                                style={styles.continentCard}
                                onPress={() => setExpanded(isOpen ? null : item.code)}
                                activeOpacity={0.8}
                            >
                                <View style={styles.continentRow}>
                                    <Text style={styles.continentName}>{item.name}</Text>
                                    <Text style={styles.continentCount}>
                                        {item.countries.length} countries {isOpen ? '▲' : '▼'}
                                    </Text>
                                </View>
                                {isOpen && (
                                    <View style={styles.countriesList}>
                                        {item.countries.slice(0, 8).map((c) => (
                                            <Text key={c.name} style={styles.countryItem}>
                                                {c.emoji} {c.name}
                                            </Text>
                                        ))}
                                        {item.countries.length > 8 && (
                                            <Text style={styles.moreText}>+{item.countries.length - 8} more…</Text>
                                        )}
                                    </View>
                                )}
                            </TouchableOpacity>
                        )
                    }}
                />
            )}

            <View style={styles.codeBox}>
                <Text style={styles.codeTitle}>Key Code</Text>
                <Text
                    style={styles.code}
                >{`fetch(GQL_URL, {\n  method: 'POST',\n  body: JSON.stringify({ query: \`query { countries { name } }\` })\n})`}</Text>
            </View>
        </View>
    )
}
