// Challenge 003: Password Strength
// Given a password string, return "weak", "medium", or "strong".
// Rules: at least 8 characters; both uppercase and lowercase letters;
// at least one number; at least one special character from !@#$%^&*.
// Fewer than 2 rules met is "weak", 2–3 is "medium", all 4 is "strong".

function checkStrength(password) {
    const specialCharacters = "!@#$%^&*";
    let score = 0;

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecial = false;

    // for...of walks the string one character at a time.
    for (const character of password) {
        // regex.test() returns true or false. The character class
        // [A-Z] matches any single uppercase letter.
        if (/[A-Z]/.test(character)) hasUppercase = true;
        if (/[a-z]/.test(character)) hasLowercase = true;
        if (/[0-9]/.test(character)) hasNumber = true;

        // includes() checks if the character appears in the allowed set.
        if (specialCharacters.includes(character)) hasSpecial = true;
    }

    // Upper and lower case together count as one rule, so 4 rules total.
    if (password.length >= 8) score++;
    if (hasUppercase && hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    // Early returns: each check only runs if the previous one didn't return.
    if (score < 2) return "weak";
    if (score <= 3) return "medium";
    return "strong";
}

console.log(checkStrength("123456"));         // "weak"
console.log(checkStrength("PASSWORD123!"));   // "medium"
console.log(checkStrength("S3cur3P@ssw0rd")); // "strong"
