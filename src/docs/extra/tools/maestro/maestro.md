# Maestro – Mobile E2E Testing

## Overview

[Maestro](https://maestro.mobile.dev/) is a mobile UI testing framework that runs
**end-to-end (E2E) flow tests** on real devices or simulators using simple YAML files.

Test flows live in the [`.maestro/`](../../../../.maestro/) directory.

---

## Running Tests Locally

```bash
# Run on both Android and iOS
npm run test:e2e:local

# Equivalent command (expanded):
~/.maestro/bin/maestro --platform android test .maestro
~/.maestro/bin/maestro --platform ios test .maestro
```

> **Prerequisite:** Install Maestro CLI → `curl -Ls "https://get.maestro.mobile.dev" | bash`

---

## Test Flows

### `smoke.yaml` – Smoke Test

File: [`.maestro/smoke.yaml`](../../../../.maestro/smoke.yaml)

```yaml
appId: com.darshan8699.myexpostructure
name: Smoke Test
tags:
  - smoke
```

The smoke test validates that the app launches successfully end-to-end:

| Step | Action |
|------|--------|
| 1 | Launch the app |
| 2 | Optionally tap dev server IP (192.168.0.104:8081 or localhost:8081) |
| 3 | Optionally tap the app name to focus it |
| 4 | Wait up to 20 seconds for `"Hello World"`, `"Continue"`, or `"Close"` to appear |
| 5 | Dismiss any dev overlay (`Close` or `Continue` buttons) |
| 6 | Assert `"Hello World"` is visible |

---

## Writing New Flows

Create a new `.yaml` file in `.maestro/`:

```yaml
appId: com.darshan8699.myexpostructure
name: Login Flow
---
- launchApp
- tapOn: "Sign In"
- inputText:
    text: "user@example.com"
- tapOn: "Password"
- inputText:
    text: "secret"
- tapOn: "Login"
- assertVisible: "Dashboard"
```

### Useful Maestro Commands

| Command | Description |
|---------|-------------|
| `tapOn` | Tap an element by text or id |
| `inputText` | Type text into focused input |
| `assertVisible` | Assert element is on screen |
| `extendedWaitUntil` | Wait for an element with timeout |
| `runFlow` | Conditionally run a sub-flow |
| `launchApp` | Launch / relaunch the app |
| `clearState` | Clear app state before test |

---

## Tags

Use `tags` in the YAML front-matter to group tests:

```bash
# Run only smoke tests
~/.maestro/bin/maestro test .maestro --include-tags smoke
```
