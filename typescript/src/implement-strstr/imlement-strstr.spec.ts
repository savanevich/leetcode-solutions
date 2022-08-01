import {strStr} from './implement-strstr'

test('Returns the index of the first occurrence', () => {
    expect(strStr('asasasa', 'sa')).toEqual(1);
    expect(strStr('aaaaa', 'bb')).toEqual(-1);
    expect(strStr('aaaaa', '')).toEqual(0);
});