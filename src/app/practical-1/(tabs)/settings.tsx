import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors, FontFamily, FontSize, Spacing, BorderRadius } from '@/common/theme'

export default function P1SettingsScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>Configure your preferences</Text>

            <View style={styles.card}>
                <Text style={styles.itemText}>Notifications</Text>
                <Text style={styles.itemVal}>Enabled</Text>
            </View>

            <View style={[styles.card, styles.mt]}>
                <Text style={styles.itemText}>Dark Mode</Text>
                <Text style={styles.itemVal}>System Default</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: Spacing.lg,
    },
    title: {
        fontSize: FontSize.xxl,
        fontFamily: FontFamily.bold,
        color: Colors.text,
    },
    subtitle: {
        fontSize: FontSize.sm,
        fontFamily: FontFamily.regular,
        color: Colors.textMuted,
        marginBottom: Spacing.xl,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.surface,
        padding: Spacing.md,
        borderRadius: BorderRadius.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    mt: {
        marginTop: Spacing.sm,
    },
    itemText: {
        fontSize: FontSize.md,
        fontFamily: FontFamily.medium,
        color: Colors.text,
    },
    itemVal: {
        fontSize: FontSize.md,
        color: Colors.textMuted,
    },
})
