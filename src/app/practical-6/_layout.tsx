import { Stack } from 'expo-router'

export default function Practical6Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="list-catalog" />
            <Stack.Screen name="count-variance" />
            <Stack.Screen name="sqlite-demo" />
            <Stack.Screen name="api-test" />
            <Stack.Screen name="file-upload" />
            <Stack.Screen name="live-tracking" />
        </Stack>
    )
}
