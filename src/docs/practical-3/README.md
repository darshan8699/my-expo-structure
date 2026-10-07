# Practical 3: Dynamic Grid Generator & Navigation Lab

> **Module**: Practical 3  
> **Route Path**: `/practical-3/(tabs)/dashboard`  
> **Source Directory**: `src/app/practical-3/` & `src/pages/practical-3/`  
> **Key Technologies**: Expo Router, React Native Gesture & Insets, Custom Drawer Context, Responsive Grid Calculations

---

## 1. Overview & Objectives

Practical 3 demonstrates advanced layout mathematics, responsive multi-state UI elements, and a multi-tiered navigation hierarchy uniting **Stack Navigation**, **Bottom Tabs**, and a **Custom Left Drawer**.

### Core Features:
1. **Dynamic $N \times N$ Grid Generator**: Users enter a number $N \in [1, 10]$ or select from quick chips (2, 3, 4, 5, 6) to dynamically generate $N^2$ interactive boxes.
2. **Color-Cycling State Machine**: Each box cycles through 3 discrete states upon touch:
   - **State 0 (Default)**: Neutral Slate/Grey (`#E2E8F0`)
   - **State 1 (Active 1)**: Indigo (`#4F46E5`)
   - **State 2 (Active 2)**: Emerald Green (`#10B981`)
3. **Live Metrics**: Real-time counter showing active boxes, percentage filled, and a global **Reset Grid** action.
4. **Custom Left Drawer**: Animated slide-in drawer accessible via a hamburger menu (☰) with backdrop touch-dismissal.
5. **Drawer Destination Screens**: Dedicated routes for Screen 1, Screen 2, and Screen 3.

---

## 2. Directory & File Structure

```text
src/
├── app/
│   └── practical-3/
│       ├── _layout.tsx                     # Stack layout managing Tabs, Details & Drawer Screens
│       ├── detail.tsx                      # Dynamic Grid render screen (takes ?count=N)
│       ├── screen-1.tsx                    # Drawer Destination Screen 1
│       ├── screen-2.tsx                    # Drawer Destination Screen 2
│       ├── screen-3.tsx                    # Drawer Destination Screen 3
│       └── (tabs)/                         # Persistent Tab Group
│           ├── _layout.tsx                 # Bottom Tabs layout (Dashboard & Settings)
│           ├── dashboard.tsx               # Number input & quick-select screen
│           └── settings.tsx                # Settings preferences screen
├── components/
│   └── modules/
│       └── custom-drawer/
│           ├── custom-drawer.tsx           # Animated slide-in Drawer component
│           └── custom-drawer.style.ts      # Drawer overlay and list styling
├── services/
│   └── context/
│       └── drawer-context.tsx              # React Context managing drawer isOpen state
└── pages/
    └── practical-3/
        ├── dashboard/
        │   └── dashboard.style.ts          # Styles for the generator card & quick chips
        ├── detail/
        │   ├── detail.style.ts             # Styles for the grid container & cards
        │   ├── detail.type.ts              # TypeScript interfaces for box state
        │   └── detail.util.ts              # Mathematical box sizing helper
        └── drawer-screens/
            └── drawer-screen.style.ts      # Unified styles for drawer destination screens
```

---

## 3. Step-by-Step Implementation Guide

### Step 1: Responsive Grid Dimension Mathematics
To guarantee that the $N \times N$ grid fits perfectly across any mobile display without horizontal scrolling or clipping, box dimensions are calculated dynamically in [src/pages/practical-3/detail/detail.util.ts](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/pages/practical-3/detail/detail.util.ts):

$$\text{availableWidth} = \text{screenWidth} - (2 \times \text{horizontalPadding})$$
$$\text{totalGaps} = (N - 1) \times \text{gapSize}$$
$$\text{boxSize} = \frac{\text{availableWidth} - \text{totalGaps}}{N}$$

```typescript
export const calculateBoxSize = (
    n: number,
    screenWidth: number,
    containerPadding: number = 32,
    gap: number = 8,
): number => {
    const availableWidth = screenWidth - containerPadding
    const totalGaps = (n - 1) * gap
    return Math.floor((availableWidth - totalGaps) / n)
}
```

### Step 2: Implement the Dashboard Input & Quick Select
The Dashboard ([src/app/practical-3/(tabs)/dashboard.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-3/%28tabs%29/dashboard.tsx)) manages:
- Number sanitization: Accepts only integer inputs between 1 and 10.
- Quick chips: Quick-select buttons for 2, 3, 4, 5, 6 to instantly populate the input.
- Navigation: Dispatches `router.push({ pathname: '/practical-3/detail', params: { count: n.toString() } })`.

### Step 3: Implement Detail Screen & Color State Machine
The Detail Screen ([src/app/practical-3/detail.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/app/practical-3/detail.tsx)):
- Extracts parameter: `const { count } = useLocalSearchParams<{ count: string }>()`.
- Initializes state array of size $N^2$:
  ```typescript
  const totalBoxes = n * n
  const [boxStates, setBoxStates] = useState<number[]>(() => new Array(totalBoxes).fill(0))
  ```
- Cycling handler:
  ```typescript
  const handleBoxPress = (index: number) => {
      setBoxStates((prev) => {
          const next = [...prev]
          next[index] = (next[index] + 1) % 3 // Cycles 0 -> 1 -> 2 -> 0
          return next
      })
  }
  ```
- State colors mapping:
  - `0`: Default Slate (`#E2E8F0`)
  - `1`: Indigo (`#4F46E5`)
  - `2`: Emerald (`#10B981`)

### Step 4: Implement Custom Left Drawer & Context
The Drawer Context ([src/services/context/drawer-context.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/services/context/drawer-context.tsx)) provides `isOpen`, `openDrawer()`, `closeDrawer()`, and `toggleDrawer()`.

The `CustomDrawer` component:
- Renders a semi-transparent touchable backdrop to dismiss the drawer when tapped outside.
- Houses navigation links to:
  - **Screen 1** (`/practical-3/screen-1`)
  - **Screen 2** (`/practical-3/screen-2`)
  - **Screen 3** (`/practical-3/screen-3`)
  - **Dashboard** (`/practical-3/(tabs)/dashboard`)
  - **Settings** (`/practical-3/(tabs)/settings`)
  - **Back to Practical List** (`/`)

---

## 4. Navigation Architecture Diagram

```mermaid
graph TD
    Home[App Home '/'] --> P3Dash['/practical-3/(tabs)/dashboard']
    
    subgraph Bottom Tabs Navigation
        P3Dash <--> P3Settings['/practical-3/(tabs)/settings']
    end

    P3Dash -->|Generate Box Grid| P3Detail['/practical-3/detail?count=N']
    
    subgraph Custom Left Drawer
        Menu[☰ Hamburger Icon] --> Drawer[Custom Drawer Overlay]
        Drawer --> S1['/practical-3/screen-1']
        Drawer --> S2['/practical-3/screen-2']
        Drawer --> S3['/practical-3/screen-3']
        Drawer --> P3Dash
        Drawer --> Home
    end
```

---

## 5. How to Run & Verify

```bash
# 1. Start the Expo development server
npm start

# 2. Open Practical 3 in simulator or web
# Navigate to: http://localhost:8081/practical-3/(tabs)/dashboard
```

### Verification Checklist:
- [x] Entering `3` generates a $3 \times 3$ grid of 9 boxes in the Details screen.
- [x] Tapping any box cycles its color: Slate → Indigo → Emerald → Slate.
- [x] Active boxes count updates dynamically in the summary banner.
- [x] Pressing **Reset Grid** restores all boxes to default state.
- [x] Tapping the hamburger menu (☰) slides open the Custom Left Drawer.
- [x] Navigating from the drawer to Screen 1, 2, or 3 functions without layout collision.
