export function optimalMinBitFlips(start: number, goal: number): number {

    // ^ - XOR operator for bites
    // Sets each bit to 1 if only one of two bits is 1
    let orVal = start ^ goal;

    let count = 0;
    while (orVal > 0) {
        count++;

        // & - AND operator
        // Sets each bit to 1 if both bits are 1
        orVal = orVal & (orVal - 1);
    }

    return count;
}