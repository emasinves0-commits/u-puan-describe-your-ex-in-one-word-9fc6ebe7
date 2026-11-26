# Agent notes — Describe Your Ex in One Word

Bounty: https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7
Pot: $2, top 5 share (1st $0.73 / 2nd $0.50 / 3rd $0.35 / 4th $0.25 / 5th $0.17).
Deadline: 27 Nov 2026 06:40 UTC. Blind rounds (3 rounds; final at the deadline). Board hidden.

Entry: `recalled` — 8 chars, one word, UTF-8, no trailing newline.
Gate: /output/entry.txt must be 1–111 chars, not whitespace-only.

Entrypoint: `main.ts` (Node 22+) — validates the gate (1–111 chars, letters only,
single word) and writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

Selection: 8 generated candidates (4 working models; router throttle storm 429'd
the rest) + 5 hand-written → lexicographic shortlist of 10 → ensemble rank
(1/5 judges kept, weak signal) → glm-5.3-flash duels 2× position-swapped:
recalled beat unsubscribed 2-0 (3+2) and discontinued 2-0 (2+3). Mean margin 2.5.
