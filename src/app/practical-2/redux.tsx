import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
// @ts-ignore — classic redux createStore
import { createStore } from 'redux'
import styles from '@/pages/practical-2/redux/redux-demo.style'

type CounterAction = { type: 'INCREMENT' | 'DECREMENT' | 'RESET' }

// ─── Redux Setup ──────────────────────────────────────────────────────────────
const counterReducer = (state = 0, action: CounterAction): number => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return 0
        default:
            return state
    }
}
const store = createStore(counterReducer)

// ─── Screen ───────────────────────────────────────────────────────────────────
export default function ReduxDemoScreen() {
    const [count, setCount] = useState(store.getState())

    useEffect(() => {
        const unsub = store.subscribe(() => setCount(store.getState()))
        return unsub
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.conceptBox}>
                <Text style={styles.conceptTitle}>How Classic Redux Works</Text>
                <Text style={styles.conceptText}>
                    1. <Text style={styles.bold}>Store</Text> — holds the global state{'\n'}
                    2. <Text style={styles.bold}>Action</Text> — plain object {'{ type }'}
                    {'\n'}
                    3. <Text style={styles.bold}>Reducer</Text> — pure function (state, action) → state{'\n'}
                    4. <Text style={styles.bold}>dispatch()</Text> — sends action to reducer{'\n'}
                    5. <Text style={styles.bold}>subscribe()</Text> — listens for state changes
                </Text>
            </View>

            <View style={styles.counterCard}>
                <Text style={styles.label}>Counter (from Redux store)</Text>
                <Text style={styles.count}>{count}</Text>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.btn, styles.btnOutline]}
                        onPress={() => store.dispatch({ type: 'DECREMENT' })}
                    >
                        <Text style={styles.btnOutlineText}>−</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, styles.btnPrimary]}
                        onPress={() => store.dispatch({ type: 'INCREMENT' })}
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.resetBtn} onPress={() => store.dispatch({ type: 'RESET' })}>
                    <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.codeBox}>
                <Text style={styles.codeTitle}>Key Code</Text>
                <Text
                    style={styles.code}
                >{`const store = createStore(reducer)\nstore.dispatch({ type: 'INCREMENT' })\nstore.subscribe(() => setState(store.getState()))`}</Text>
            </View>
        </View>
    )
}
