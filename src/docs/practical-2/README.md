# Practical 2: State Management & Architecture Lab

> **Module**: Practical 2  
> **Route Path**: `/practical-2`  
> **Source Directory**: `src/app/practical-2/` & `src/components/modules/practical-2/`  
> **Key Technologies**: Redux, Redux Toolkit, Zustand, MobX, React Context + useReducer, TanStack React Query, Axios REST, GraphQL Apollo, MMKV, Formik, Yup, Expo Router

---

## 1. Overview & Objectives

Practical 2 is a comprehensive architectural playground that demonstrates and compares all major state management strategies, data fetching libraries, local storage engines, and form validation libraries in modern React Native.

It is split into two primary sections:
1. **Interactive Demos (9 Live Playgrounds)**: Hands-on functional screens where you can increment counters, fire API queries, cache data, and mutate records live.
2. **Concept Explorer (13 In-Depth Modules)**: Detailed explanations with working examples for advanced state patterns, generator sagas, high-performance C++ JSI storage, and CI/CD tools.

---

## 2. Directory & File Structure

```text
src/
├── app/
│   └── practical-2/
│       ├── _layout.tsx                  # Stack layout with custom headers
│       ├── index.tsx                    # Lab Dashboard route (thin re-export)
│       ├── redux.tsx                    # Classic Redux playground route
│       ├── redux-toolkit.tsx            # Redux Toolkit (RTK) playground route
│       ├── zustand.tsx                  # Zustand hook-store playground route
│       ├── mobx.tsx                     # MobX observable playground route
│       ├── context.tsx                  # React Context playground route
│       ├── react-query.tsx              # TanStack Query playground route
│       ├── crud-api.tsx                 # Axios REST CRUD playground route
│       ├── graphql.tsx                  # GraphQL public query playground route
│       ├── redux-api.tsx                # Redux async thunk playground route
│       └── concepts/
│           └── [id].tsx                 # Dynamic route for concept modules
└── components/
    └── modules/
        └── practical-2/
            ├── DashboardScreen.tsx      # Lab Dashboard screen component
            ├── ReduxScreen.tsx          # Classic Redux playground component
            ├── ReduxToolkitScreen.tsx   # Redux Toolkit playground component
            ├── ZustandScreen.tsx        # Zustand playground component
            ├── MobXScreen.tsx           # MobX playground component
            ├── ContextScreen.tsx        # Context API playground component
            ├── ReactQueryScreen.tsx     # React Query playground component
            ├── CrudApiScreen.tsx        # CRUD REST API playground component
            ├── GraphQLScreen.tsx        # GraphQL playground component
            ├── ReduxApiScreen.tsx       # Redux Async Thunk playground component
            ├── ConceptScreen.tsx        # Dynamic concept explorer component
            ├── dashboard/               # Dashboard data, styles, and types
            ├── styles/                  # Screen-specific stylesheet definitions
            └── index.ts                 # Practical 2 module barrel export
```React Query demo styles
│       ├── crud-api/                    # CRUD API demo styles
│       ├── graphql/                     # GraphQL demo styles
│       └── redux-api/                   # Redux + API demo styles
└── components/
    └── common/
        └── basic-concepts/              # 13 Concept implementation components
            ├── debugging/               # React DevTools & Flipper
            ├── fastlane/                # Fastlane build automation
            ├── formik-yup/              # Formik & Yup schema validation
            ├── mmkv/                    # MMKV JSI synchronous storage
            ├── mobx/                    # MobX observable patterns
            ├── react-hook-form/         # React Hook Form uncontrolled inputs
            ├── react-query/             # React Query background syncing
            ├── redux-saga/              # Redux Saga generators
            ├── redux-thunk/             # Redux Thunk side-effects
            ├── redux-toolkit/           # RTK createSlice patterns
            ├── secure-storage/          # Expo SecureStore (Keychain/Keystore)
            ├── simple-redux/            # Pure Redux primitives
            └── zustand/                 # Zustand minimalism
```

---

## 3. Interactive Demos Breakdown

| Pattern | Technology | Core Mechanism | Location |
| :--- | :--- | :--- | :--- |
| **Redux (Classic)** | `redux`, `react-redux` | Pure reducers, `createStore`, manual action dispatching | [src/app/practical-2/redux.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/redux.tsx) |
| **Redux Toolkit** | `@reduxjs/toolkit` | `createSlice`, Immer mutable syntax, `useSelector` | [src/app/practical-2/redux-toolkit.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/redux-toolkit.tsx) |
| **Zustand** | `zustand` | Hook store `create((set) => ({ ... }))`, no boilerplate | [src/app/practical-2/zustand.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/zustand.tsx) |
| **MobX** | `mobx`, `mobx-react-lite` | `makeAutoObservable`, reactive tracking, `observer` HOC | [src/app/practical-2/mobx.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/mobx.tsx) |
| **Context API** | Native React | `createContext`, `useReducer`, zero external dependencies | [src/app/practical-2/context.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/context.tsx) |
| **React Query** | `@tanstack/react-query`| Server state caching, stale-while-revalidate, `useQuery` | [src/app/practical-2/react-query.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/react-query.tsx) |
| **CRUD API** | `axios` | REST calls (GET, POST, PUT, DELETE) with loading states | [src/app/practical-2/crud-api.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/crud-api.tsx) |
| **GraphQL** | Apollo / `fetch` | GraphQL syntax queries, field selection, response mapping | [src/app/practical-2/graphql.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/graphql.tsx) |
| **Redux + API** | RTK `createAsyncThunk` | Async lifecycle actions (`pending`, `fulfilled`, `rejected`) | [src/app/practical-2/redux-api.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/redux-api.tsx) |

---

## 4. Step-by-Step Implementation Guide

### Step 1: Setting up Zustand Store
Zustand is configured with zero context wrapping:
```typescript
import { create } from 'zustand'

interface CounterState {
    count: number
    increment: () => void
    decrement: () => void
    reset: () => void
}

export const useCounterStore = create<CounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}))
```

### Step 2: Setting up Redux Toolkit Slice
RTK uses `createSlice` to eliminate action creator and string action boilerplate:
```typescript
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        addByAmount: (state, action: PayloadAction<number>) => { state.value += action.payload },
    },
})

export const store = configureStore({ reducer: { counter: counterSlice.reducer } })
```

### Step 3: Setting up MobX Domain Store
MobX uses auto-observables and wraps components in `observer`:
```typescript
import { makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react-lite'

class CounterStore {
    count = 0
    constructor() {
        makeAutoObservable(this)
    }
    increment() { this.count++ }
    decrement() { this.count-- }
}

const counterStore = new CounterStore()

export const MobXComponent = observer(() => {
    return <Text>{counterStore.count}</Text>
})
```

### Step 4: Setting up React Query Server State
Query caching with TanStack React Query:
```typescript
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    return data
}

export function ReactQueryDemo() {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 1000 * 60 * 5, // 5 minutes cache
    })
    // UI rendering...
}
```

### Step 5: Dynamic Routing for Concept Modules
In [src/app/practical-2/concepts/[id].tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-2/concepts/[id].tsx), Expo Router extracts `id` via `useLocalSearchParams` and dynamically displays the targeted concept component:

```tsx
export default function P2ConceptScreen() {
    const { id } = useLocalSearchParams<{ id: ConceptId }>()
    const mapped = id ? CONCEPT_MAP[id] : null
    const ActiveComponent = mapped ? mapped.component : null

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: mapped?.title || 'Concept View' }} />
            {ActiveComponent ? <ActiveComponent /> : <View />}
        </View>
    )
}
```

---

## 5. Architectural Comparison Matrix

| Feature | Classic Redux | Redux Toolkit | Zustand | MobX | React Context |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Boilerplate** | High | Low | Minimal | Minimal | Medium |
| **Bundle Impact** | Moderate | Moderate | Extremely Small | Moderate | None (Built-in) |
| **Mental Model** | Pure Actions/Reducers | Slice reducers | Hook closures | Class observables | Provider tree |
| **DevTools Support** | Excellent | Excellent | Redux DevTools | MobX DevTools | React DevTools |
| **Best For** | Legacy codebases | Enterprise Apps | Small to Large Apps | Complex domain logic | Static/rarely-changing global themes |

---

## 6. How to Run & Verify

```bash
# 1. Start the Expo server
npm start

# 2. Navigate directly to Practical 2
# From the home list, tap "Practical 2" or browse to:
# http://localhost:8081/practical-2
```

### Verification Checklist:
- [x] All 9 interactive demo cards launch their respective playground screens.
- [x] Counters increment, decrement, and reset in Redux, RTK, Zustand, MobX, and Context.
- [x] React Query fetches sample data, caches results, and refetches upon request.
- [x] CRUD API executes GET, POST, PUT, DELETE with visual status feedback.
- [x] All 13 Concept Explorer cards navigate into `concepts/[id]` and render without errors.
