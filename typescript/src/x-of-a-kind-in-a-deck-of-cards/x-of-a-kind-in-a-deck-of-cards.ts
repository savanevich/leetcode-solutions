/**
 * 914. X of a Kind in a Deck of Cards
 *
 * Easy
 *
 * 1369
 *
 * 334
 *
 *
 * In a deck of cards, each card has an integer written on it.
 *
 * Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
 *
 * Each group has exactly X cards.
 * All the cards in each group have the same integer.
 *
 *
 * Example 1:
 *
 * Input: deck = [1,2,3,4,4,3,2,1]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
 * Example 2:
 *
 * Input: deck = [1,1,1,2,2,2,3,3]
 * Output: false
 * Explanation: No possible partition.
 *
 *
 * Constraints:
 *
 * 1 <= deck.length <= 104
 * 0 <= deck[i] < 104
 * @param deck
 */
export function hasGroupsSizeX(deck: number[]): boolean {
    if (deck.length <= 1) {
        return false;
    }

    const acc = {};
    const sortedDeck = deck.sort();


    for (let i = 0; i < sortedDeck.length; i++) {
        if (acc.hasOwnProperty(deck[i])) {
            acc[deck[i]]++;
        } else {
            acc[deck[i]] = 1;
        }
    }

    const sumValues = Object.values(acc);

    let res = 0;
    for (let bucket of sumValues) {
        res = gcd(res, bucket);
    }

    return res > 1;
};

function gcd (a, b) {
    return b > 0 ? gcd(b, a % b) : a;
};