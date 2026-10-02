# CI/CD – GitHub Actions

## Overview

This project uses two GitHub Actions workflows located in [`.github/workflows/`](../../../../.github/workflows/):

| Workflow              | File              | Trigger                                            |
|-----------------------|-------------------|----------------------------------------------------|
| CI/CD Pipeline        | `ci.yml`          | push / PR to `main`, `develop`, `eas-build`; manual dispatch |
| Security & Secrets    | `security.yml`    | push / PR to `main`, `develop`, `eas-build`        |

---

## CI/CD Pipeline (`ci.yml`)

### Trigger Branches

```
main        → CI + Semantic Release
develop     → CI + Test Coverage upload
eas-build   → CI + EAS Development Builds (Android + iOS Simulator)
```

### Job Dependency Graph

```
push / PR
    │
    ▼
┌─────────────────────┐
│   expo-ci (Job 1)   │  ← Runs on every push/PR
│  • npm ci           │
│  • format:check     │
│  • lint             │
│  • test             │
│  • expo-doctor      │
└──────────┬──────────┘
           │ needs: expo-ci
   ┌───────┼────────────────────┐
   ▼       ▼                    ▼
test-   semantic-            eas-build
coverage  release            (Job 4)
(Job 2)  (Job 3)
develop   main               eas-build branch
branch    branch             OR manual dispatch
only      only
```

---

### Job 1 – `expo-ci` (Runs on every push/PR)

| Step | Command | Purpose |
|------|---------|---------|
| Checkout | `actions/checkout@v4` | Clone repo |
| Node setup | `actions/setup-node@v4` (Node 24) | Setup runtime with npm cache |
| Install deps | `npm ci` | Clean install from lock file |
| Format check | `npm run format:check` | Prettier formatting validation |
| Lint + Types | `npm run lint` | ESLint + TypeScript type check |
| Tests | `npm run test` | Jest unit tests |
| Doctor | `npm run doctor` | `expo-doctor` health check |

---

### Job 2 – `test-coverage` (`develop` branch only)

Runs after `expo-ci` passes. Only on direct pushes to `develop`.

| Step | Command | Purpose |
|------|---------|---------|
| Tests + coverage | `npm run test:coverage` | Jest with lcov coverage report |
| Upload to Codacy | `bash <(curl -Ls ...)` | Uploads `coverage/lcov.info` if `CODACY_PROJECT_TOKEN` secret is set |

> **Secret required:** `CODACY_PROJECT_TOKEN` (optional — step skipped if absent)

---

### Job 3 – `semantic-release` (`main` branch only)

Runs after `expo-ci` passes. Only on direct pushes to `main`.

Reads conventional commits since the last tag and:
1. Determines the next semver bump (`fix` → patch, `feat` → minor, `BREAKING CHANGE` → major)
2. Updates `CHANGELOG.md`
3. Bumps `version` in `package.json` and `app.json` via `semantic-release-expo`
4. Creates a GitHub Release + Git tag

Plugins (configured in `package.json` → `"release"`):

```
@semantic-release/commit-analyzer
@semantic-release/release-notes-generator
semantic-release-expo          ← bumps app.json version
@semantic-release/changelog    ← writes CHANGELOG.md
@semantic-release/npm          ← updates package.json (no publish)
@semantic-release/git          ← commits CHANGELOG.md, package.json, app.json
```

> **Secret required:** `GITHUB_TOKEN` (automatically provided by GitHub Actions)

---

### Job 4 – `eas-build`

Triggered by:
- A push to the `eas-build` branch → builds **Development** (Android + iOS Simulator)
- Manual `workflow_dispatch` → choose build type and platform in GitHub UI

| Build Type | EAS Profile | Trigger |
|------------|-------------|---------|
| `development` (Android) | `development` | push to `eas-build` or dispatch |
| `development` (iOS Sim) | `development-simulator` | push to `eas-build` or dispatch |
| `staging` | `staging` | manual dispatch only |
| `production` | `production` | manual dispatch → also runs `--auto-submit` |

> **Secret required:** `EXPO_TOKEN`

---

## Security Workflow (`security.yml`)

Runs in parallel with `ci.yml` on every push/PR.

### Job 1 – `gitleaks` (Secrets Scan)

Uses [`gitleaks/gitleaks-action@v2`](https://github.com/gitleaks/gitleaks-action) to scan the **full git history** for accidentally committed secrets (API keys, tokens, passwords).

### Job 2 – `npm-audit` (Dependency Vulnerability Audit)

Runs `npm audit --audit-level=high`. Reports high-severity+ vulnerabilities in npm dependencies.

> `continue-on-error: true` — the step is informational and won't block the workflow.

---

## EAS Build Profiles (`eas.json`)

| Profile | Purpose | Distribution |
|---------|---------|--------------|
| `development` | Dev client build for real devices | Internal |
| `development-simulator` | Dev client build for iOS Simulator | Internal (iOS only) |
| `staging` | QA / internal testing | Internal |
| `production` | App Store / Play Store release | `--auto-submit` |

All profiles extend `base` which disables auto Sentry source-map upload during EAS builds:
```json
"SENTRY_DISABLE_AUTO_UPLOAD": "true",
"SENTRY_ALLOW_FAILURE": "true"
```

---

## Required GitHub Secrets

| Secret | Used By | Required? |
|--------|---------|-----------|
| `GITHUB_TOKEN` | Semantic Release | ✅ Auto-provided |
| `EXPO_TOKEN` | EAS Build | ✅ Required for builds |
| `CODACY_PROJECT_TOKEN` | Coverage upload | ⚠️ Optional |

---

## Branch Strategy Summary

```
feature/* ──► develop ──► main ──► (tagged release)
                │              └──► semantic-release → CHANGELOG + tag
                └──► test-coverage → Codacy upload
eas-build  ──────────────────────────────────────────► EAS dev builds
```
