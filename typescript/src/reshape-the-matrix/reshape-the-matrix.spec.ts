import {matrixReshape} from './reshape-the-matrix';

describe('matrixReshape', function () {
    it('should reshape a matrix', function () {
        expect(matrixReshape([[1,2],[3,4]], 1, 4)).toEqual([[1,2,3,4]])
        expect(matrixReshape([[1,2],[3,4]], 2, 4)).toEqual([[1,2],[3,4]])
    });
});