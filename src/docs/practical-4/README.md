# Practical 4: Production Auth Module with REST API

> **Module**: Practical 4  
> **Route Path**: `/practical-4`  
> **Source Directory**: `src/app/practical-4/` & `src/components/modules/practical-4/`  
> **Test File**: `__tests__/practical-4.test.tsx`  
> **Key Technologies**: Axios, Live REST Backend (aavatto.com), Vector Icons, Atomic UI Components, Responsive Scaling

---

## 1. Overview & Objectives

Practical 4 demonstrates a production-grade authentication module connected to a live remote REST API server (`aavatto.com`). It emphasizes clean separation between reusable presentation components, responsive dimension scaling, rigorous multi-field form validation, and asynchronous network handling.

### Core Features:
1. **Live REST Authentication API**: Real network requests executed against actual backend endpoints for both Sign In and Registration.
2. **Atomic Component Architecture**: Reusable design system comprising custom `ButtonComponent`, `TextInputComponent`, and `TextComponent`.
3. **Responsive Dimension Scaling**: Custom device-agnostic scaling utility (`sizes.ts`) based on baseline viewport dimensions.
4. **Password Visibility Toggle**: Interactive toggle switching between hidden dots (`••••••••`) and plain text with FontAwesome vector icons (`eye` / `eye-slash`).
5. **Multi-Field Validation & Alerts**: Validation guards for email syntax, 10-digit phone numbers, and matching password confirmation.
6. **Automated Unit Testing**: Complete test coverage via Jest and React Test Renderer.

---

## 2. Directory & File Structure

```text
src/
├── app/
│   └── practical-4/
│       ├── _layout.tsx                  # Stack layout for Practical 4
│       ├── index.tsx                    # Login route (thin re-export)
│       └── registration.tsx             # Registration route (thin re-export)
├── assets/
│   └── images/
│       └── practical-4/
│           └── Arrow.png                # Back arrow graphic asset
├── components/
│   └── modules/
│       └── practical-4/
│           ├── index.ts                 # Public export barrel
│           ├── components/
│           │   ├── ButtonComponent.tsx      # Custom button with loading spinner
│           │   ├── TextInputComponent.tsx   # Input with left/right vector icons
│           │   ├── TextComponent.tsx        # Styled text with custom font scaling
│           │   └── index.ts                 # Components barrel
│           ├── screens/
│           │   ├── login/
│           │   │   ├── index.tsx            # Login screen presentation & logic
│           │   │   └── login.style.ts       # Login styling
│           │   └── registration/
│           │       ├── index.tsx            # Registration presentation & logic
│           │       └── registration.style.ts# Registration styling
│           └── utils/
│               └── sizes.ts                 # Viewport scaling utilities
└── __tests__/
    └── practical-4.test.tsx             # Jest unit tests for login & register
```

---

## 3. API Contract Specification

**Base Server URL**: `https://aavatto.com/test/fairshop/api-server/public/api`

### 1. User Login
- **Endpoint**: `POST /login`
- **Headers**: `Content-Type: application/json`, `Accept: application/json`
- **Request Body**:
  ```json
  {
    "login": "user@example.com",
    "password": "SecretPassword123"
  }
  ```
- **Response (Success)**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": { ... }
  }
  ```

### 2. User Registration
- **Endpoint**: `POST /register`
- **Headers**: `Content-Type: application/json`, `Accept: application/json`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "user@example.com",
    "phone": "9876543210",
    "password": "SecretPassword123",
    "confirm_password": "SecretPassword123"
  }
  ```

---

## 4. Step-by-Step Implementation Guide

### Step 1: Responsive Viewport Scaling Utility
In [src/components/modules/practical-4/utils/sizes.ts](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/components/modules/practical-4/utils/sizes.ts), define viewport proportions against an industry-standard baseline (375 × 812):

```typescript
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

export const scale = (size: number) => (width / guidelineBaseWidth) * size
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor
```

### Step 2: Build Atomic UI Components
1. **ButtonComponent** ([src/components/modules/practical-4/components/ButtonComponent.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/components/modules/practical-4/components/ButtonComponent.tsx)):
   Renders custom styled touchable button with integrated `ActivityIndicator` during network loading.
2. **TextInputComponent** ([src/components/modules/practical-4/components/TextInputComponent.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/components/modules/practical-4/components/TextInputComponent.tsx)):
   Supports `LeftIcon` and `RightIcon` from `@expo/vector-icons/FontAwesome5`, inline password masking toggle, and rounded border wrapping.
3. **TextComponent** ([src/components/modules/practical-4/components/TextComponent.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/components/modules/practical-4/components/TextComponent.tsx)):
   Standardizes typography and click actions.

### Step 3: Implement Login Screen
In [src/components/modules/practical-4/screens/login/index.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/components/modules/practical-4/screens/login/index.tsx):
- Validates that email and password are non-empty.
- Executes `axios.post(LOGIN_URL, { login: email, password })`.
- Handles success message alerts and error notifications.
- Toggles `showPassword` state via FontAwesome eye icon.

### Step 4: Implement Registration Screen
In [src/components/modules/practical-4/screens/registration/index.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/src/components/modules/practical-4/screens/registration/index.tsx):
- Multi-field input collection: Name, Email, Phone, Password, Confirm Password.
- Validation checks:
  1. Empty field checks for every input.
  2. Email format validation regex: `[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}`.
  3. Phone number validation: 10 digit Indian number format `/^[0-9]{10}$/`.
  4. Password match: `password === confirmPassword`.
- On success: Alerts user and navigates back to login via `router.back()`.

---

## 5. Automated Unit Tests

Unit tests verify component mounting and validation behavior in [__tests__/practical-4.test.tsx](file:///Users/darshan/Documents/Projects/ReactNative/MyStructure/MyExpoStructure/__tests__/practical-4.test.tsx).

Run unit tests via:
```bash
npm test -- practical-4
```

---

## 6. How to Run & Verify

```bash
# 1. Start the Expo development server
npm start

# 2. Open Practical 4
# Navigate to: http://localhost:8081/practical-4
```

### Verification Checklist:
- [x] Launching `/practical-4` loads the branded Login screen.
- [x] Submitting empty fields triggers `Alert.alert('Please enter email or phone')`.
- [x] Clicking the eye icon toggles password text visibility.
- [x] Navigating to Sign Up presents the full registration form.
- [x] Invalid phone numbers (non-10 digits) trigger appropriate validation alerts.
- [x] Mismatched passwords trigger a confirmation failure alert.
