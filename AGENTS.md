# Bici Vuelta Cuba — Agent Operating Rules

This repository is the source of truth for the Bici Vuelta Cuba web project.

## Product direction
- Product: Bici Vuelta Cuba, a professional guide and route-discovery experience for cycling in Cuba.
- Initial geographic priority: La Habana.
- Visual direction: tropical, modern, legible, credible, and mobile-first.
- Existing project: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Leaflet and React Leaflet.
- Preserve the existing architecture unless a documented reason justifies a change.

## Autonomy policy
Agents may inspect, plan, implement, refactor, document, and run locally available checks without asking for routine approval. Work on the current task branch only.
- Never push directly to `main`, merge a pull request, or deploy to production.
- Never trigger paid services, paid APIs, metered AI, or billable infrastructure. Assume the budget is zero until the owner explicitly authorizes spending.
- Do not change production environment variables, domains, DNS, secrets, billing, access controls, or hosting settings.
- Do not expose, copy into logs, or commit secrets. Use placeholders in examples.
- Do not run destructive database, Git, filesystem, or cloud operations.
- Do not add dependencies unless necessary; explain the reason and prefer existing packages.
- Do not invent route data, businesses, opening hours, safety claims, or geographic facts. Mark unverified data clearly.
- If a task requires any prohibited action, prepare the change and explain the required owner action instead.

## Delivery workflow
1. Inspect the repository and current branch before editing.
2. State the goal, assumptions, affected areas, and acceptance criteria.
3. Implement the smallest coherent change.
4. Run available lint, type, and build checks when practical and non-billable.
5. Review the diff for regressions, accessibility, responsive behavior, security, and accidental secrets.
6. Summarize files changed, checks run and outcomes, known limitations, and next step.
7. Keep changes isolated on a feature branch and prepare a pull request; never merge it.

## Quality bar
- TypeScript strictness and clear component boundaries.
- Semantic HTML, keyboard support, visible focus, sufficient contrast, and accessible labels.
- Mobile-first responsive layouts.
- Good Core Web Vitals; optimize images and avoid unnecessary client components.
- For maps, include loading/error states, attribution, keyboard-accessible controls, and mobile usability.
- Keep documentation synchronized with behavior.
