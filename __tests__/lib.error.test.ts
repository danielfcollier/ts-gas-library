// --------------------------------------------------------------------------------------------------
import CallError from '../lib/error';
import ErrorTable from '../lib/error/config';
// --------------------------------------------------------------------------------------------------
function testLibError() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./lib/error > class CallError', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .execution()', assert => {
            assert.throws(() => { throw CallError.execution() }, ErrorTable.Execution);
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .calendarApp()', assert => {
            assert.throws(() => { throw CallError.calendarApp() }, ErrorTable.CalendarApp);
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .date()', assert => {
            assert.throws(() => { throw CallError.date() }, ErrorTable.Date);
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .postalCode()', assert => {
            assert.throws(() => { throw CallError.postalCode() }, ErrorTable.PostalCode);
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .document()', assert => {
            assert.throws(() => { throw CallError.document() }, ErrorTable.Document);
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .phone()', assert => {
            assert.throws(() => { throw CallError.phone() }, ErrorTable.Phone);
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .orderRefund()', assert => {
            assert.throws(() => { throw CallError.orderRefund() }, ErrorTable.OrderRefund);
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .orderUpdate()', assert => {
            assert.throws(() => { throw CallError.orderUpdate() }, ErrorTable.OrderUpdate);
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibError;
// --------------------------------------------------------------------------------------------------