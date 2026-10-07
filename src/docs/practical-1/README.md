# Practical 1: Authentication Flow & Dashboard Tabs

> **Module**: Practical 1  
> **Route Path**: `/practical-1`  
> **Source Directory**: `src/app/practical-1/` & `src/pages/practical-1/`  
> **Key Technologies**: Expo Router (Stack & Tabs), React Native, Safe Area Context, TypeScript

---

## 1. Overview & Objectives

Practical 1 implements an end-to-end user authentication workflow paired with a post-login tabbed dashboard. It demonstrates:

1. **Stack Navigation**: Seamless progression through Authentication routes (`Login`, `Sign Up`, `Forgot Password`).
2. **Form Validation**: Real-time validation for email formats, password minimum lengths, and password matching.
3. **Tab Navigation**: Persistent bottom tab bar with safe-area handling (`Dashboard`, `Account`, `Settings`).
4. **Interactive Dashboard**: Modular dashboard cards showing overview statistics, avatar badge, and recent activity logs.
5. **Session Teardown**: Log out workflow resetting navigation back to the authentication root.

---

## 2. Directory & File Structure

```text
src/
├── app/
│   └── practical-1/
│       ├── _layout.tsx               # Root Stack layout for Practical 1
│       ├── index.tsx                 # Login screen (Entry point)
│       ├── signup.tsx                # User Registration screen
│       ├── forgot-password.tsx       # Password recovery screen
│       └── (tabs)/                   # Authenticated tab group
│           ├── _layout.tsx           # Bottom Tabs configuration & styling
│           ├── dashboard.tsx         # Dashboard with stats & activity
│           ├── account.tsx           # User profile & logout screen
│           └── settings.tsx          # Preferences & configuration screen
└── pages/
    └── practical-1/
        ├── auth/
        │   ├── login/
        │   │   └── login.style.ts    # Styles for Login screen
        │   ├── signup/
        │   │   └── signup.style.ts   # Styles for Registration screen
        │   └── forgot-password/
        │       └── forgot-password.style.ts # Styles for Forgot Password screen
        └── main/
            └── dashboard/
                ├── dashboard.data.ts # Mock data for stats and activity
                ├── dashboard.style.ts# Styles for Dashboard layout & cards
                └── dashboard.type.ts # TypeScript interfaces for dashboard
```

---

## 3. Step-by-Step Implementation Guide

### Step 1: Configure the Practical 1 Root Stack Layout
Create the Stack navigator inside [src/app/practical-1/_layout.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-1/_layout.tsx) to manage all auth routes and the nested tab group without default headers.

```tsx
import { Stack } from 'expo-router'

export default function Practical1Layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="signup" />
            <Stack.Screen name="forgot-password" />
            <Stack.Screen name="(tabs)" />
        </Stack>
    )
}
```

### Step 2: Implement the Login Screen
The Login screen ([src/app/practical-1/index.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-1/index.tsx)) serves as the authentication entry point:
- **State**: Manages `form` state (`email`, `password`), `errors` map, and `loading` boolean.
- **Validation**:
  - Email: Required and must match `^[^\s@]+@[^\s@]+\.[^\s@]+$`.
  - Password: Required and minimum length of 6 characters.
- **Navigation**:
  - `router.replace('/practical-1/(tabs)/dashboard')` on successful submit (prevents back-navigating into login).
  - `router.push('/practical-1/forgot-password')` for recovery.
  - `router.push('/practical-1/signup')` for registration.

```tsx
const validate = (): boolean => {
    const newErrors: LoginErrors = {}
    if (!form.email.trim()) {
        newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        newErrors.email = 'Enter a valid email address'
    }
    if (!form.password.trim()) {
        newErrors.password = 'Password is required'
    } else if (form.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
}
```

### Step 3: Implement User Registration (Sign Up)
The Sign Up screen ([src/app/practical-1/signup.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-1/signup.tsx)) collects:
- `name`: Full user display name.
- `email`: Valid email string.
- `password`: Minimum 6 characters.
- `confirmPassword`: Validated for strict equality `password === confirmPassword`.
- On submit, triggers a confirmation alert and redirects the user into the dashboard.

### Step 4: Implement Password Recovery (Forgot Password)
The recovery screen ([src/app/practical-1/forgot-password.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-1/forgot-password.tsx)):
- Collects and validates the email address.
- Transitions into a confirmation state (`sent: true`) displaying a checkmark and helpful confirmation message.
- Provides a "Back to Login" action via `router.back()`.

### Step 5: Configure Authenticated Bottom Tabs
Create the Tab navigator in [src/app/practical-1/(tabs)/_layout.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-1/(tabs)/_layout.tsx).
- Incorporates dynamic bottom safe area padding via `useSafeAreaInsets().bottom`.
- Defines tab icons (Emoji/Vector icons) and titles for **Dashboard**, **Account**, and **Settings**.

```tsx
import { Tabs } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function P1TabsLayout() {
    const insets = useSafeAreaInsets()
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary,
                tabBarStyle: {
                    height: verticalScale(54) + insets.bottom,
                    paddingBottom: insets.bottom > 0 ? insets.bottom : Spacing.xs + 2,
                },
            }}
        >
            <Tabs.Screen name="dashboard" options={{ tabBarLabel: 'Dashboard' }} />
            <Tabs.Screen name="account" options={{ tabBarLabel: 'Account' }} />
            <Tabs.Screen name="settings" options={{ tabBarLabel: 'Settings' }} />
        </Tabs>
    )
}
```

### Step 6: Build the Dashboard Screen
The Dashboard ([src/app/practical-1/(tabs)/dashboard.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-1/(tabs)/dashboard.tsx)) renders:
- **Greeting Banner**: "Good morning, John Doe" with circular user monogram avatar.
- **Overview Grid**: 4 stat cards (Total Sales, Active Users, Pending Tasks, Growth) with colored accent borders.
- **Activity Feed**: Timeline list displaying chronological user interactions.

### Step 7: Build Profile & Teardown (Account & Settings)
- **Account Screen** ([src/app/practical-1/(tabs)/account.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-1/(tabs)/account.tsx)): Displays user metadata and provides a **Log Out** button (`router.replace('/practical-1')`) that flushes history and redirects to the login screen.
- **Settings Screen** ([src/app/practical-1/(tabs)/settings.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-1/(tabs)/settings.tsx)): Configuration items for Notifications and Theme modes.

---

## 4. Navigation Flow Diagram

```mermaid
graph TD
    Home[App Home '/'] --> P1[Practical 1 Entry '/practical-1']
    P1 -->|Sign In Validated| Tabs[Tabs Group '/practical-1/(tabs)']
    P1 -->|Don't have account?| Signup['/practical-1/signup']
    P1 -->|Forgot password?| Forgot['/practical-1/forgot-password']
    Signup -->|Account Created| Tabs
    Signup -->|Back to Login| P1
    Forgot -->|Back to Login| P1

    subgraph Authenticated Tab Navigation
        Tabs --> Dash['dashboard']
        Tabs --> Acc['account']
        Tabs --> Sett['settings']
    end

    Acc -->|Log Out| P1
```

---

## 5. How to Run & Verify

```bash
# 1. Start the Expo development server
npm start

# 2. Open on your device or simulator
# Press 'i' for iOS Simulator, 'a' for Android Emulator, or 'w' for Web

# 3. Direct route test in code or browser
# Navigate to: http://localhost:8081/practical-1
```

### Verification Checklist:
- [x] Submitting empty email/password shows inline validation errors.
- [x] Typing valid credentials and pressing **Sign In** displays loading state then navigates to `/practical-1/(tabs)/dashboard`.
- [x] Password matching works on the Sign Up form.
- [x] Tabs switch seamlessly between Dashboard, Account, and Settings.
- [x] Pressing **Log Out** on the Account tab replaces the history stack back to `/practical-1`.
