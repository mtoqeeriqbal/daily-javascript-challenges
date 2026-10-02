# Daily JavaScript Challenges

One coding challenge per day, solved in vanilla JavaScript.

## Rules

- One challenge per day.
- Solve them in order, starting from Challenge #1.
- Vanilla JavaScript only — no frameworks or libraries.

## Stats

- **Solved:** 2
- **Current streak:** 2 days

## Progress

| #   | Challenge         | Date | Concepts | Solution |
| --- | ----------------- | ---- | -------- | -------- |
| 001 | Binary to Decimal | 2026-10-01 | `for` loop, string indexing, `**` operator, type coercion | [solution](001-binary-to-decimal/solution.js) |
| 002 | Decimal to Binary | 2026-10-02 | `do...while` loop, `%` operator, `Math.floor`, string building | [solution](002-decimal-to-binary/solution.js) |

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
- **002:** `do...while` runs its body at least once, so `toBinary(0)` returns `"0"`. A plain `while` would skip the loop and return `""`. The tests didn't cover 0, but "non-negative" in the problem did.
- **002:** The same `+` coercion that was a bug in 001 is the tool here: `remainder + binary` joins a number onto a string to build the result.
