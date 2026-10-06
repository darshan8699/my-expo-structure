import { Stack } from 'expo-router'

export default function Practical4Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="registration" />
        </Stack>
    )
}
