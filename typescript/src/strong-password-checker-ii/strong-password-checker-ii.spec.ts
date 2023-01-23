import {strongPasswordCheckerII} from './strong-password-checker-ii';

describe('strongPasswordCheckerII', function () {
    it('should check whether password is strong', function () {
        expect(strongPasswordCheckerII("IloveLe3tcode!")).toBeTruthy()
        expect(strongPasswordCheckerII("Me+You--IsMyDream")).toBeFalsy()
        expect(strongPasswordCheckerII("1aB!")).toBeFalsy()
    });
});