// Challenge 002: Decimal to Binary
// Given a non-negative integer, return its binary representation as a string.

function toBinary(decimal) {
    let binary = "";

    // do...while runs the body at least once, so toBinary(0) returns "0".
    // A plain while (decimal !== 0) would skip the loop and return "".
    do {
        let remainder = decimal % 2;

        // Remainders come out right to left, so prepend each one.
        // `+` with a string joins them: 1 + "0" -> "10"
        binary = remainder + binary;

        decimal = Math.floor(decimal / 2);

    } while (decimal !== 0);

    return binary;
}

console.log(toBinary(18)); // "10010"
