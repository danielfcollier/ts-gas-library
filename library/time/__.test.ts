// --------------------------------------------------------------------------------------------------
import process from '../../.env';
import Time from './Time';
// --------------------------------------------------------------------------------------------------
function testLibTime() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/time > class Time', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getDaysOfMonth(year: number, month: number)', assert => {
            //
            const resultForJanuary = Time.getDaysOfMonth(2021, 0);
            const expectedForJanuary = {
                start: (new Date('2021-01-01T00:00:00')),
                end: (new Date('2021-01-31T00:00:00'))
            };

            Object.keys(resultForJanuary).forEach(key => {
                assert.strictEqual(
                    resultForJanuary[key].toISOString(),
                    expectedForJanuary[key].toISOString()
                );
            });
            //
            const resultForApril = Time.getDaysOfMonth(2021, 3);
            const expectedForApril = {
                start: (new Date('2021-04-01T00:00:00')),
                end: (new Date('2021-04-30T00:00:00'))
            };

            Object.keys(resultForJanuary).forEach(key => {
                assert.strictEqual(
                    resultForApril[key].toISOString(),
                    expectedForApril[key].toISOString()
                );
            });

        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getTimestamp(date: Date)', assert => {
            //
            assert.strictEqual(
                process.env.GMT_LOCATION,
                'America/Sao_Paulo'
            );
            //
            assert.strictEqual(
                Time.getTimestamp(new Date('2020-01-10T12:00:00')),
                '2020-01-10T09:00:00'
            );
            //
            assert.strictEqual(
                Time.getTimestamp(new Date('2020-01-10T00:00:00')),
                '2020-01-09T21:00:00'
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getTimeDiffInMinutes(date: Date, dateRefence: Date)', assert => {
            //
            assert.strictEqual(
                Time.getTimeDiffInMinutes(new Date('1985-01-10T01:00:00'), new Date('1985-01-10T00:00:00')),
                60
            );
            //
            assert.strictEqual(
                Time.getTimeDiffInMinutes(new Date('1985-01-09T23:00:00'), new Date('1985-01-10T00:00:00')),
                -60
            );
            //
            assert.strictEqual(
                Time.getTimeDiffInMinutes(new Date('1985-01-10T01:30:00'), new Date('1985-01-10T00:00:00')),
                90
            );
            //
            assert.strictEqual(
                Time.getTimeDiffInMinutes(new Date('1985-01-10T00:00:00'), new Date('1985-01-10T00:00:00')),
                0
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getDayDiff(date: Date, dateRefence: string)', assert => {
            //
            assert.strictEqual(Time.getDayDiff(new Date('1985-01-10'), '1985-01-10'), 0);
        });

        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getRelativeDate(dayOffset: number, {hours: number, minutes: number})', assert => {
            //
            assert.strictEqual(
                (Time.getRelativeDate(0, { hours: 0, minutes: 0 })).toDateString(),
                (new Date()).toDateString()
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getDateFromPerson(date: string)', assert => {
            //
            assert.strictEqual(
                (Time.getDateFromPerson('10/01/1985')).toISOString(),
                (new Date('1985-01-10T00:00:00')).toISOString()
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .incrementDateSystem(date: string, days: number)', assert => {
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
        QUnit.test('for method: .incrementHours(date: Date, hours: number)', assert => {
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
            //
            assert.strictEqual(
                (Time.incrementHours(new Date('1985-01-10T00:00:00'), 1.5)).toISOString(),
                (new Date('1985-01-10T01:30:00')).toISOString()
            );
            //
            assert.strictEqual(
                (Time.incrementHours(new Date('1985-01-10T00:30:00'), 0.5)).toISOString(),
                (new Date('1985-01-10T01:00:00')).toISOString()
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .isLessThanDate(date: Date, date: Date)', assert => {
            //
            assert.ok(Time.isLessThanDate(new Date('1985-01-10'), new Date('1985-04-01')));
            //
            assert.notOk(Time.isLessThanDate(new Date('1985-04-01'), new Date('1985-01-10')));
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .getWeek(date: string | Date)', assert => {
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