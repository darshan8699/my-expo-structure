import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { create } from 'zustand';
import styles from '@/pages/practical-2/zustand/zustand-demo.style';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>(set => ({
  count: 0,
  increment: () => set(s => ({ count: s.count + 1 })),
  decrement: () => set(s => ({ count: s.count - 1 })),
  reset:     () => set({ count: 0 }),
}));

export default function ZustandDemoScreen() {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <View style={styles.container}>
      <View style={styles.conceptBox}>
        <Text style={styles.conceptTitle}>How Zustand Works</Text>
        <Text style={styles.conceptText}>
          1. <Text style={styles.bold}>create()</Text> — defines the store with state + actions{'\n'}
          2. No Provider needed — works globally{'\n'}
          3. <Text style={styles.bold}>useStore()</Text> — subscribes component to state slices{'\n'}
          4. Auto re-renders only subscribed components{'\n'}
          5. Tiny bundle size, zero boilerplate
        </Text>
      </View>
      <View style={styles.counterCard}>
        <Text style={styles.label}>Counter (Zustand store)</Text>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.btn, styles.btnOutline]} onPress={decrement}>
            <Text style={styles.btnOutlineText}>−</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={increment}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.resetBtn} onPress={reset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.codeBox}>
        <Text style={styles.codeTitle}>Key Code</Text>
        <Text style={styles.code}>{`const useStore = create(set => ({\n  count: 0,\n  increment: () => set(s => ({ count: s.count + 1 }))\n}))\n\nconst { count, increment } = useStore()`}</Text>
      </View>
    </View>
  );
}
