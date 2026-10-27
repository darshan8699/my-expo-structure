# Practical 7: Flight Booking & Discovery UI

> **Module**: Practical 7  
> **Source Origin**: `FlightBook` (`/Users/darshan/Documents/Projects/ReactNative/Demo/FlightBook`)  
> **Route Path**: `/practical-7`  
> **Source Directory**: `src/app/practical-7/` & `src/components/modules/practical-7/`  
> **Key Technologies**: Flight Search, Ticket Selection, Vector Icons (Entypo & AntDesign), Responsive Grid Layout, Card Shadows

---

## 1. Overview & Objectives

Practical 7 integrates the airline travel and reservation interface from **FlightBook**. It demonstrates a clean, consumer-facing flight discovery experience featuring customizable departure/arrival cards, trip filtering, and seat selection.

### Key Screens & Features:
1. **Flight Explorer (`FlightHomeScreen`)**:
   - Greeting header with personalized user welcome ("Hi, Robert").
   - Integrated search bar for flights, hotels, and destinations.
   - Quick category buttons (`aircraft`, `direction`, `drive`, `more`).
   - "Popular Places" horizontal carousel displaying destination cards with `newyork.jpg`.
2. **Book Flight Screen (`BookFlightScreen`)**:
   - Trip filters toggle: **One Way** vs. **Round Trip**.
   - Departure and destination selector tiles with Entypo iconography.
   - Passenger counter, departure calendar date, and travel class selector (`Business` / `Economy`).
   - "Recommended" carousel highlighting top flight routes.
   - "Select Ticket" CTA button leading to flight booking confirmation.
3. **Select Ticket (`SelectTicketScreen`)**:
   - Summary route header (SFO ✈️ JFK) with departure date.
   - List of available carrier flights (Delta, United, American Airlines) with pricing, duration, and class tags.
   - Interactive selection state and "Confirm & Pay" modal workflow.

---

## 2. Directory Structure

```text
src/
├── app/
│   └── practical-7/
│       ├── _layout.tsx
│       ├── index.tsx
│       ├── book-flight.tsx
│       └── select-ticket.tsx
├── assets/
│   └── images/
│       └── practical-7/
│           └── newyork.jpg
└── components/
    └── modules/
        └── practical-7/
            ├── index.ts
            ├── constants/
            │   ├── Color.ts
            │   └── FontFamily.ts
            ├── utils/
            │   └── dimension.ts
            ├── components/
            │   ├── Box/Box.tsx
            │   ├── Button/Button.tsx
            │   ├── Container/Container.tsx
            │   ├── CustomeHeader/CustomeHeader.tsx
            │   ├── Filter/Filter.tsx
            │   ├── HeaderContainer/HeaderContainer.tsx
            │   └── Options/Options.tsx
            └── screens/
                ├── HomeScreen/HomeScreen.tsx
                ├── BookFlight/BookFlight.tsx
                └── SelectTicket/SelectTicket.tsx
```
