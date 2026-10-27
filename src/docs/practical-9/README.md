# Practical 9: Real-time Live GPS Tracking & Telemetry Module

> **Module**: Practical 9  
> **Source Origin**: `live tracking` (`/Users/darshan/Documents/Projects/ReactNative/Demo/live tracking`)  
> **Route Path**: `/practical-9`  
> **Source Directory**: `src/app/practical-9/` & `src/components/modules/practical-9/`  
> **Key Technologies**: Real-time PubNub Pub/Sub, Live GPS Coordinates, Moving Marker (`car.png`), Heading Rotation, SVG Charts, Biometrics, PDF Generation, Localization

---

## 1. Overview & Objectives

Practical 9 integrates the real-time vehicle dispatch, GPS tracking, and telemetry suite from **live tracking**. It provides a synchronized driver-passenger architecture communicating over PubNub pub/sub channels with smooth animated map markers and heading angles.

### Key Screens & Features:
1. **Driver Tracking App (`DriverAppScreen`)**:
   - Live GPS broadcasting over PubNub on the `'location'` channel.
   - Interactive visual map canvas displaying route lines, pickup and destination points.
   - Vehicle marker (`car.png`) smoothly tracking coordinates and rotating with heading angle.
   - Route simulation player (Start / Pause Drive simulation, manual Step Forward).
   - Real-time telemetry bar (Latitude, Longitude, Heading).
2. **User Tracking App (`UserAppScreen`)**:
   - Real-time listener subscribed to the `'location'` PubNub channel.
   - Smoothly follows driver movements as coordinates arrive in real time.
   - Driver info sheet with vehicle registration, driver profile, and live ETA calculation.
3. **Charts, PDF & Biometrics (`FeaturesDemoScreen`)**:
   - Bezier curve telemetry chart tracking speed and altitude trends over time.
   - Biometric sensor trigger (Touch ID / Face ID scanner) with status feedback.
   - HTML to PDF exporter simulating formatted trip reports.
   - Embedded web preview section.
4. **Horizontal Scroll Snap (`ScrollDemoScreen`)**:
   - Viewport-snapped horizontal paging with swipe gestures and active page dots.
5. **Multi-language Localization (`LocalizationScreen`)**:
   - Language selector demonstrating internationalization across Hindi, Marathi, English, and French.

---

## 2. Directory Structure

```text
src/
├── app/
│   └── practical-9/
│       ├── _layout.tsx
│       ├── index.tsx
│       ├── driver.tsx
│       ├── user.tsx
│       ├── features.tsx
│       ├── scroll-demo.tsx
│       └── localization.tsx
├── assets/
│   └── images/
│       └── practical-9/
│           └── car.png
└── components/
    └── modules/
        └── practical-9/
            ├── index.ts
            ├── services/
            │   └── pubnubSimulator.ts
            ├── components/
            │   └── InteractiveMap.tsx
            └── screens/
                ├── dashboard/
                │   └── Practical9Dashboard.tsx
                ├── driver/
                │   └── DriverAppScreen.tsx
                ├── user/
                │   └── UserAppScreen.tsx
                ├── features/
                │   └── FeaturesDemoScreen.tsx
                ├── scroll-demo/
                │   └── ScrollDemoScreen.tsx
                └── localization/
                    └── LocalizationScreen.tsx
```
