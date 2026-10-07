# MyExpoStructure Documentation Hub 📚

Welcome to the central documentation hub for **MyExpoStructure**. This documentation is organized into focused, practical-wise guides alongside foundational architectural and developer tooling documents located inside `src/docs/`.

---

## 🧭 Navigation Matrix

```
src/docs/
├── README.md                          # Master documentation portal (this file)
├── practical-1/                       # Practical 1: Authentication & Dashboard Tabs
│   └── README.md
├── practical-2/                       # Practical 2: State Management & Architecture Lab
│   └── README.md
├── practical-3/                       # Practical 3: Dynamic Grid Generator & Navigation Lab
│   └── README.md
├── practical-4/                       # Practical 4: Production Auth Module with REST API
│   └── README.md
├── practical-5/                       # Practical 5: Full CRUD Architecture & Redux State
│   └── README.md
└── extra/                             # Extra Architecture Concepts & Developer Tooling
    ├── README.md                      # Overview of extra documentation
    ├── concepts/                      # Core engineering patterns & native build guides
    │   ├── DEVELOPMENT_BUILDS.md      # Native development builds with expo-dev-client
    │   ├── debugging/                 # React DevTools & Flipper
    │   ├── queries/                   # TanStack React Query & GraphQL
    │   ├── state-management/          # Redux, RTK, Zustand, MobX, Thunk, Saga
    │   ├── storage/                   # MMKV JSI & SecureStore
    │   └── validation/                # React Hook Form & Formik + Yup
    └── tools/                         # Developer infrastructure & CI/CD
        ├── cicd/                      # GitHub Actions & EAS workflows
        ├── git/                       # Conventional commits & semantic release
        ├── husky/                     # Git hooks (pre-commit & commit-msg)
        ├── maestro/                   # Mobile E2E UI testing
        ├── sentry/                    # Sentry crash reporting & performance
        └── docs.md                    # Tools summary matrix
```

---

## 📱 Practical Modules Directory

| Module | Route | Key Concepts & Features | Documentation |
| :--- | :--- | :--- | :--- |
| **Practical 1** | `/practical-1` | **Auth Flow & Tabbed Dashboard**<br>• Sign In, Sign Up, Password Recovery<br>• Form validation (regex email, password min length)<br>• Persistent bottom tabs with safe area handling<br>• Dashboard metrics cards and activity feed<br>• Session logout workflow | [📖 Practical 1 Guide](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/practical-1/README.md) |
| **Practical 2** | `/practical-2` | **State Management & Architecture Lab**<br>• 9 interactive playgrounds: Redux Classic, RTK, Zustand, MobX, Context, React Query, CRUD API, GraphQL, Redux+API<br>• 13 concept explorer modules via dynamic Expo Router `[id].tsx`<br>• Comparative trade-offs and performance analysis | [📖 Practical 2 Guide](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/practical-2/README.md) |
| **Practical 3** | `/practical-3/(tabs)/dashboard` | **Dynamic Grid Generator & Navigation Lab**<br>• Dynamic $N \times N$ box grid generator ($N \in [1, 10]$)<br>• Responsive screen width calculation formula<br>• 3-state color cycling algorithm (Slate → Indigo → Emerald)<br>• Custom animated slide-in Left Drawer with Context API<br>• Multi-level routing (Stack + Tabs + Drawer) | [📖 Practical 3 Guide](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/practical-3/README.md) |
| **Practical 4** | `/practical-4` | **Production Auth Module with REST API**<br>• Live remote REST backend (`aavatto.com`)<br>• Endpoints: `POST /login` and `POST /register`<br>• Atomic UI design system (`ButtonComponent`, `TextInputComponent`, `TextComponent`)<br>• Device-agnostic responsive scaling utility (`sizes.ts`)<br>• Password visibility toggle with vector icons<br>• 10-digit phone & email format validation<br>• Automated Jest unit test suite | [📖 Practical 4 Guide](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/practical-4/README.md) |
| **Practical 5** | `/practical-5` | **Full CRUD Architecture & Redux State**<br>• Complete CRUD operations with JSONPlaceholder Users API<br>• Centralized Axios service layer (`apiService`)<br>• Pure Redux store architecture (Store, Actions, Types, Reducers)<br>• Animated splash launch screen with auto-transition<br>• User Directory (List, Detail view, Add user, Edit user, Delete user)<br>• Stateful Redux Counter Demo<br>• Automated Jest unit test suite | [📖 Practical 5 Guide](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/practical-5/README.md) |

---

## 🛠️ Extra Concepts & Tooling

All supplementary guides, developer tools, and advanced architectural reference documents are centralized under [`src/docs/extra/`](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/README.md):

- **[Extra Overview](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/README.md)**: Full table of contents for extra topics.
- **[Native Development Builds](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/DEVELOPMENT_BUILDS.md)**: Detailed handbook on `expo-dev-client`, EAS build profiles, native module compiling, and Xcode / Android Studio setups.
- **[State Management Guide](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/state-management/overview.md)**: Deep dive into Simple Redux, RTK, Zustand, MobX, Thunk, and Saga.
- **[High-Performance Storage (MMKV & SecureStore)](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/storage/mmkv.md)**: Synchronous Nitro C++ key-value storage vs Encrypted Hardware Keychain.
- **[Form Validation](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/concepts/validation/formik-yup.md)**: Comparing Formik + Yup vs React Hook Form.
- **[CI/CD & Release Pipeline](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/tools/cicd/cicd.md)**: GitHub Actions workflows, EAS build triggers, and automated semantic releases.
- **[Quality & Git Tooling](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/docs/extra/tools/husky/husky.md)**: Husky hooks, Commitlint, Maestro E2E mobile testing, and Sentry telemetry.

---

## 🚀 Running the Project

### Start Development Server
```bash
# Standard development server
npm start

# Clear Metro cache before starting
npm run start:clear

# Run in Development Build mode (required for native modules like MMKV)
npm run start:dev
```

### Launch on Platforms
```bash
# iOS Simulator
npm run ios

# Android Emulator / Device
npm run android

# Web Browser
npm run web
```

---

## 🧪 Testing & Code Quality

```bash
# Run all unit tests
npm test

# Run tests with code coverage report
npm run test:coverage

# Run TypeScript & ESLint validation
npm run lint

# Automatically fix lint issues
npm run lint:fix

# Check Prettier code formatting
npm run format:check

# Run Expo environment doctor
npm run doctor
```
