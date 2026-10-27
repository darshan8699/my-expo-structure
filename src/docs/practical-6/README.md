# Practical 6: Physical Inventory & Catalog Management Module

> **Module**: Practical 6  
> **Source Origin**: `Demo-master` (`/Users/darshan/Documents/Projects/ReactNative/Demo/Demo-master`)  
> **Route Path**: `/practical-6`  
> **Source Directory**: `src/app/practical-6/` & `src/components/modules/practical-6/`  
> **Key Technologies**: Inventory Management, Expandable FlatLists, SQLite Queries, Responsive Dimensions, Remote API Testing, File Uploads

---

## 1. Overview & Objectives

Practical 6 integrates the complete catalog and stock variance system from **Demo-master**. It provides inventory auditors and warehouse managers with full control over counting, variance calculations, local storage, remote verification, and data import/export.

### Key Screens & Features:
1. **Catalog List (`ListCatalogScreen`)**:
   - Live search filter across catalog names and status badges.
   - Expandable accordion card rows with Start date, Saved timestamp, and Status.
   - Row-level actions: **COUNT**, **CONTINUE**, and **DELETE**.
   - Interactive **ADD LIST** panel with custom inputs, Location picker, and Price list selector.
   - Sticky bottom navigation bar (Add List, Search, Variance, Logoff).
2. **Count Variance (`CountVarianceScreen`)**:
   - Stock item inventory auditing with categorized packages (`Crate(48)`, `Box(24)`, etc.).
   - Interactive quantity counter with +/- step buttons and direct numeric manual override.
   - Quick variance actions: Email Summary, Cloud Upload, and Catalog navigation.
3. **SQLite Database Operations (`SqliteDemoScreen`)**:
   - Demonstrates local database operations (`UserDatabase.db`, table `listcatalog`).
   - Query execution (`SELECT * FROM listcatalog`), row mapping, and records iteration.
4. **API Integration Test (`ApiTestScreen`)**:
   - Form inputs for user identification, email, and authentication keys.
   - Axios HTTP POST client testing with structured JSON response display.
5. **File Upload Interface (`FileUploadScreen`)**:
   - Drag-and-drop / file selector box supporting CSV, JSON, and XLSX data formats.
   - Upload simulation with animated progress and user alerts.
6. **Livetracking Preview (`LiveTrackingScreen`)**:
   - Original screen preview from Demo-master, linked seamlessly to Practical 9.

---

## 2. Directory Structure

```text
src/
├── app/
│   └── practical-6/
│       ├── _layout.tsx
│       ├── index.tsx
│       ├── list-catalog.tsx
│       ├── count-variance.tsx
│       ├── sqlite-demo.tsx
│       ├── api-test.tsx
│       ├── file-upload.tsx
│       └── live-tracking.tsx
└── components/
    └── modules/
        └── practical-6/
            ├── index.ts
            ├── utils/
            │   └── dimension.ts
            └── screens/
                ├── dashboard/
                │   └── Practical6Dashboard.tsx
                ├── list-catalog/
                │   ├── ListCatalogScreen.tsx
                │   └── list-catalog.style.ts
                ├── count-variance/
                │   ├── CountVarianceScreen.tsx
                │   └── count-variance.style.ts
                ├── sqlite-demo/
                │   └── SqliteDemoScreen.tsx
                ├── api-test/
                │   └── ApiTestScreen.tsx
                ├── file-upload/
                │   └── FileUploadScreen.tsx
                └── live-tracking/
                    └── LiveTrackingScreen.tsx
```
