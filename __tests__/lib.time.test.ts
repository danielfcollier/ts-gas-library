// --------------------------------------------------------------------------------------------------
import Time from '../lib/time';
// --------------------------------------------------------------------------------------------------
function testLibTime() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./lib/time > class Time', hooks => {
        // ------------------------------------------------------------------------------------------
        // ------------------------------------------------------------------------------------------
        // ------------------------------------------------------------------------------------------
        
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getRelativeDate(number, {hours, minutes})', assert => {
            //
            assert.strictEqual(
                (Time.getRelativeDate(0, { hours: 0, minutes: 0 })).toDateString(),
                (new Date()).toDateString()
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getDateFromPerson(string)', assert => {
            //
            assert.strictEqual(
                (Time.getDateFromPerson('10/01/1985')).toISOString(),
                (new Date('1985-01-10T00:00:00')).toISOString()
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .incrementDateSystem(string, number)', assert => {
            //
            assert.strictEqual(
                (Time.incrementDateSystem('1985-01-10', 1)).toISOString(),
                (new Date('1985-01-11T00:00:00')).toISOString()
            );
            //
            assert.strictEqual(
                (Time.incrementDateSystem('1985-01-10', -1)).toISOString(),
                (new Date('1985-01-09T00:00:00')).toISOString()
            );
            //
            assert.strictEqual(
                (Time.incrementDateSystem('1985-01-10', 0)).toISOString(),
                (new Date('1985-01-10T00:00:00')).toISOString()
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .incrementHours(date, number)', assert => {
            //
            assert.strictEqual(
                (Time.incrementHours(new Date('1985-01-10T00:00:00'), 3)).toISOString(),
                (new Date('1985-01-10T03:00:00')).toISOString()
            );
            //
            assert.strictEqual(
                (Time.incrementHours(new Date('1985-01-10T00:00:00'), -3)).toISOString(),
                (new Date('1985-01-09T21:00:00')).toISOString()
            );
            //
            assert.strictEqual(
                (Time.incrementHours(new Date('1985-01-10T00:00:00'), 0)).toISOString(),
                (new Date('1985-01-10T00:00:00')).toISOString()
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getDayDiff(date, string)', assert => {
            //
            assert.strictEqual(Time.getDayDiff(new Date('1985-01-10'), '1985-01-10'), 0);
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .isLessThanDate(date, date)', assert => {
            //
            assert.ok(Time.isLessThanDate(new Date('1985-01-10'), new Date('1985-04-01')));
            //
            assert.notOk(Time.isLessThanDate(new Date('1985-04-01'), new Date('1985-01-10')));
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getWeek(date)', assert => {
            //
            assert.strictEqual(Time.getWeek(new Date('1985-01-01')), 1);
            //
            assert.strictEqual(Time.getWeek(new Date('1985-01-10')), 2);
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibTime;
// --------------------------------------------------------------------------------------------------