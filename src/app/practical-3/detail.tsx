import { router, useLocalSearchParams } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
  ScrollView, Text, TouchableOpacity, useWindowDimensions, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/common';
import { styles } from '@/pages/practical-3/detail/detail.style';
import {
  calculateGridDimensions,
  generateBoxes,
  getNextColorState,
} from '@/pages/practical-3/detail/detail.util';

export default function DetailScreen() {
  const params = useLocalSearchParams<{ count: string }>();
  const count  = parseInt(params.count ?? '4', 10) || 4;
  const { width } = useWindowDimensions();

  const [boxStates, setBoxStates] = useState<Record<number, number>>({});
  const { boxWidth } = calculateGridDimensions(width, count);
  const boxes       = useMemo(() => generateBoxes(count), [count]);
  const totalBoxes  = boxes.length;

  const handleBoxPress = (id: number) => {
    setBoxStates(prev => {
      const currentState = prev[id] || 0;
      return { ...prev, [id]: getNextColorState(currentState) };
    });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.headerBar}>
        <TouchableOpacity style={styles.backIconBtn} onPress={() => router.back()}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }} activeOpacity={0.7}>
          <Text style={styles.backIcon}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerBarTitle}>Cube Grid Details</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        {/* Header Info */}
        <View style={styles.headerCard}>
          <Text style={styles.title}>Dynamic Box Grid (N = {count})</Text>
          <Text style={styles.subtitle}>
            Tap any box to cycle its color: Default → Color 1 → Color 2 → Default
          </Text>
          <View style={styles.infoRow}>
            <View style={styles.badge}><Text style={styles.badgeText}>Input N: {count}</Text></View>
            <View style={styles.badge}><Text style={styles.badgeText}>Total Boxes: {totalBoxes}</Text></View>
            <View style={styles.badge}><Text style={styles.badgeText}>Cube: {count}³ = {count * count * count}</Text></View>
          </View>
        </View>

        {/* Color Legend */}
        <View style={styles.legendCard}>
          <Text style={styles.legendTitle}>Color Cycle Guide:</Text>
          <View style={styles.legendRow}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColorBox, { backgroundColor: '#FFFFFF', borderColor: '#CBD5E1' }]} />
              <Text style={styles.legendText}>1st: Default</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColorBox, { backgroundColor: '#4F46E5', borderColor: '#4338CA' }]} />
              <Text style={styles.legendText}>2nd: Indigo</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColorBox, { backgroundColor: '#10B981', borderColor: '#059669' }]} />
              <Text style={styles.legendText}>3rd: Emerald</Text>
            </View>
          </View>
        </View>

        {/* Box Grid */}
        <View style={styles.gridContainer}>
          {boxes.map(item => {
            const state     = boxStates[item.id] || 0;
            const boxStyle  = state === 1 ? styles.boxState1 : state === 2 ? styles.boxState2 : styles.boxState0;
            const textStyle = state === 1 ? styles.boxText1 : state === 2 ? styles.boxText2 : styles.boxText0;
            return (
              <TouchableOpacity key={item.id} activeOpacity={0.7}
                style={[styles.box, boxStyle, { width: boxWidth }]}
                onPress={() => handleBoxPress(item.id)}>
                <Text style={[styles.boxValue, textStyle]}>{item.value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Actions */}
        <View style={styles.buttonRow}>
          <Button label="🔄 Reset All Box Colors" onPress={() => setBoxStates({})} variant="outline" size="md" />
          <Button label="← Go Back to Dashboard"  onPress={() => router.back()} variant="primary" size="lg" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
