import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Button } from '@/components/common'
import { Colors, FontFamily, FontSize, Spacing, BorderRadius } from '@/common/theme'

export default function AccountScreen() {
    const handleLogout = () => {
        router.replace('/practical-1')
    }

    const handleBackToHome = () => {
        router.push('/')
    }

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Text style={styles.title}>My Account</Text>
            <Text style={styles.subtitle}>Profile details and information</Text>

            <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>John Doe</Text>
                <Text style={styles.infoSub}>john.doe@example.com</Text>
            </View>

            <View style={styles.actions}>
                <Button label="Log Out" variant="outline" onPress={handleLogout} />
                <Button label="Back to Home" variant="secondary" onPress={handleBackToHome} />
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
    infoCard: {
        backgroundColor: Colors.surface,
        padding: Spacing.md,
        borderRadius: BorderRadius.md,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    infoTitle: {
        fontSize: FontSize.lg,
        fontFamily: FontFamily.semiBold,
        color: Colors.text,
    },
    infoSub: {
        fontSize: FontSize.sm,
        color: Colors.textMuted,
        marginTop: Spacing.xs,
    },
    actions: {
        marginTop: Spacing.xl,
        gap: Spacing.md,
    },
})
