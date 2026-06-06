<!--
Sync Impact Report
Version change: 1.1.0 → 1.2.0
Modified principles:
- VI. UI/UX Design Standards (expanded with Taste‑Skill specifics)
Added sections:
- Additional Constraints (expanded)
- Development Workflow (expanded)
Removed sections:
- none
Templates requiring updates:
- .specify/templates/plan-template.md ✅ no update required
- .specify/templates/spec-template.md ✅ no update required
- .specify/templates/tasks-template.md ✅ no update required
- .specify/extensions.yml ✅ no update required
Follow-up TODOs: none
-->

# UniBrain Constitution

## Core Principles

### I. Framework & API Consistency
UniBrain is a React-based forum application built on Ant Design v5. All UI and API behavior must be implemented using the current stack and with a single shared contract for request handling.
Components MUST not bypass the approved frontend architecture by calling HTTP directly from component logic or by using an alternate request pipeline.

### II. Centralized API Funnel
Every API request in the frontend MUST flow through the configured `api.ts` Axios instance.
That instance has interceptors and shared behavior for authentication, headers, error formatting, and request lifecycle handling. Using this centralized API funnel ensures consistency, easier debugging, and a single point for cross-cutting concerns.

### III. Ant Design v5 Compliance
UniBrain components MUST use Ant Design v5 APIs only.
Old or deprecated props such as `bodyStyle`, `tip`, and `direction` are prohibited because they generate warnings and introduce unsupported behavior in the current design system.

### IV. Explicit Error Handling & Notification
All frontend API call functions MUST use `try/catch` around asynchronous requests.
Errors must be surfaced as user-visible notifications through the App component’s shared `message.error` / `message.success` mechanism rather than silent failures or ad hoc alerts.

### V. Implementation Discipline
Code changes MUST be explicit, testable, and maintainable.
Unguarded assumptions, unreviewed workarounds, and deprecated UI patterns are not acceptable. Every API-integrated feature must be reviewed for `api.ts` usage, error handling, and Ant Design v5 compatibility.

### VI. UI/UX Design Standards (Taste‑Skill)
Interfaces MUST follow the "Taste‑Skill" philosophy: modern, minimal, and highly refined.

- Spacing: layouts MUST maximize comfortable whitespace — prefer larger `padding` and `margin` so content breathes and visual hierarchy is obvious.
- Tone & color: use neutral, restrained color palettes; highly saturated or gaudy colors are forbidden.
- Shapes: cards, buttons, and panels MUST use soft rounded corners (moderate `border-radius`) to convey friendliness and polish.
- Borders & surfaces: avoid hard, prominent borders; prefer subtle elevation via light `box-shadow` to separate surfaces.
- Buttons & Cards: apply consistent soft radii and gentle shadowing; primary controls should remain visually calm and not overly colorful.

Overall aesthetic: aim for a calm, elegant look inspired by modern brands (Apple, Vercel) — minimal textures, restrained contrast, and clear spacing.

## Additional Constraints
- The project technology stack is React + Ant Design v5 for the frontend.
- Any UI component that requires custom layout or style should use Ant Design v5 styling patterns and tokens, not legacy props.
- API services and request helpers must live in dedicated service modules and must not duplicate logic across components.
- Global notifications MUST be emitted through the App component’s centralized message layer.
- UI elements MUST use neutral colors, minimal gradients, and soft border-radius values to preserve a modern aesthetic.
- Layouts MUST provide generous whitespace and consistent spacing, especially around cards, forms, and panels.
- Cards and Buttons MUST have explicit design tokens for `border-radius` and `box-shadow`; avoid using borders as the primary separation method.

## Development Workflow
- Every pull request MUST include a review of frontend API usage and Ant Design v5 property usage.
- Code reviewers MUST verify that no direct network request bypasses `api.ts` and that all async API methods are wrapped in `try/catch`.
- UI reviews MUST also verify modern styling, ample spacing, neutral tones, and soft rounded corners.
- Buttons and Cards must be checked for correct `border-radius` and `box-shadow` tokens; hard borders must be justified in PR notes.
- Any change that touches API or error handling MUST include a short note in the PR description confirming `api.ts` funnel compliance and `message`-based notification usage.
- Warnings from deprecated Ant Design props are treated as failures until they are removed.
- Styling that appears loud, cluttered, or outdated is treated as a design violation and must be revised before merge.

## Governance
This constitution is the source of truth for UniBrain frontend implementation rules.
Any amendment to these principles MUST be made by updating this document and capturing the rationale in the PR description.
Governance changes follow semantic versioning:
- Patch: wording clarifications or non-behavioral refinement.
- Minor: new principle, workflow, or constraint added.
- Major: principle removal, incompatible policy change, or contract-breaking governance revision.

**Version**: 1.2.0 | **Ratified**: 2026-06-06 | **Last Amended**: 2026-06-06
