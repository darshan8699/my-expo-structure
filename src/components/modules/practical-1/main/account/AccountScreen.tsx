import { Button } from '@/components/common'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './account.style'

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
