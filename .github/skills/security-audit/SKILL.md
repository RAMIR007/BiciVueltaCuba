---
name: security-audit
description: Perform a practical security review of the Bici Vuelta Cuba codebase and changes.
---

# Security Audit Skill

Review authentication/authorization if present, input validation, output encoding, dependency risk, headers, cookies, CORS, exposed source maps, secrets and unsafe file handling.
Use existing tools and non-destructive checks only.
Never test against systems without authorization, disclose secrets, or run destructive commands.
Report severity, impact, evidence, remediation and residual risk. Do not claim comprehensive security certification.
