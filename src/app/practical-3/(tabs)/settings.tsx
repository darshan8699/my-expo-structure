import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDrawer } from '@/services/context/drawer-context'
import CustomDrawer from '@/components/modules/custom-drawer/custom-drawer'
import { Colors, FontSize, Spacing, verticalScale, BorderRadius } from '@/common/theme'

export default function P3SettingsScreen() {
    const { openDrawer } = useDrawer()

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <CustomDrawer />
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity
                        style={styles.headerButton}
                        onPress={openDrawer}
                        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.headerIcon}>☰</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Settings</Text>
                </View>
                <View style={styles.headerRightPlaceholder} />
            </View>
            <View style={styles.blankContainer} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: Colors.surface },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Spacing.lg,
        paddingVertical: verticalScale(10),
        minHeight: verticalScale(54),
        backgroundColor: Colors.surface,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    headerLeft: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
    headerButton: { padding: Spacing.sm },
    headerIcon: { fontSize: FontSize.xxl, color: Colors.text, fontWeight: '700' },
    headerTitle: { fontSize: FontSize.lg, fontWeight: '700', color: Colors.text },
    headerRightPlaceholder: { width: 32 },
    blankContainer: { flex: 1, backgroundColor: Colors.background },
})
