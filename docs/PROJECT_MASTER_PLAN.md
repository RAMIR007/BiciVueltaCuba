# Project Master Plan — AI Team Foundation and Product Redesign

## Phase 0 — Agent foundation
- [x] Define shared safety and autonomy contract.
- [x] Define specialist agent profiles and reusable skills.
- [x] Add ChatGPT orchestration instructions.
- [ ] Owner reviews and approves pull request.
- [ ] Configure preferred coding environment to load custom agents and skills.

## Phase 1 — Repository discovery
- Inspect app routes, layouts, components, styles, assets, map implementation and data sources.
- Record current UX, technical debt, accessibility and performance baseline.
- Identify which routes and content are already specific to La Habana.
- Do not replace working features until their purpose and dependencies are understood.

## Phase 2 — Design system and UX
- Define tropical visual tokens, typography, spacing, color contrast and component states.
- Prioritize mobile navigation, route discovery, map/list interaction and clear calls to action.
- Create page-level wireframes before broad implementation.

## Phase 3 — La Habana MVP
- Professional homepage and city landing experience.
- Curated cycling route discovery with verified route facts and clear difficulty/distance data.
- Map and route detail experience with responsive fallbacks.
- Useful safety, preparation and practical information with source provenance.

## Phase 4 — Engineering quality
- Type, lint, test and build checks.
- Accessibility and responsive audits.
- Metadata, structured data where appropriate, sitemap and robots configuration.
- Performance and security review.

## Phase 5 — Release readiness
- Review preview deployment without incurring paid services.
- Verify environment configuration without exposing secrets.
- Prepare release notes and rollback plan.
- Production release remains owner-authorized only.

## Current baseline
Observed from repository on 2026-11-19: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Leaflet and React Leaflet. The repository README is still the default Next.js starter text; replace it only after documenting actual app behavior.
