# Dependency Issue Triage

Source: GitHub Dependabot and security advisory emails received in Gmail between 2026-05-28 and 2026-06-10.

## Reported Issues

| Severity | Dependency or PR | Advisory / PR | Affected file |
| --- | --- | --- | --- |
| Critical | `shell-quote` | CVE-2026-9277 / GHSA-w7jw-789q-3m8p | `package-lock.json` |
| High | `tmp` | CVE-2026-44705 / GHSA-ph9p-34f9-6g65 | `package-lock.json` |
| Moderate | grouped npm/yarn updates | Dependabot PR #12 | `package.json`, `package-lock.json` |
| Moderate | `lodash.template` | Dependabot PR #13 | `package-lock.json` |
| Moderate | `bn.js` | Dependabot PR #14 | `package-lock.json` |
| Moderate | `handlebars` | Dependabot PR #15 | `package-lock.json` |
| Moderate | `sha.js` | Dependabot PR #16 | `package-lock.json` |
| Moderate | `pbkdf2` | Dependabot PR #17 | `package-lock.json` |
| Moderate | `cipher-base` | Dependabot PR #18 | `package-lock.json` |

## What Needs To Be Done

- Review the open Dependabot PRs and confirm whether the grouped PR supersedes individual PRs.
- Prioritize the critical `shell-quote` and high-severity `tmp` alerts.
- Install dependencies, run the existing checks, and verify the app still builds.
- Merge the Dependabot PRs or recreate them if conflicts appear.

## Suggestions

- Handle the grouped npm/yarn PR first if it resolves multiple alerts cleanly.
- Use `npm audit` after applying Dependabot updates to confirm remaining advisories.
- Avoid manually editing the lockfile unless the package manager produces the change.
