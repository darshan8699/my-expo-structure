import { Colors } from '@/utils/common/theme'
import { Stack } from 'expo-router'

export default function Practical4Layout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary },
                headerTintColor: '#ffffff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Practical 4: Architecture & Concepts',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="concepts/[id]"
                options={{
                    headerShown: true,
                }}
            />
        </Stack>
    )
}
