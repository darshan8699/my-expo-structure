import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, FontFamily, FontSize, Spacing, verticalScale } from '@/common/theme';
import { StyleSheet } from 'react-native';

const tabStyles = StyleSheet.create({
  tabIconEmoji: {
    fontSize: 20,
  },
  tabBarLabel: {
    fontSize: FontSize.xs,
    fontFamily: FontFamily.medium,
    marginTop: 2,
  },
});

export default function P1TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarLabelStyle: tabStyles.tabBarLabel,
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
          tabBarIcon: () => <Text style={tabStyles.tabIconEmoji}>🏠</Text>,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: () => <Text style={tabStyles.tabIconEmoji}>👤</Text>,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => <Text style={tabStyles.tabIconEmoji}>⚙️</Text>,
        }}
      />
    </Tabs>
  );
}
