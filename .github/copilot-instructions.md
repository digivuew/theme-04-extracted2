# Copilot Workspace Instructions

When analyzing, reviewing, or searching this repository, check code-review-graph artifacts first and use them to scope deeper reads.

Search priority order:
1. Inspect `.code-review-graph/graph.db`-derived context via `code-review-graph` commands first.
2. Use `code-review-graph detect-changes`, `status`, or `search` style queries (when available) before broad text scans.
3. Only then expand to full workspace search when graph context is insufficient.

Operational rules:
- Treat `.code-review-graph/` as generated, local analysis data.
- Prefer graph-informed blast-radius analysis over whole-repo scanning.
- Keep graph fresh by running `code-review-graph update` before complex investigations.
