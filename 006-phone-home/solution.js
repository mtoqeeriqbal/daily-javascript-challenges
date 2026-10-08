function sendMessage(distances) {
    let totalDistance = 0;

    // Step 1: Calculate the total distance
    for (const distance of distances) {
        totalDistance += distance;
    }

    // Step 2: Calculate travel time
    const travelTime = totalDistance / 300000;

    // Step 3: Calculate satellite delay
    const numberOfSatellites = distances.length - 1;
    const satelliteDelay = numberOfSatellites * 0.5;

    // Step 4: Calculate total time
    const totalTime = travelTime + satelliteDelay;

    // Step 5: Round to 4 decimal places and return a number
    return Number(totalTime.toFixed(4));
}