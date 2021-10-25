// --------------------------------------------------------------------------------------------------
import IsValid from './IsValid';
// --------------------------------------------------------------------------------------------------
function testLibValidation() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/validation > class IsValid', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .dateFromPerson(date: string)', assert => {
            //
            assert.ok(
                IsValid.dateFromPerson('10/01/1985')
            );
            //
            assert.notOk(
                IsValid.dateFromPerson('30/02/1985'),
                "February 30th doesn't exists!"
            );
            //
            assert.notOk(
                IsValid.dateFromPerson('1985-01-10'),
                "Not a valid date format!"
            );
            //
            assert.notOk(
                IsValid.dateFromPerson('10/01/85'),
                "Not a valid date format!"
            );
            //
            assert.notOk(
                IsValid.dateFromPerson(''),
                "Not a valid date format!"
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .postalCode(postalCode: string)', assert => {
            //
            assert.ok(IsValid.postalCode('88037615'));
            //
            assert.ok(IsValid.postalCode('88037-615'));
            //
            assert.ok(IsValid.postalCode('88.037-615'));
            //
            assert.notOk(
                IsValid.postalCode('10/01/1985'),
                "Invalid postal code information!"
            );
            //
            assert.notOk(
                IsValid.postalCode(''),
                "Not a valid date format"
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .phoneSize(phone: string)', assert => {
            //
            assert.ok(IsValid.phoneSize('(11) 999-887-766'));
            //
            assert.ok(IsValid.phoneSize('(11) 9998-87766'));
            //
            assert.ok(IsValid.phoneSize('(11) 99988-7766'));
            //
            assert.ok(IsValid.phoneSize('(11) 9988-7766'));
            //
            assert.ok(IsValid.phoneSize('11999887766'));
            //
            assert.ok(IsValid.phoneSize('1199887766'));
            //
            assert.ok(IsValid.phoneSize('+5511999887766'));
            //
            assert.ok(IsValid.phoneSize('+551199887766'));
            //
            assert.notOk(
                IsValid.phoneSize('+5511998877665544'),
                "Not a valid phone number!"
            );
            //
            assert.notOk(
                IsValid.phoneSize('+5511998877665544'),
                "Not a valid phone number!"
            );
            //
            assert.notOk(
                IsValid.phoneSize('999-887-766'),
                "Not a valid phone number!"
            );
            //
            assert.notOk(
                IsValid.phoneSize('00.000-000'),
                "Invalid phone number information!"
            );
            //
            assert.notOk(
                IsValid.phoneSize('10/01/1985'),
                "Invalid phone number information!"
            );
            //
            assert.notOk(
                IsValid.phoneSize(''),
                "Not a valid phone number!"
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .document(document: string)', assert => {
            //
            assert.ok(IsValid.document('93121814753'));
            //
            assert.ok(IsValid.document('313.858.288-54'));
            //
            assert.ok(IsValid.document('21320202000190'));
            //
            assert.ok(IsValid.document('81.418.672/0001-13'));
            //
            assert.notOk(
                IsValid.document('93121814754'),
                "Not a valid document!"
            );
            //
            assert.notOk(
                IsValid.document('313.858.288-53'),
                "Not a valid document!"
            );
            //
            assert.notOk(
                IsValid.document('21320202000191'),
                "Not a valid document!"
            );
            //
            assert.notOk(
                IsValid.document('81.418.672/0001-12'),
                "Not a valid document!"
            );
            //
            assert.notOk(
                IsValid.document('9312181475'),
                "Invalid document size!"
            );
            //
            assert.notOk(
                IsValid.document('931218147544'),
                "Invalid document size!"
            );
            //
            assert.notOk(
                IsValid.document('2132020200019'),
                "Invalid document size!"
            );
            //
            assert.notOk(
                IsValid.document('213202020001912'),
                "Invalid document size!"
            );
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibValidation;
// --------------------------------------------------------------------------------------------------