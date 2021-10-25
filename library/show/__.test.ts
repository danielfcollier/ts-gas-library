// --------------------------------------------------------------------------------------------------
import Show from './Show';
// --------------------------------------------------------------------------------------------------
function testLibShow() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/show > class Show', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .firstName(fullName: string)', assert => {
            //
            assert.strictEqual(Show.firstName('Daniel Collier'), 'Daniel');
            //
            assert.strictEqual(Show.firstName('Daniel A . F. Collier'), 'Daniel');
            //
            assert.strictEqual(Show.firstName('Daniel'), 'Daniel');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .lastName(fullName: string)', assert => {
            //
            assert.strictEqual(Show.lastName('Daniel Collier'), 'Collier');
            //
            assert.strictEqual(Show.lastName('Daniel A . F. Collier'), 'Collier');
            //
            assert.strictEqual(Show.lastName('Collier'), 'Collier');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .email(email: string)', assert => {
            //
            assert.strictEqual(Show.email('DANIELFCOLLIER@GMAIL.COM'), 'danielfcollier@gmail.com');
            //
            assert.strictEqual(Show.email('danielfcollier @ gmail . com'), 'danielfcollier@gmail.com');
            //
            assert.strictEqual(Show.email('DanielFCollier@gmail.com'), 'danielfcollier@gmail.com');
            //
            assert.strictEqual(Show.email('danielfcollier@gmail.com'), 'danielfcollier@gmail.com');
            // 
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .postalCode(postalCode: string)', assert => {
            //
            assert.strictEqual(Show.postalCode('88037615'), '88.037-615');
            //
            assert.strictEqual(Show.postalCode('88037-615'), '88.037-615');
            //
            assert.strictEqual(Show.postalCode('88 037 615'), '88.037-615');
            //
            assert.strictEqual(Show.postalCode('88.037-615'), '88.037-615');
            //
            assert.strictEqual(Show.postalCode('88.037-1X'), '');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .dateForSystem(date: Date)', assert => {
            //
            assert.strictEqual(Show.dateForSystem(new Date('1985-01-10')), '1985-01-10');
            //
            assert.strictEqual(Show.dateForSystem(new Date('2000-1-1')), '2000-01-01');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .dateForPerson(date: Date)', assert => {
            //
            assert.strictEqual(Show.dateForPerson(new Date('1985-01-10')), '10/01/1985');
            //
            assert.strictEqual(Show.dateForPerson(new Date('2000-01-1')), '01/01/2000');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .document(document: string)', assert => {
            //
            assert.strictEqual(Show.document('93121814753'), '931.218.147-53');
            //
            assert.strictEqual(Show.document('313.858.288-54'), '313.858.288-54');
            //
            assert.strictEqual(Show.document('21320202000190'), '21.320.202/0001-90');
            //
            assert.strictEqual(Show.document('81.418.672/0001-13'), '81.418.672/0001-13');
            //
            assert.strictEqual(Show.document(''), '');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .phone(phone: string)', assert => {
            //
            assert.strictEqual(Show.phone('1199887766'), '(11) 9988-7766');
            //
            assert.strictEqual(Show.phone('(11) 9988-7766'), '(11) 9988-7766');
            //
            assert.strictEqual(Show.phone('(11) 9988-77'), '');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .cellPhone(cellPhone: string)', assert => {
            //
            assert.strictEqual(Show.cellPhone('11999887766'), '(11) 99988-7766');
            //
            assert.strictEqual(Show.cellPhone('1199887766'), '(11) 99988-7766');
            //
            assert.strictEqual(Show.cellPhone('+5511999887766'), '(11) 99988-7766');
            //
            assert.strictEqual(Show.cellPhone('+551199887766'), '(11) 99988-7766');
            //
            assert.strictEqual(Show.cellPhone('(11) 9988-77'), '');
            //
            assert.strictEqual(Show.cellPhone('+5511998877'), '');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .twoDecimals(number: number)', assert => {
            //
            assert.strictEqual(Show.twoDecimals(1), '1.00');
            //
            assert.strictEqual(Show.twoDecimals(1.125), '1.13');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .desiredPattern(value: string, {regex, mask})', assert => {
            //
            assert.strictEqual(
                Show.desiredPattern('11999887766', { regex: /(\d{2})(\d{5})(\d{4})/, mask: '($1) $2-$3' }),
                '(11) 99988-7766'
            );
            //
            assert.strictEqual(
                Show.desiredPattern('11223', { regex: /(\d{4})(\d{1})/, mask: '$1-$2' }),
                '1122-3'
            );
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibShow;
// --------------------------------------------------------------------------------------------------