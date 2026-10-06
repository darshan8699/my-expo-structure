import { Stack } from 'expo-router'

export default function Practical5Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="splash" />
            <Stack.Screen name="single-user" />
            <Stack.Screen name="add-user" />
            <Stack.Screen name="update-user" />
            <Stack.Screen name="counter" />
        </Stack>
    )
}
