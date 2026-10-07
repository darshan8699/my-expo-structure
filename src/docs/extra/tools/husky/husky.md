# Husky – Local Git Hooks

## Overview

[Husky](https://typicode.github.io/husky/) manages local Git hooks to enforce code quality
and commit message standards **before** code ever reaches the remote repository.

Husky is initialized via the `prepare` npm script:

```json
"prepare": "husky"
```

---

## Installed Hooks

### `pre-commit` – Lint-Staged

File: [`.husky/pre-commit`](../../../../.husky/pre-commit)

```sh
npx lint-staged
```

Runs [`lint-staged`](https://github.com/lint-staged/lint-staged) on every staged file before a commit is created.

#### Lint-Staged Config

File: [`.lintstagedrc.json`](../../../../.lintstagedrc.json)

```json
{
  "*.{js,jsx,ts,tsx}": [
    "npm run lint:fix",
    "npm run format"
  ]
}
```

For every staged JS/TS file:
1. **`lint:fix`** — runs `expo lint --fix` (ESLint auto-fix)
2. **`format`** — runs `prettier --write` to auto-format

If either command fails (e.g. unfixable lint error), the commit is **aborted**.

---

### `commit-msg` – Commitlint

File: [`.husky/commit-msg`](../../../../.husky/commit-msg)

```sh
npx commitlint --edit $1
```

Validates the commit message against the **Conventional Commits** spec (see [git docs](../git/git.md)).

If the message does not match the required format (e.g. `feat: ...`, `fix: ...`), the commit is **aborted**.

---

## Developer Workflow

```
git add .
git commit -m "feat(auth): add login screen"
       │
       ├── pre-commit hook fires
       │       └── lint-staged runs lint:fix + format on staged files
       │           ✅ passes → continue
       │
       └── commit-msg hook fires
               └── commitlint validates message format
                   ✅ passes → commit created
```

---

## Skipping Hooks (Emergency Only)

```bash
git commit --no-verify -m "chore: emergency fix"
```

> ⚠️ Use sparingly. Bypassing hooks means lint/format errors may reach CI.

---

## Setup After Clone

Husky hooks are installed automatically when you run:

```bash
npm install   # triggers the `prepare` script → husky installs hooks
```
