import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components'
import Colors from '../../constants/colors'
import { decrease, increase } from '../../redux/actions'
import { store } from '../../redux/store'

const CounterDemo: React.FC = () => {
    const [count, setCount] = useState(store.getState().count)

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setCount(store.getState().count)
        })
        return unsubscribe
    }, [])

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar backgroundColor={Colors.Header_color} barStyle="light-content" />
            <Header text="Redux Counter Demo" onBack={() => router.back()} />
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.label}>Redux State Counter</Text>
                    <Text style={styles.countText}>{count}</Text>
                    <View style={styles.btnRow}>
                        <TouchableOpacity
                            style={[styles.btn, styles.decrementBtn]}
                            onPress={() => store.dispatch(decrease())}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.btnText}>− Decrement</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.btn, styles.incrementBtn]}
                            onPress={() => store.dispatch(increase())}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.btnText}>+ Increment</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.Header_color,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.Primary_BackgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        maxWidth: 340,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6B7280',
        marginBottom: 12,
    },
    countText: {
        fontSize: 54,
        fontWeight: 'bold',
        color: Colors.Header_color,
        marginVertical: 16,
    },
    btnRow: {
        flexDirection: 'row',
        gap: 12,
        width: '100%',
        marginTop: 8,
    },
    btn: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    incrementBtn: {
        backgroundColor: Colors.Header_color,
    },
    decrementBtn: {
        backgroundColor: '#4B5563',
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
})

export default CounterDemo
