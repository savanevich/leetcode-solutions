import 'jest'
import {hasGroupsSizeX} from './x-of-a-kind-in-a-deck-of-cards'

test('removes provided number from an array and returns the amount of left elements', () => {
    expect(hasGroupsSizeX([1,2,3,4,4,3,2,1])).toBeTruthy();
    expect(hasGroupsSizeX([1])).toBeFalsy();
    expect(hasGroupsSizeX([11, 11, 22, 88])).toBeFalsy();
});
