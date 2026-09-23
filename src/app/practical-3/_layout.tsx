import { Stack } from 'expo-router'
import { DrawerProvider } from '@/services/context/drawer-context'

export default function Practical3Layout() {
    return (
        <DrawerProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="detail" />
                <Stack.Screen name="screen-1" />
                <Stack.Screen name="screen-2" />
                <Stack.Screen name="screen-3" />
            </Stack>
        </DrawerProvider>
    )
}
