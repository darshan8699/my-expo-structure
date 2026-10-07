# Extra Documentation: Concepts & Developer Tools

> **Directory**: `src/docs/extra/`  
> **Scope**: Architecture References, Native Development Builds, Storage, Validation, Debugging, CI/CD, and Quality Tooling

This directory houses all foundational architectural guides and developer tooling documentation outside the individual practical modules.

---

## 1. Directory Structure

```text
src/docs/extra/
├── README.md                          # Extra documentation overview (this file)
├── concepts/                          # Core architectural and pattern deep-dives
│   ├── DEVELOPMENT_BUILDS.md          # Native Expo Dev Builds, EAS Build, and prebuild
│   ├── debugging/                     # Debugging toolchains
│   │   ├── flipper.md                 # Flipper integration & network inspection
│   │   └── react-devtools.md          # React DevTools standalone setup & profiling
│   ├── queries/                       # Server data management & querying
│   │   ├── graphql.md                 # GraphQL queries, mutations & schema codegen
│   │   └── react-query.md             # TanStack React Query caching & invalidation
│   ├── state-management/              # Comparative state management analyses
│   │   ├── overview.md                # Comprehensive state management decision guide
│   │   ├── simple-redux.md            # Foundational Redux store, actions & reducers
│   │   ├── redux-toolkit.md           # Modern Redux Toolkit (RTK) with createSlice
│   │   ├── redux-thunk.md             # Async action dispatching with Redux Thunk
│   │   ├── redux-saga.md              # Generator-based side-effects with Redux Saga
│   │   ├── zustand.md                 # Lightweight hook stores with Zustand
│   │   └── mobx.md                    # Transparent reactive programming with MobX
│   ├── storage/                       # Client persistence engines
│   │   ├── mmkv.md                    # Ultra-fast synchronous C++ JSI MMKV storage
│   │   └── secure-storage.md          # Keychain (iOS) & Keystore (Android) encryption
│   └── validation/                    # Form validation strategies
│       ├── formik-yup.md              # Controlled form state with Yup schemas
│       └── react-hook-form.md         # High-performance uncontrolled form handling
└── tools/                             # Developer infrastructure & CI/CD
    ├── docs.md                        # Developer tooling summary matrix
    ├── cicd/                          # GitHub Actions & EAS automated pipelines
    │   └── cicd.md                    # Workflows for PR lint, tests & release builds
    ├── git/                           # Version control standards
    │   └── git.md                     # Conventional commits & semantic-release automation
    ├── husky/                         # Git hooks automation
    │   └── husky.md                   # Pre-commit linting & commit-msg validation
    ├── maestro/                       # Mobile E2E UI testing
    │   └── maestro.md                 # Declarative cross-platform smoke & regression flows
    └── sentry/                        # Production monitoring
        └── sentry.md                  # Sentry crash reporting, breadcrumbs & performance
```

---

## 2. Concepts Index

### [Development Builds](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/DEVELOPMENT_BUILDS.md)
Comprehensive handbook on transitioning from Expo Go to native Development Builds (`expo-dev-client`). Explains native modules (MMKV, Nitro), EAS Build configuration, Android Studio / Xcode local builds, and troubleshooting native link issues.

### [State Management Guides](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/state-management/overview.md)
Detailed theoretical and comparative analysis between:
- [Simple Redux](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/state-management/simple-redux.md)
- [Redux Toolkit](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/state-management/redux-toolkit.md)
- [Redux Thunk](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/state-management/redux-thunk.md)
- [Redux Saga](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/state-management/redux-saga.md)
- [Zustand](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/state-management/zustand.md)
- [MobX](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/state-management/mobx.md)

### [Data Fetching & Queries](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/queries/react-query.md)
- [React Query (TanStack Query)](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/queries/react-query.md): Server state, cache invalidation, polling, pagination, and retry policies.
- [GraphQL](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/queries/graphql.md): Schema querying, Apollo client, and automated code generation with `@graphql-codegen`.

### [Storage Engines](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/storage/mmkv.md)
- [MMKV](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/storage/mmkv.md): Synchronous key-value storage powered by Tencent's C++ library via JSI. Up to 30x faster than Async Storage.
- [Secure Storage](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/storage/secure-storage.md): Encrypted hardware-backed storage for authentication tokens and sensitive credentials using iOS Keychain and Android Keystore.

### [Form Validation](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/validation/formik-yup.md)
- [Formik & Yup](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/validation/formik-yup.md): Declarative form schemas with controlled inputs.
- [React Hook Form](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/validation/react-hook-form.md): High performance uncontrolled inputs minimizing re-renders.

### [Debugging Tooling](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/debugging/react-devtools.md)
- [React DevTools](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/debugging/react-devtools.md): Standalone inspector for component hierarchies, props, and performance flamegraphs.
- [Flipper](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/debugging/flipper.md): Desktop debugging platform for network logging, crash logs, and native layout inspection.

---

## 3. Developer Tools Index

### [Tools Summary Matrix](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/tools/docs.md)
Summary table of all developer-facing tools configured in this project.

### [CI/CD Workflows](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/tools/cicd/cicd.md)
Automated GitHub Actions pipelines for:
- Quality verification on Pull Requests (`lint`, `test`, `build:web`).
- Automated Semantic Release triggering version tags and changelog updates.
- Automated EAS Build triggers for Android & iOS binary compilation.

### [Git & Semantic Release](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/tools/git/git.md)
Conventional Commits standard enforced via `@commitlint/config-conventional` and automated semantic versioning (`major`, `minor`, `patch`) powered by `@semantic-release`.

### [Husky Git Hooks](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/tools/husky/husky.md)
Local developer git hooks ensuring:
- `pre-commit`: Automatically executes `lint-staged` and Prettier formatting on staged files.
- `commit-msg`: Enforces Conventional Commit syntax before the commit is finalized.

### [Maestro E2E Testing](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/tools/maestro/maestro.md)
Declarative end-to-end mobile testing using Maestro YAML flows (`.maestro/`).

### [Sentry Error Monitoring](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/tools/sentry/sentry.md)
Crash tracking and application performance monitoring using `@sentry/react-native`.
