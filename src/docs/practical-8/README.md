# Practical 8: Image Color Analysis & RGB Comparison

> **Module**: Practical 8  
> **Source Origin**: `ImageCompare` (`/Users/darshan/Documents/Projects/ReactNative/Demo/ImageCompare`)  
> **Route Path**: `/practical-8`  
> **Source Directory**: `src/app/practical-8/` & `src/components/modules/practical-8/`  
> **Key Technologies**: Camera & Gallery Picker, Multi-Image Comparison, Color Analysis, Hex-to-RGB Conversion, Delta Calculation

---

## 1. Overview & Objectives

Practical 8 integrates the image color analysis and color variance module from **ImageCompare**. It allows users to pick two distinct images (either capturing fresh photos via camera, importing from device photos, or using built-in presets) and computes dominant color RGB channels and mathematical differences.

### Key Screens & Features:
1. **Compare Image RGB (`ImageCompareScreen`)**:
   - Dual-slot preview boxes displaying both selected images side-by-side.
   - File selector buttons displaying filenames or "No file chosen" indicator.
   - Camera & Gallery modal sheet (`ModalComponent`) with permission handling and instant presets.
   - "Compare RGB" action button with loading indicator.
   - Color Analysis outputs:
     - First Image dominant RGB values (`rgb(r, g, b)`).
     - Second Image dominant RGB values (`rgb(r1, g1, b1)`).
     - Interactive visual color swatch boxes rendered with the extracted color codes.
     - Delta difference badges: `Δ Red`, `Δ Green`, and `Δ Blue`.

---

## 2. Directory Structure

```text
src/
├── app/
│   └── practical-8/
│       ├── _layout.tsx
│       └── index.tsx
└── components/
    └── modules/
        └── practical-8/
            ├── index.ts
            ├── utils/
            │   └── dimension.ts
            ├── components/
            │   └── ModalComponent/
            │       ├── ModalComponent.tsx
            │       └── Style.ts
            └── screens/
                └── Home/
                    ├── HomeScreen.tsx
                    └── Style.ts
```
