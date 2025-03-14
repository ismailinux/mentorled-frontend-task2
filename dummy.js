function ArrayChallenge(arr){
    if (arr.length < 2) return -1; // If there are less than 2 days, no profit can be made.

    let minPrice = arr[0];  // Track the minimum price seen so far
    let maxProfit = -1;      // Track the maximum profit

    for (let i = 1; i < arr.length; i++) {
        let currentPrice = arr[i];

        // Calculate potential profit if bought at minPrice
        let potentialProfit = currentPrice - minPrice;

        // Update maxProfit if we get a better profit
        maxProfit = Math.max(maxProfit, potentialProfit);

        // Update minPrice if we find a new lower price
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit > 0 ? maxProfit : -1; // Return maxProfit if it's positive, otherwise -1
}

// Test cases
console.log(ArrayChallenge([44, 30, 24, 32, 35, 30, 40, 38, 15])); // Output: 16
console.log(ArrayChallenge([10, 9, 8, 2])); // Output: -1
console.log(ArrayChallenge([10, 12, 4, 5, 9])); // Output: 5
console.log(ArrayChallenge([14, 20, 4, 12, 5, 11])); // Output: 8
