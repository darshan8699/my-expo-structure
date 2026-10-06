import type { ConceptCategory, DemoItem } from './p2-dashboard.type'

export const DEMOS: DemoItem[] = [
    {
        id: 'redux',
        title: 'Redux (Classic)',
        description: 'Counter with createStore, dispatch & subscribe',
        emoji: '🔄',
        color: '#764ABC',
        route: '/practical-2/redux',
    },
    {
        id: 'redux-toolkit',
        title: 'Redux Toolkit',
        description: 'Counter with createSlice, configureStore & useSelector',
        emoji: '🛠️',
        color: '#764ABC',
        route: '/practical-2/redux-toolkit',
    },
    {
        id: 'zustand',
        title: 'Zustand',
        description: 'Lightweight state management with zustand stores',
        emoji: '🐻',
        color: '#FF6B35',
        route: '/practical-2/zustand',
    },
    {
        id: 'mobx',
        title: 'MobX',
        description: 'Observable state with makeAutoObservable & reactions',
        emoji: '⚛️',
        color: '#FF7043',
        route: '/practical-2/mobx',
    },
    {
        id: 'context',
        title: 'Context API',
        description: 'Global state with React Context + useReducer',
        emoji: '🌐',
        color: '#00BCD4',
        route: '/practical-2/context',
    },
    {
        id: 'react-query',
        title: 'React Query',
        description: 'Fetch & cache server data with useQuery',
        emoji: '🔍',
        color: '#FF4154',
        route: '/practical-2/react-query',
    },
    {
        id: 'crud-api',
        title: 'CRUD API',
        description: 'Create, Read, Update, Delete via Axios',
        emoji: '📡',
        color: '#22C55E',
        route: '/practical-2/crud-api',
    },
    {
        id: 'graphql',
        title: 'GraphQL',
        description: 'Query a public GraphQL API with fetch()',
        emoji: '◈',
        color: '#E535AB',
        route: '/practical-2/graphql',
    },
    {
        id: 'redux-api',
        title: 'Redux + API',
        description: 'Async API calls using createAsyncThunk',
        emoji: '🚀',
        color: '#6C63FF',
        route: '/practical-2/redux-api',
    },
]

// Concept-only items from Practical 4 that have no interactive demo above.
// Overlapping topics (Redux, RTK, MobX, Zustand, React Query) are already
// covered by the interactive demos and are intentionally omitted here.
export const CONCEPT_CATEGORIES: ConceptCategory[] = [
    {
        title: 'State Management (Concepts)',
        items: [
            {
                id: 'simple-redux',
                title: 'Simple Redux',
                subtitle: 'Store, Actions, Reducers, Dispatcher + action log',
                icon: '⚛️',
            },
            {
                id: 'redux-toolkit-concept',
                title: 'Redux Toolkit (Concept)',
                subtitle: 'createSlice, configureStore, TextInput demo',
                icon: '🛠️',
            },
            {
                id: 'mobx-concept',
                title: 'MobX (Concept)',
                subtitle: 'Observable state tracking, auto reactivity',
                icon: '📈',
            },
            {
                id: 'zustand-concept',
                title: 'Zustand (Concept)',
                subtitle: 'Minimalist hook state, no context boilerplate',
                icon: '🐻',
            },
            {
                id: 'react-query-concept',
                title: 'React Query (Concept)',
                subtitle: 'Server caching, background syncing, stale states',
                icon: '📡',
            },
        ],
    },
    {
        title: 'Advanced Redux',
        items: [
            {
                id: 'redux-thunk',
                title: 'Redux Thunk',
                subtitle: 'Async side-effect action creators',
                icon: '⚡',
            },
            {
                id: 'redux-saga',
                title: 'Redux Saga',
                subtitle: 'Generators (function*), complex workflows',
                icon: '🌀',
            },
        ],
    },
    {
        title: 'Local Storage',
        items: [
            {
                id: 'mmkv',
                title: 'MMKV Storage',
                subtitle: 'Ultra-fast synchronous JSI file mapping',
                icon: '💾',
            },
            {
                id: 'secure-storage',
                title: 'Secure Storage',
                subtitle: 'Encrypted keychain credentials storage',
                icon: '🔒',
            },
        ],
    },
    {
        title: 'Form Validation',
        items: [
            {
                id: 'react-hook-form',
                title: 'React Hook Form',
                subtitle: 'Performance refs, uncontrolled inputs',
                icon: '📋',
            },
            {
                id: 'formik-yup',
                title: 'Formik & Yup',
                subtitle: 'Controlled forms, schema rules matching',
                icon: '✔️',
            },
        ],
    },
    {
        title: 'Utilities & CI/CD',
        items: [
            {
                id: 'debugging',
                title: 'React DevTools / Flipper',
                subtitle: 'Component profiler, debug console triggers',
                icon: '🐞',
            },
            {
                id: 'fastlane',
                title: 'Fastlane Automation',
                subtitle: 'Fastfile, lane compile pipelines simulator',
                icon: '🚀',
            },
        ],
    },
]
