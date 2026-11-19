---
name: cloudflare-deployment
description: Review deployment readiness for the existing Bici Vuelta Cuba hosting setup without changing production.
---

# Cloudflare Deployment Skill

- First verify the actual hosting provider and deployment configuration; do not assume Cloudflare from prior discussions.
- Inspect build command, output/runtime compatibility, environment variable names and preview workflow.
- Prefer preview deployments and free existing capabilities.
- Never reveal environment variable values or edit secrets.
- Do not trigger paid builds/services, change DNS, production domains, billing, access controls or production settings.
- Never deploy production. Produce a checklist and wait for explicit owner authorization for release operations.
