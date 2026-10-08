import type { PracticalItem } from './home.type'

export const PAGE_SIZE = 5

export const PRACTICALS: PracticalItem[] = [
    {
        id: '1',
        title: 'Practical 1',
        description: 'Auth Flow: Login · Signup · Forgot Password + Dashboard Tabs',
        route: '/practical-1',
    },
    {
        id: '2',
        title: 'Practical 2',
        description:
            'State & Architecture: Redux · Zustand · MobX · Context · React Query · API Demos · Redux Thunk/Saga · MMKV · Formik · Fastlane',
        route: '/practical-2',
    },
    {
        id: '3',
        title: 'Practical 3',
        description: 'Dynamic Cube Demo: TextInput · TabBar (Dashboard & Blank Settings) · Custom Left Drawer',
        route: '/practical-3/(tabs)/dashboard',
    },
    {
        id: '4',
        title: 'Practical 4',
        description: 'Auth Demo: Login & Registration with real API calls (aavatto.com)',
        route: '/practical-4',
    },
    {
        id: '5',
        title: 'Practical 5',
        description:
            'CRUD Operations & Redux: Users API (JSONPlaceholder) · Create · Read · Update · Delete · Counter Demo',
        route: '/practical-5',
    },
]
