import type { PracticalItem } from './home.type'

export const PAGE_SIZE = 10

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
    {
        id: '6',
        title: 'Practical 6',
        description:
            'Inventory & Catalog: List Catalog · Count Variance · SQLite DB · API Test · File Upload · Live Tracking Screen',
        route: '/practical-6',
    },
    {
        id: '7',
        title: 'Practical 7',
        description: 'Flight Booking UI: Flight Discovery · Book Flight · Ticket Selection · Responsive Card Layout',
        route: '/practical-7',
    },
    {
        id: '8',
        title: 'Practical 8',
        description:
            'Image RGB Compare: Multi-Image Selector · Camera & Gallery Picker · Color Extraction & Delta Analysis',
        route: '/practical-8',
    },
    {
        id: '9',
        title: 'Practical 9',
        description:
            'Live GPS Tracking: Driver & User Apps · Real-time PubNub Pub/Sub · Map Route Simulation · Biometrics & PDF',
        route: '/practical-9',
    },
]
