function hasExoplanet(readings) {
    const numbers = [];

    // Step 1: Convert characters to numeric readings
    for (const character of readings) {
        let value;

        if (/[A-Z]/.test(character)) {
            value = character.charCodeAt(0) - 55;
        } else {
            value = Number(character);
        }

        numbers.push(value);
    }

    // Step 2: Calculate the total
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    // Step 3: Calculate the average and threshold
    const average = total / numbers.length;
    const threshold = average * 0.8;

    // Step 4: Check for a reading at or below the threshold
    for (const number of numbers) {
        if (number <= threshold) {
            return true;
        }
    }

    return false;
}