import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, Animated, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { useDrawer } from '../../../services/context/drawer-context'
import { styles, DRAWER_WIDTH } from './custom-drawer.style'

const CustomDrawer: React.FC = () => {
    const { isOpen, closeDrawer } = useDrawer()
    const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current
    const backdropOpacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (isOpen) {
            Animated.parallel([
                Animated.timing(translateX, {
                    toValue: 0,
                    duration: 280,
                    useNativeDriver: true,
                }),
                Animated.timing(backdropOpacity, {
                    toValue: 1,
                    duration: 280,
                    useNativeDriver: true,
                }),
            ]).start()
        } else {
            Animated.parallel([
                Animated.timing(translateX, {
                    toValue: -DRAWER_WIDTH,
                    duration: 220,
                    useNativeDriver: true,
                }),
                Animated.timing(backdropOpacity, {
                    toValue: 0,
                    duration: 220,
                    useNativeDriver: true,
                }),
            ]).start()
        }
    }, [isOpen, translateX, backdropOpacity])

    if (!isOpen) return null

    const handleItemPress = (path: string) => {
        closeDrawer()
        router.push(path as any)
    }

    return (
        <View style={styles.container} pointerEvents="box-none">
            {/* Backdrop */}
            <Animated.View
                style={[styles.backdrop, { opacity: backdropOpacity }]}
                pointerEvents={isOpen ? 'auto' : 'none'}
            >
                <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={closeDrawer} />
            </Animated.View>

            {/* Drawer Panel */}
            <Animated.View style={[styles.drawerPanel, { transform: [{ translateX }] }]}>
                {/* Header */}
                <View style={styles.header}>
                    <View style={styles.headerInfo}>
                        <Text style={styles.headerTitle}>Navigation</Text>
                        <Text style={styles.headerSubtitle}>Practical 3</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={closeDrawer}
                        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.closeButtonText}>✕</Text>
                    </TouchableOpacity>
                </View>

                {/* Drawer Content */}
                <ScrollView style={styles.menuList}>
                    {/* Custom Drawer Screens Section */}
                    <Text style={styles.sectionTitle}>Drawer Screens</Text>

                    <TouchableOpacity
                        style={styles.menuItem}
                        activeOpacity={0.7}
                        onPress={() => handleItemPress('/practical-3/screen-1')}
                    >
                        <Text style={styles.menuItemIcon}>📄</Text>
                        <Text style={styles.menuItemText}>Screen 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuItem}
                        activeOpacity={0.7}
                        onPress={() => handleItemPress('/practical-3/screen-2')}
                    >
                        <Text style={styles.menuItemIcon}>📄</Text>
                        <Text style={styles.menuItemText}>Screen 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuItem}
                        activeOpacity={0.7}
                        onPress={() => handleItemPress('/practical-3/screen-3')}
                    >
                        <Text style={styles.menuItemIcon}>📄</Text>
                        <Text style={styles.menuItemText}>Screen 3</Text>
                    </TouchableOpacity>

                    <View style={styles.divider} />

                    {/* Navigation Section */}
                    <Text style={styles.sectionTitle}>Tabs</Text>

                    <TouchableOpacity
                        style={styles.menuItem}
                        activeOpacity={0.7}
                        onPress={() => handleItemPress('/practical-3/(tabs)/dashboard')}
                    >
                        <Text style={styles.menuItemIcon}>🏠</Text>
                        <Text style={styles.menuItemText}>Dashboard</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.menuItem}
                        activeOpacity={0.7}
                        onPress={() => handleItemPress('/practical-3/(tabs)/settings')}
                    >
                        <Text style={styles.menuItemIcon}>⚙️</Text>
                        <Text style={styles.menuItemText}>Settings</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Practical 3 • Expo Router</Text>
                </View>
            </Animated.View>
        </View>
    )
}

export default CustomDrawer
