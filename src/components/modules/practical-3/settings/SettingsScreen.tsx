import CustomDrawer from '@/components/modules/custom-drawer/custom-drawer'
import { useDrawer } from '@/services/context/drawer-context'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './settings.style'

export default function SettingsScreen() {
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
