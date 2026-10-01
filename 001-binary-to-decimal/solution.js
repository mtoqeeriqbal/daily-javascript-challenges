// Challenge 001: Binary to Decimal
// Given a string representing a binary number, return its decimal equivalent.

const binary_num = "10010";

function toDecimal(binary) {
    let decimal = 0;

    // Walk the digits left to right. The leftmost digit has the highest power,
    // so the power for position i is (length - 1 - i).
    // e.g. "101": i=0 -> 2^2, i=1 -> 2^1, i=2 -> 2^0

    for (let i = 0; i < binary.length; i++) {

        // binary[i] is a string ("0" or "1"); `*` coerces it to a number.
        decimal += (2 ** (binary.length - 1 - i)) * binary[i];
    
    }

    return decimal;
}

console.log(toDecimal(binary_num)); // 18
