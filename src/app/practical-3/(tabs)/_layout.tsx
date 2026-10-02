import { Colors, FontFamily, FontSize, Spacing, verticalScale } from '@/utils/common/theme'
import { Tabs } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function P3TabsLayout() {
    const insets = useSafeAreaInsets()
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.textMuted,
                tabBarLabelStyle: { fontSize: FontSize.xs, fontFamily: FontFamily.medium, marginTop: 2 },
                tabBarStyle: {
                    backgroundColor: Colors.surface,
                    borderTopColor: Colors.border,
                    borderTopWidth: StyleSheet.hairlineWidth,
                    paddingTop: Spacing.xs,
                    height: verticalScale(54) + insets.bottom,
                    paddingBottom: insets.bottom > 0 ? insets.bottom : Spacing.xs + 2,
                },
            }}
        >
            <Tabs.Screen
                name="dashboard"
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text>,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: () => <Text style={{ fontSize: 20 }}>⚙️</Text>,
                }}
            />
        </Tabs>
    )
}
