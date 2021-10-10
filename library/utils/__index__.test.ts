// --------------------------------------------------------------------------------------------------
import Utils from '.';
// --------------------------------------------------------------------------------------------------
function testLibUtils() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/utils > class Utils', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getSum(total: number, previous: number)', assert => {
            //
            assert.strictEqual(Utils.getSum(1, 2), 3);
            //
            assert.strictEqual(Utils.getSum(10, 20), 30);
            //
            assert.strictEqual(Utils.getSum(0, 2), 2);
            //
            assert.strictEqual(Utils.getSum(1, 0), 1);
            //
            assert.strictEqual(Utils.getSum(0, 0), 0);
            //
            assert.notStrictEqual(Utils.getSum(0, 0), 1);
            //
            assert.notStrictEqual(Utils.getSum(1, 1), 3);
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getQueryString(previous: queryString, current: queryString)', assert => {
            //
            assert.strictEqual(
                Utils.getQueryString('name=Daniel', 'birthday=1985-01-10'),
                'name=Daniel&birthday=1985-01-10'
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .cleanNumber(number: string)', assert => {
            //
            assert.strictEqual(Utils.cleanNumber('(11) 999-887-766'), '11999887766');
            //
            assert.strictEqual(Utils.cleanNumber('(aa) 9998-87766'), '999887766');
            //
            assert.strictEqual(Utils.cleanNumber('Daniel'), '');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .cleanPhone(cellPhone: string)', assert => {
            //
            assert.strictEqual(Utils.cleanPhone('(11) 999-887-766'), '11999887766');
            //
            assert.strictEqual(Utils.cleanPhone('+55 11 9998-87766'), '+5511999887766');
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibUtils;
// --------------------------------------------------------------------------------------------------