import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '@/pages/practical-2/mobx/mobx-demo.style'

class CounterStore {
    count = 0
    constructor() {
        makeAutoObservable(this)
    }
    increment() {
        this.count++
    }
    decrement() {
        this.count--
    }
    reset() {
        this.count = 0
    }
}
const counterStore = new CounterStore()

const MobXDemoScreen = observer(() => {
    return (
        <View style={styles.container}>
            <View style={styles.conceptBox}>
                <Text style={styles.conceptTitle}>How MobX Works</Text>
                <Text style={styles.conceptText}>
                    1. <Text style={styles.bold}>makeAutoObservable</Text> — makes class reactive{'\n'}
                    2. Mutate state directly (no dispatch/set needed){'\n'}
                    3. <Text style={styles.bold}>observer()</Text> — component re-renders on change{'\n'}
                    4. Computed values auto-update{'\n'}
                    5. Reactions run side effects when state changes
                </Text>
            </View>
            <View style={styles.counterCard}>
                <Text style={styles.label}>Counter (MobX observable)</Text>
                <Text style={styles.count}>{counterStore.count}</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.btn, styles.btnOutline]} onPress={() => counterStore.decrement()}>
                        <Text style={styles.btnOutlineText}>−</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={() => counterStore.increment()}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.resetBtn} onPress={() => counterStore.reset()}>
                    <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.codeBox}>
                <Text style={styles.codeTitle}>Key Code</Text>
                <Text
                    style={styles.code}
                >{`class Store {\n  count = 0\n  constructor() { makeAutoObservable(this) }\n  increment() { this.count++ }\n}\n\nconst MyComp = observer(() => <Text>{store.count}</Text>)`}</Text>
            </View>
        </View>
    )
})

export default MobXDemoScreen
