import {coinChange, optimizedCoinChange} from './coin-change'

describe('coinChange', () => {
  it('should return the fewest number of coins the you need to make up amount', () => {
    expect(coinChange([1, 2, 5], 11)).toEqual(3);
    expect(coinChange([2], 3)).toEqual(-1);
    expect(coinChange([1], 0)).toEqual(0);
  })
});

describe('optimizedCoinChange', () => {
  it('should return the fewest number of coins the you need to make up amount', () => {
    expect(optimizedCoinChange([1, 2, 5], 11)).toEqual(3);
    expect(optimizedCoinChange([2], 3)).toEqual(-1);
    expect(optimizedCoinChange([1], 0)).toEqual(0);
  })
});