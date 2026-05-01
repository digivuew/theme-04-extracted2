#!/usr/bin/env bash
set -euo pipefail

# Keep code-review-graph data fresh for commits and pushes.
REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

if command -v code-review-graph >/dev/null 2>&1; then
  CRG_BIN="$(command -v code-review-graph)"
elif [ -x "$HOME/Library/Python/3.11/bin/code-review-graph" ]; then
  CRG_BIN="$HOME/Library/Python/3.11/bin/code-review-graph"
else
  echo "[code-review-graph] CLI not found, skipping graph refresh." >&2
  exit 0
fi

if [ -d ".code-review-graph" ] && [ -f ".code-review-graph/graph.db" ]; then
  "$CRG_BIN" update >/dev/null
else
  "$CRG_BIN" build >/dev/null
fi

echo "[code-review-graph] Graph refresh complete."
