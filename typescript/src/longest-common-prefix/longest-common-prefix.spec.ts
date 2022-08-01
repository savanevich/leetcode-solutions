import {longestCommonPrefix} from './longest-common-prefix'

test('Returns a string array answer', () => {
    expect(longestCommonPrefix([''])).toEqual('');
    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual('fl');
    expect(longestCommonPrefix(["dog","racecar","car"])).toEqual('');
});