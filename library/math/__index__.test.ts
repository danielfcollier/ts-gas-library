// --------------------------------------------------------------------------------------------------
import { getArrayMin, getArrayMax, transposeArray } from '.';
// --------------------------------------------------------------------------------------------------
function testLibMath() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/math > function getArrayMin(array: any[])', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test(``, assert => {
            const array = [2, 4, 70, 1, 20, 80, 3, 9];
            const [result, index] = getArrayMin(array);
            const [expected, position] = [1, 3];
            
            assert.deepEqual(result, expected, 'validate result value');
            assert.deepEqual(index, position, 'validate result index');
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/math > function getArrayMax(array: any[])', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test(``, assert => {
            const array = [2, 4, 70, 2, 20, 80, 3, 9];
            const [result, index] = getArrayMax(array);
            const [expected, position] = [80, 5];

            assert.deepEqual(result, expected, 'validate result value');
            assert.deepEqual(index, position, 'validate result index');
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/math > function transposeArray(array: any[])', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test(``, assert => {
            const array = [
                [1, 1, 1],
                [2, 2, 2],
                [3, 3, 3]
            ];
            const result = transposeArray(array);
            const expected = [
                [1, 2, 3],
                [1, 2, 3],
                [1, 2, 3]
            ];

            assert.deepEqual(result, expected);
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibMath;
// --------------------------------------------------------------------------------------------------