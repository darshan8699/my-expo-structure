import React, { createContext, useContext, useReducer } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './context-demo.style'

type Action = { type: 'INC' | 'DEC' | 'RESET' }
interface CounterContextType {
    count: number
    dispatch: React.Dispatch<Action>
}

const countReducer = (state: number, action: Action): number => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        case 'RESET':
            return 0
        default:
            return state
    }
}

const CounterContext = createContext<CounterContextType | null>(null)

const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, dispatch] = useReducer(countReducer, 0)
    return <CounterContext.Provider value={{ count, dispatch }}>{children}</CounterContext.Provider>
}

const useCounter = () => {
    const ctx = useContext(CounterContext)
    if (!ctx) throw new Error('useCounter must be within CounterProvider')
    return ctx
}

const CounterDisplay: React.FC = () => {
    const { count, dispatch } = useCounter()
    return (
        <View style={styles.counterCard}>
            <Text style={styles.label}>Counter (React Context)</Text>
            <Text style={styles.count}>{count}</Text>
            <View style={styles.row}>
                <TouchableOpacity style={[styles.btn, styles.btnOutline]} onPress={() => dispatch({ type: 'DEC' })}>
                    <Text style={styles.btnOutlineText}>−</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={() => dispatch({ type: 'INC' })}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.resetBtn} onPress={() => dispatch({ type: 'RESET' })}>
                <Text style={styles.resetText}>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

export default function ContextScreen() {
    return (
        <CounterProvider>
            <View style={styles.container}>
                <View style={styles.conceptBox}>
                    <Text style={styles.conceptTitle}>How Context API Works</Text>
                    <Text style={styles.conceptText}>
                        1. <Text style={styles.bold}>createContext</Text> — creates context object{'\n'}
                        2. <Text style={styles.bold}>Provider</Text> — wraps component tree with state{'\n'}
                        3. <Text style={styles.bold}>useReducer</Text> — handles state transitions{'\n'}
                        4. <Text style={styles.bold}>useContext</Text> — consumes state in children{'\n'}
                        5. Built into React — no external dependencies
                    </Text>
                </View>
                <CounterDisplay />
                <View style={styles.codeBox}>
                    <Text style={styles.codeTitle}>Key Code</Text>
                    <Text
                        style={styles.code}
                    >{`const Ctx = createContext(null)\nconst Provider = ({children}) => {\n  const [s, d] = useReducer(r, 0)\n  return <Ctx.Provider value={{s,d}}>{children}</Ctx.Provider>\n}\nconst { s, d } = useContext(Ctx)`}</Text>
                </View>
            </View>
        </CounterProvider>
    )
}
