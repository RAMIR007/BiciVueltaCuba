# AI Team Architecture

## Purpose
A multi-agent working model for Bici Vuelta Cuba, coordinated from ChatGPT and represented in-repository for compatible coding agents.

## Components
- `AGENTS.md`: shared operating contract and safety boundaries.
- `.github/agents/*.agent.md`: specialist agent profiles for GitHub Copilot-compatible agent environments.
- `.github/skills/*/SKILL.md`: reusable procedural skills.
- `docs/CHATGPT_PROJECT_INSTRUCTIONS.md`: instructions to paste into a ChatGPT Project.
- `docs/CHATGPT_ORCHESTRATOR.md`: orchestration prompt and hand-off protocol.
- `docs/PROJECT_MASTER_PLAN.md`: initial execution roadmap.

## Agent topology
1. Project Manager / Orchestrator — owns task decomposition, sequencing, acceptance criteria and final review.
2. UI/UX Designer — user journeys, visual system, accessibility and responsive design.
3. Frontend Developer — Next.js, React, TypeScript and component implementation.
4. Backend Architect — data contracts, APIs, validation and integration design; no backend assumptions without inspection.
5. SEO & Growth Specialist — technical SEO, local discovery content, metadata and analytics recommendations.
6. QA & Security Engineer — tests, accessibility, security and regression review.
7. DevOps Engineer — Git workflow, CI, hosting configuration and deployment readiness; production changes prohibited.
8. Technical Documentation Agent — architecture, runbooks, decisions and change history.

## Workflow
Orchestrator -> discovery -> UX/architecture -> implementation -> QA/security -> documentation -> owner review.
Specialists may work in parallel only when their changes do not overlap. The orchestrator resolves conflicts and owns integration.

## ChatGPT and repository relationship
The repository files are durable, versioned agent/skill definitions. ChatGPT can use the project instructions and orchestrator prompt as its operating brief. These files do not, by themselves, instantiate independent background agents or automatically install Skills inside the ChatGPT product. In a coding environment that supports custom agents and agent skills, the `.github/agents` and `.github/skills` definitions can be loaded by that environment.

## Safety and autonomy
Routine implementation and local checks are autonomous on feature branches. Production deployment, merge to main, paid usage, external account changes, secret handling, and destructive operations always require explicit owner authorization. Default budget: zero.
