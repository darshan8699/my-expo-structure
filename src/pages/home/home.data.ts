import type { PracticalItem } from './home.type';

export const PAGE_SIZE = 5;

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
      'State Management: Redux · Zustand · MobX · Context · React Query · API Demos',
    route: '/practical-2',
  },
  {
    id: '3',
    title: 'Practical 3',
    description:
      'Dynamic Cube Demo: TextInput · TabBar (Dashboard & Blank Settings) · Custom Left Drawer',
    route: '/practical-3/(tabs)/dashboard',
  },
  {
    id: '4',
    title: 'Practical 4',
    description:
      'Native Device Modules: Camera · Geolocation · Biometrics & Keychain',
    comingSoon: true,
  },
  {
    id: '5',
    title: 'Practical 5',
    description:
      'Offline Storage & Database: MMKV Fast Key-Value · SQLite & WatermelonDB',
    comingSoon: true,
  },
  {
    id: '6',
    title: 'Practical 6',
    description:
      'Background Tasks: Headless JS · Background Fetch · Push Notifications',
    comingSoon: true,
  },
  {
    id: '7',
    title: 'Practical 7',
    description:
      'Performance Optimization: FlashList · Memory Leak Profiling · Hermes Engine',
    comingSoon: true,
  },
  {
    id: '8',
    title: 'Practical 8',
    description:
      'DevOps & Publishing: Fastlane CI/CD · CodePush OTA Updates · App Bundles',
    comingSoon: true,
  },
  {
    id: '9',
    title: 'Practical 9',
    description:
      'Deep Linking & Universal Links: Branch · React Navigation Linking · URI Schemes',
    comingSoon: true,
  },
  {
    id: '10',
    title: 'Practical 10',
    description:
      'Localization (i18n): Multi-Language · RTL Support · Date & Currency Formatters',
    comingSoon: true,
  },
  {
    id: '11',
    title: 'Practical 11',
    description:
      'Advanced Security: SSL Pinning · Biometric Auth · Secure Storage Encryption',
    comingSoon: true,
  },
  {
    id: '12',
    title: 'Practical 12',
    description:
      'Design System & Testing: Jest · React Native Testing Library · Storybook',
    comingSoon: true,
  },
];
