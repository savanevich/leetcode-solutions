import 'jest'
import {canThreePartsEqualSum} from './array-partition'

test('counts good triplets', () => {
    expect(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])).toBeTruthy();
    expect(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1])).toBeFalsy();
    expect(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4])).toBeTruthy();
});
