function findLargestSingleNumber(numbers) {
    // Step 1: Create an empty object to store counts
    let counts = {};

    // Step 2: Count how many times each number appears in the array
    for (let num of numbers) {
        counts[num] = (counts[num] || 0) + 1;
    }

    // Step 3: Find the largest number that appears only once
    let largestSingle = null;
    for (let num in counts) {
        if (counts[num] === 1) {  // If the number appears only once
            if (largestSingle === null || num > largestSingle) {
                largestSingle = num;  // Update if it's larger than the current largest
            }
        }
    }

    // Step 4: Return the result
    return largestSingle === null ? null : Number(largestSingle);
}

// Example Usage:
console.log(findLargestSingleNumber([8, 8, 3, 3, 1, 4, 5, 6]));  // Output: 6
console.log(findLargestSingleNumber([8, 8, 7, 7, 3, 3, 3]));  // Output: null
