/**
 * 322. Coin Change
 * Medium
 * 15.1K
 * 351
 * Companies
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 *
 *
 * Example 1:
 *
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 * Example 2:
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 * Example 3:
 *
 * Input: coins = [1], amount = 0
 * Output: 0
 */

export function coinChange(coins: number[], amount: number): number {
    if (amount === 0) {
        return 0;
    }
    let result = Number.POSITIVE_INFINITY;

    for (const coin of coins) {
        let current = 0;

        if (amount >= coin) {
            let next = coinChange(coins, amount - coin);
            if (next >= 0) {
                current = next + 1;
            }
        }

        if (current > 0) {
            result = Math.min(result, current);
        }
    }

    return (result === Number.POSITIVE_INFINITY) ? -1 : result;
};

export function optimizedCoinChange(coins: number[], amount: number): number {
    const dp = Array(amount + 1).fill(Infinity); // This arr tells us how many coins we need for each amount.
    dp[0] = 0; // To make 0, we need 0 coins.

    for (let coin of coins) { // Check each coin
        for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
            dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]; // If the last element is Infinity, then we cannot make the amount.
}