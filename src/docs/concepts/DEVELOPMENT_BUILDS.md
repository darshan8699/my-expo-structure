# Expo Development Builds Guide

This guide covers everything you need to know about **Development Builds** in Expo (SDK 57): what they are, why they are needed over Expo Go, step-by-step conversion instructions, and daily workflows.

---

## 1. What is a Development Build?

A **Development Build** is a debug build of your application compiled with your project's exact native code and dependencies, bundled together with the [`expo-dev-client`](https://docs.expo.dev/versions/v57.0.0/sdk/dev-client/) package.

Think of it as **your own custom Expo Go**:
- It contains your custom native libraries (e.g., Nitro Modules, MMKV, Sentry).
- It applies your custom `app.json` configuration, native plugins, permissions, and bundle identifiers.
- It includes the developer launcher and UI to connect to your local Metro bundler, switch servers, inspect logs, and test EAS Update channels.
- It provides full React Native developer tools and Fast Refresh for your JavaScript/TypeScript code.

---

## 2. Why Are Development Builds Needed?

| Feature / Capability | Expo Go | Development Build |
| :--- | :--- | :--- |
| **Custom Native Code / C++ / TurboModules** | ❌ No (restricted to pre-installed modules) | ✅ Full support (`react-native-nitro-modules`, custom JNI, C++) |
| **Third-Party Native SDKs** | ❌ Only Expo-blessed libraries | ✅ Any React Native or native library (e.g., Firebase, Payments, MMKV) |
| **Config Plugins & Native Manifests** | ❌ Ignored at runtime | ✅ Fully applied to `AndroidManifest.xml` & `Info.plist` |
| **Push Notifications & Background Tasks** | ⚠️ Generic sandbox credentials | ✅ Your own Apple APNs and Firebase FCM credentials |
| **App Store Parity** | ❌ Runs inside Expo Go container | ✅ Identical binary structure to your production app |
| **Fast Refresh & Dev Tools** | ✅ Supported | ✅ Supported via `expo-dev-client` |
| **Multiple Dev Server Switching** | ❌ Manual URL input | ✅ Built-in launcher UI and QR scanner |

### When Expo Go is Not Enough:
1. **Using libraries with native code**: In this project, dependencies like `react-native-nitro-modules`, `react-native-mmkv`, `@sentry/react-native`, and `react-native-reanimated` require compiled native code that cannot run in generic Expo Go.
2. **Custom URL Schemes & Deep Linking**: Real scheme routing (`myexpostructure://`) requires native registration.
3. **Targeting exact SDK / React Native versions**: Development builds compile against your exact versions (Expo SDK 57, React Native 0.86, React 19).

---

## 3. How to Convert an Expo Project to Development Builds

Converting is simple and consists of 4 main steps:

### Step 1: Install `expo-dev-client`
Install the development client module compatible with your Expo SDK:
```bash
npx expo install expo-dev-client
```
*(In this repository, `expo-dev-client` is already installed in `package.json`)*.

### Step 2: Configure Scheme and Bundle Identifiers (`app.json`)
A development build requires a URL scheme so the launcher and development tools can redirect to your app via deep links:
```json
{
  "expo": {
    "name": "MyExpoStructure",
    "slug": "myexpostructure",
    "scheme": "myexpostructure",
    "ios": {
      "scheme": "myexpostructure",
      "bundleIdentifier": "com.darshan8699.myexpostructure",
      "supportsTablet": true
    },
    "android": {
      "package": "com.darshan8699.myexpostructure"
    }
  }
}
```
*(Already configured in `app.json`)*.

### Step 3: Configure Build Profiles (`eas.json`)
In `eas.json`, configure dedicated build profiles for development with `developmentClient: true`:

```json
{
  "cli": {
    "version": ">= 16.0.0",
    "appVersionSource": "remote"
  },
  "build": {
    "base": {
      "env": {
        "SENTRY_DISABLE_AUTO_UPLOAD": "true",
        "SENTRY_ALLOW_FAILURE": "true"
      }
    },
    "development": {
      "extends": "base",
      "developmentClient": true,
      "distribution": "internal",
      "autoIncrement": true
    },
    "development-simulator": {
      "extends": "base",
      "developmentClient": true,
      "ios": {
        "simulator": true
      },
      "autoIncrement": true
    },
    "staging": {
      "extends": "base",
      "distribution": "internal"
    },
    "production": {
      "extends": "base",
      "autoIncrement": true
    }
  }
}
```

#### Key Properties Breakdown:
- **`developmentClient: true`**: Tells EAS to bundle the `expo-dev-client` library into the build. This turns the native binary into a development client capable of connecting to local Metro servers.
- **`distribution: "internal"`**: Configures the build for internal distribution (ad-hoc signing / APK sharing) so team members and testers can install it directly without going through app store review.
- **`ios.simulator: true`**: Compiles an iOS `.app` binary targeting the iOS Simulator architecture (arm64/x86_64). **No paid Apple Developer account is needed** for simulator builds.
- **`autoIncrement: true`**: Automatically bumps the build number / version code on EAS for every build run, preventing version collision.
- **`staging` / `production`**: Non-development profiles (`developmentClient` is omitted or false) which produce standalone production-ready bundles that run without a dev server.

---

## 4. Building Your Development Build

You have three options depending on your setup:

### Option A: Local Native Build (Fastest on macOS / Local Toolchains)
This uses your local Xcode or Android Studio without needing an Expo account.

1. **For Android** (Emulator or connected USB device):
   ```bash
   # Android emulator
   npm run android
   # Or directly
   npx expo run:android

   # Physical Android device (USB debugging enabled)
   npx expo run:android --device
   ```

2. **For iOS** (macOS required):
   ```bash
   # iOS simulator
   npm run ios
   # Or directly
   npx expo run:ios

   # Physical iPhone
   npx expo run:ios --device
   ```

> **Note:** The `expo run:*` command automatically executes `prebuild` to generate the `/android` and `/ios` directories if they do not exist yet.

---

### Option B: Cloud Build with EAS (No Native Toolchain Required)
If you don't have Xcode installed or are working on Windows/Linux and need an iOS build:

1. **Install EAS CLI and log in**:
   ```bash
   npm install -g eas-cli
   eas login
   ```

2. **Trigger the build**:
   ```bash
   # Android APK / AAB
   npm run build:dev:android
   # (eas build --profile development --platform android)

   # iOS Simulator Build (installs directly on Mac simulator, no Apple Developer Account required)
   npm run build:dev:ios-sim
   # (eas build --profile development-simulator --platform ios)

   # iOS Physical Device (Requires Apple Developer account)
   npm run build:dev:ios
   # (eas build --profile development --platform ios)
   ```

3. **Install the build**:
   - For simulators: download the tar/zip artifact and drag & drop onto the simulator, or press `Y` in the EAS CLI prompt.
   - For devices: scan the QR code displayed in the EAS CLI output or install via the Expo dashboard.

---

### Option C: Local Build with EAS CLI
Compiles locally using EAS build configs and local native compilers:
```bash
eas build --platform android --profile development --local
eas build --platform ios --profile development-simulator --local
```

---

## 5. Daily Development Workflow

Once the development build is installed on your simulator or physical device:

1. **Start the Metro bundler**:
   ```bash
   npm run start:dev
   # or: npx expo start
   ```
2. **Open your app**:
   - Launch your app icon directly from the home screen of your simulator or device.
   - You will see the `expo-dev-client` launcher screen.
   - Select your running local development server (or scan the terminal QR code).
3. **Enjoy Fast Refresh**:
   - Any changes to TS/JS files, components, screens, styles, and assets reload instantly.

---

## 6. When Do You Need to Rebuild?

You **do NOT** need to rebuild the native app when changing:
- JavaScript / TypeScript files (`src/**/*`)
- CSS / Styles / UI layouts
- Non-native assets (images, static json, routes)

You **DO** need to rebuild when:
1. Adding, updating, or removing a library with native code (e.g. installing a new native module).
2. Changing native app configurations in `app.json` (permissions, icons, splash screen, plugins, bundle ID, orientation).
3. Upgrading Expo SDK version or React Native version.

### Clean Rebuild Command:
```bash
# Clean and re-generate native projects
npx expo prebuild --clean

# Then rebuild
npm run android
# or
npm run ios
```

---

## 7. Useful Project Scripts Summary

This project already contains handy scripts in `package.json`:

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `npm run start:dev` | `expo start --dev-client` | Start dev server explicitly targeting dev client |
| `npm run android` | `expo run:android` | Build and run Android locally |
| `npm run ios` | `expo run:ios` | Build and run iOS locally |
| `npm run build:dev:android` | `eas build --profile development --platform android` | EAS cloud build for Android |
| `npm run build:dev:ios` | `eas build --profile development --platform ios` | EAS cloud build for iOS device |
| `npm run build:dev:ios-sim` | `eas build --profile development-simulator --platform ios` | EAS cloud build for iOS simulator |
