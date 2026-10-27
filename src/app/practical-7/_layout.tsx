import { Stack } from 'expo-router'

export default function Practical7Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="book-flight" />
            <Stack.Screen name="select-ticket" />
        </Stack>
    )
}
