import { Stack } from 'expo-router';
import { Colors, FontFamily } from '@/common/theme';

export default function Practical2Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.surface },
        headerTitleStyle: {
          fontFamily: FontFamily.semiBold,
          color: Colors.text,
        },
        headerTintColor: Colors.primary,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Practical 2 — State Management' }} />
      <Stack.Screen name="redux" options={{ title: 'Redux (Classic)' }} />
      <Stack.Screen name="redux-toolkit" options={{ title: 'Redux Toolkit' }} />
      <Stack.Screen name="zustand" options={{ title: 'Zustand' }} />
      <Stack.Screen name="mobx" options={{ title: 'MobX' }} />
      <Stack.Screen name="context" options={{ title: 'Context API' }} />
      <Stack.Screen name="react-query" options={{ title: 'React Query' }} />
      <Stack.Screen name="crud-api" options={{ title: 'CRUD API (Axios)' }} />
      <Stack.Screen name="graphql" options={{ title: 'GraphQL' }} />
      <Stack.Screen name="redux-api" options={{ title: 'Redux + API' }} />
    </Stack>
  );
}
