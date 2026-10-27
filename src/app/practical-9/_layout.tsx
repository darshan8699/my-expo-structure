import { Stack } from 'expo-router'

export default function Practical9Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="driver" />
            <Stack.Screen name="user" />
            <Stack.Screen name="features" />
            <Stack.Screen name="scroll-demo" />
            <Stack.Screen name="localization" />
        </Stack>
    )
}
