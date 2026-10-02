# Git & Commit Conventions

## Overview

This project enforces structured commits using **Conventional Commits** spec via
[`commitlint`](https://commitlint.js.org/) + [`semantic-release`](https://semantic-release.gitbook.io/).
All commits must pass the format check enforced by the Husky `commit-msg` hook.

---

## Conventional Commit Format

```
<type>(<scope>): <short description>

[optional body]

[optional footer(s)]
```

### Commit Types

| Type | Semver Bump | Description |
|------|-------------|-------------|
| `feat` | **minor** | New feature |
| `fix` | **patch** | Bug fix |
| `BREAKING CHANGE` (footer) | **major** | Breaking API change |
| `chore` | none | Maintenance, tooling, config |
| `docs` | none | Documentation only |
| `style` | none | Formatting, whitespace |
| `refactor` | none | Code restructure, no behavior change |
| `test` | none | Adding or fixing tests |
| `perf` | none | Performance improvement |
| `ci` | none | CI/CD configuration |
| `build` | none | Build system or dependencies |
| `revert` | none | Revert a previous commit |

### Examples

```bash
git commit -m "feat(auth): add biometric login support"
git commit -m "fix(api): handle 401 token refresh correctly"
git commit -m "chore(deps): bump expo to 57.0.24"
git commit -m "feat!: drop support for Node 18"   # Breaking change
```

---

## Commitlint Configuration

File: [`commitlint.config.ts`](../../../../commitlint.config.ts)

```ts
module.exports = {
    extends: ['@commitlint/config-conventional'],
    ignores: [(message: string) => message.includes('[skip ci]')],
}
```

- Extends the standard `@commitlint/config-conventional` ruleset.
- Commits containing `[skip ci]` bypass the lint check (useful for bot commits from semantic-release).

---

## Semantic Release Flow

Runs automatically on push to `main` via the `semantic-release` CI job.

1. Analyzes commits since the last release tag using `@semantic-release/commit-analyzer`
2. Determines the version bump (patch / minor / major)
3. Generates release notes from commits
4. Updates `app.json` build version via `semantic-release-expo`
5. Writes / updates `CHANGELOG.md`
6. Updates `package.json` version (no npm publish)
7. Commits `CHANGELOG.md`, `package.json`, `app.json` back to the repo with `[skip ci]`
8. Creates a GitHub Release with the tag `v{version}`

---

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code → triggers semantic-release |
| `develop` | Integration branch → triggers test coverage upload |
| `eas-build` | Triggers EAS cloud builds for dev/staging |
| `feature/*` | Feature branches → merge into `develop` via PR |
| `fix/*` | Bug fix branches |
| `chore/*` | Maintenance branches |
