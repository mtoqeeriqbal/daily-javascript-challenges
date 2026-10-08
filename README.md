# Daily JavaScript Challenges

One coding challenge per day, solved in vanilla JavaScript.

## Rules

- One challenge per day.
- Solve them in order, starting from Challenge #1.
- Vanilla JavaScript only — no frameworks or libraries.

## Stats

- **Solved:** 6
- **Current streak:** 1 day

## Progress

| #   | Challenge         | Date | Concepts | Solution |
| --- | ----------------- | ---- | -------- | -------- |
| 001 | Binary to Decimal | 2026-10-01 | `for` loop, string indexing, `**` operator, type coercion | [solution](001-binary-to-decimal/solution.js) |
| 002 | Decimal to Binary | 2026-10-02 | `do...while` loop, `%` operator, `Math.floor`, string building | [solution](002-decimal-to-binary/solution.js) |
| 003 | Password Strength | 2026-10-05 | `for...of` loop, regex `.test()`, `includes()`, boolean flags, early `return` | [solution](003-password-strength/solution.js) |
| 004 | Stellar Classification | 2026-10-07 | `switch (true)`, comparison operators, `&&`, `default` case | [solution](004-stellar-classification/solution.js) |
| 005 | Exoplanet Search | 2026-10-09 | `for...of` loop, regex `.test()`, `charCodeAt()`, `Number()`, average, early `return` | [solution](005-exoplanet-search/solution.js) |
| 006 | Phone Home | 2026-10-09 | `for...of` loop, `.length`, `toFixed()`, `Number()` | [solution](006-phone-home/solution.js) |

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
- **003:** Boolean flags let one loop collect several facts at once; the scoring happens after the loop. Upper and lowercase share one flag check (`hasUppercase && hasLowercase`) because they count as a single rule.
- **003:** Ordered early returns (`< 2`, then `<= 3`, then the rest) avoid range checks like `score >= 2 && score <= 3`.
- **004:** `switch (true)` matches the first `case` whose expression is `true`, so it can stand in for an `if...else if` chain of range checks. `default` catches anything no case matched, such as a negative temperature.
- **005:** Character codes turn letters into numbers: `"A".charCodeAt(0)` is 65, so subtracting 55 maps `A`–`Z` to 10–35. `parseInt(character, 36)` does the same conversion in one call, because base 36 uses digits 0–9 plus A–Z.
- **006:** `toFixed(4)` returns a string and keeps trailing zeros (`(2.5).toFixed(4)` → `"2.5000"`). Wrapping it in `Number()` gives back a number and drops them (`2.5`).
- **006:** The number of satellites is `distances.length - 1`, because each distance is one hop between two points.
