# MyExpoStructure 🚀

A comprehensive, production-ready React Native architecture built on **Expo SDK 57**, featuring modern file-based routing (`expo-router`), multi-engine state management, REST & GraphQL integrations, native development build configurations, and practical reference implementations.

---

## 📚 Documentation

Detailed documentation is organized under the [`src/docs/`](src/docs/README.md) directory:

- **[Documentation Hub](src/docs/README.md)** — Central directory and index of all guides.
- **[Practical 1: Auth Flow & Dashboard Tabs](src/docs/practical-1/README.md)** — Login, Sign Up, Forgot Password & Bottom Tabs.
- **[Practical 2: State Management & Architecture Lab](src/docs/practical-2/README.md)** — Redux, RTK, Zustand, MobX, Context, React Query, GraphQL, MMKV, and Formik.
- **[Practical 3: Dynamic Grid Generator & Navigation Lab](src/docs/practical-3/README.md)** — Dynamic $N \times N$ grid, 3-state color cycling, Custom Left Drawer, and Tabs.
- **[Practical 4: Production Auth Module with REST API](src/docs/practical-4/README.md)** — Real backend auth API, atomic components, and responsive scaling.
- **[Practical 5: Full CRUD Architecture & Redux State](src/docs/practical-5/README.md)** — JSONPlaceholder user management, Redux state flow, and Counter demo.
- **[Extra: Concepts & Developer Tools](src/docs/extra/README.md)** — Development builds, storage, validation, CI/CD, Husky, Maestro, and Sentry.

---

## 🏃 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
# Standard Expo dev server
npm start

# With Metro cache cleared
npm run start:clear

# Development client (supports native modules such as MMKV)
npm run start:dev
```

### 3. Run on Target Platform
```bash
# Run on iOS Simulator
npm run ios

# Run on Android Emulator
npm run android

# Run in Web Browser
npm run web
```

---

## 🧪 Testing & Linting

```bash
# Run Jest unit test suite
npm test

# Run tests with coverage
npm run test:coverage

# Lint codebase
npm run lint

# Check code formatting
npm run format:check
```

---

## 🏛️ Project Structure

```text
├── src/
│   ├── apis/                    # API client configurations & endpoints
│   ├── app/                     # File-based navigation routes & layouts (Expo Router)
│   ├── assets/                  # Centralized images, icons, and static assets
│   ├── components/              # UI components and feature modules
│   │   ├── common/              # Shared reusable design system components
│   │   └── modules/             # Feature screens, business logic & UI modules
│   │       ├── home/            # Home screen module
│   │       ├── explore/         # Explore screen module
│   │       ├── practical-1/     # Practical 1 auth & dashboard module
│   │       ├── practical-2/     # Practical 2 state management lab module
│   │       ├── practical-3/     # Practical 3 dynamic grid & drawer module
│   │       ├── practical-4/     # Practical 4 production auth module
│   │       └── practical-5/     # Practical 5 full CRUD & Redux module
│   ├── docs/                    # Complete project & practical documentation
│   │   ├── practical-1/         # Practical 1 documentation & steps
│   │   ├── practical-2/         # Practical 2 documentation & steps
│   │   ├── practical-3/         # Practical 3 documentation & steps
│   │   ├── practical-4/         # Practical 4 documentation & steps
│   │   ├── practical-5/         # Practical 5 documentation & steps
│   │   ├── extra/               # Concepts, native builds, and developer tooling
│   │   └── README.md            # Documentation portal
│   ├── services/                # Context providers, hooks, and external services
│   └── utils/                   # Theme tokens, formatters, and utility functions
├── __tests__/                   # Jest automated test suites
├── .github/workflows/           # CI/CD automation pipelines
└── app.json                     # Expo configuration
```
