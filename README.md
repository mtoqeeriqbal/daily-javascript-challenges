# Daily JavaScript Challenges

One coding challenge per day, solved in vanilla JavaScript.

## Rules

- One challenge per day.
- Solve them in order, starting from Challenge #1.
- Vanilla JavaScript only — no frameworks or libraries.

## Stats

- **Solved:** 1
- **Current streak:** 1 day

## Progress

| #   | Challenge         | Date | Concepts | Solution |
| --- | ----------------- | ---- | -------- | -------- |
| 001 | Binary to Decimal | 2026-10-01 | `for` loop, string indexing, `**` operator, type coercion | [solution](001-binary-to-decimal/solution.js) |

## How to Run

Most challenges run with Node.js:

```bash
node 001-binary-to-decimal/solution.js
```

Challenges that need a browser include an `index.html` — open it directly in a browser.

## Learnings

Key "aha" moments and mistakes worth remembering, with the challenge where each happened.

- **001:** `binary[i]` is a string, not a number. `*` converts it to a number automatically (`4 * "1"` → `4`), but `+` would join strings instead (`0 + "1"` → `"01"`). Use `Number()` to make the conversion explicit.
- **001:** Keep comments in sync with the code. My expected-output comment went stale when I changed the test input.
