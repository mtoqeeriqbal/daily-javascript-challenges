// Challenge 004: Stellar Classification
// Given a star's surface temperature in Kelvin, return its class:
// "O" (30,000+), "B" (10,000–29,999), "A" (7,500–9,999), "F" (6,000–7,499),
// "G" (5,200–5,999), "K" (3,700–5,199), or "M" (0–3,699).

function classification(temp) {

    // switch (true) compares true against each case expression.
    // The first case whose condition evaluates to true runs.
    switch (true) {
        // Hottest first, so this one needs no upper limit.
        case (temp >= 30000):
        return "O";

        case (temp >= 10000 && temp <= 29999):
        return "B";

        case (temp >= 7500 && temp <= 9999):
        return "A";

        case (temp >= 6000 && temp <= 7499):
        return "F";

        case (temp >= 5200 && temp <= 5999):
        return "G"; // Like our Sun!

        case (temp >= 3700 && temp <= 5199):
        return "K";

        case (temp >= 0 && temp <= 3699):
        return "M";

        // Nothing matched, e.g. a negative temperature.
        default:
        return "Invalid Temperature (Must be 0 or higher)";
    }

}

console.log(classification(5778));   // "G"
console.log(classification(3699));   // "M"
console.log(classification(210000)); // "O"
