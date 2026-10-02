# Sentry – Crash Reporting & Performance Monitoring

## Overview

This project integrates [Sentry](https://sentry.io/) via [`@sentry/react-native`](https://docs.sentry.io/platforms/react-native/)
for real-time crash reporting, error tracking, and performance monitoring across Android and iOS.

Package: `@sentry/react-native ~7.11.0`

---

## Setup

### 1. Initialize Sentry in the App

Sentry should be initialized as early as possible — typically in `src/app/_layout.tsx`
(or the root layout) before any other logic:

```ts
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  environment: process.env.EXPO_PUBLIC_APP_ENV, // 'development' | 'staging' | 'production'
  tracesSampleRate: 1.0, // Adjust for production (e.g. 0.2)
  debug: __DEV__,
});
```

### 2. Environment Variables

Add to your `.env` file:

```env
EXPO_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
EXPO_PUBLIC_APP_ENV=development
```

---

## Source Map Upload

Source maps enable **readable stack traces** in Sentry for production/staging builds.

### EAS Builds

Source map upload is **disabled during EAS builds** by default (see `eas.json`):

```json
"base": {
  "env": {
    "SENTRY_DISABLE_AUTO_UPLOAD": "true",
    "SENTRY_ALLOW_FAILURE": "true"
  }
}
```

To enable source map uploads in EAS, remove or set `SENTRY_DISABLE_AUTO_UPLOAD` to `false`
and ensure the following secrets are configured in your EAS project:

- `SENTRY_AUTH_TOKEN`
- `SENTRY_ORG`
- `SENTRY_PROJECT`

### Local / Dev Builds

Source maps are uploaded automatically when building locally if Sentry env vars are set.

---

## Error Capturing

### Automatic Capture

Sentry automatically captures:
- Unhandled JS exceptions
- Native crashes (via Sentry native SDK)
- Performance transactions

### Manual Capture

```ts
import * as Sentry from '@sentry/react-native';

// Capture an error
try {
  riskyOperation();
} catch (error) {
  Sentry.captureException(error);
}

// Capture a message
Sentry.captureMessage('User reached rate limit', 'warning');

// Add breadcrumbs for context
Sentry.addBreadcrumb({
  category: 'auth',
  message: 'User signed in',
  level: 'info',
});
```

---

## User Context

```ts
Sentry.setUser({
  id: user.id,
  email: user.email,
});

// Clear on logout
Sentry.setUser(null);
```

---

## Environments

| Environment | `EXPO_PUBLIC_APP_ENV` | `tracesSampleRate` |
|-------------|----------------------|--------------------|
| development | `development` | `1.0` |
| staging | `staging` | `1.0` |
| production | `production` | `0.2` (recommended) |

---

## Useful Links

- [Sentry React Native Docs](https://docs.sentry.io/platforms/react-native/)
- [Expo + Sentry Guide](https://docs.sentry.io/platforms/react-native/manual-setup/expo/)
- [Source Maps with EAS](https://docs.sentry.io/platforms/react-native/sourcemaps/)
