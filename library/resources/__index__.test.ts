// --------------------------------------------------------------------------------------------------
import { getAddressByPostalCode } from './address';
// --------------------------------------------------------------------------------------------------
function testLibResources() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/resources > function getAddressByPostalCode(postalCode: string)', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test('', assert => {
            //
            const result = getAddressByPostalCode('88.037-615');
            const expected = {
                street: 'Rua Pirineus',
                neighborhood: 'Córrego Grande',
                complement: '',
                city: 'Florianópolis',
                state: 'SC',
                postalCode: '88037615',
                country: 'Brasil'
            };

            Object.keys(expected).forEach(key => {
                assert.ok(result.hasOwnProperty(key), `validate property: ${key}`);
            });

            assert.deepEqual(result, expected, 'validate response');
            assert.deepEqual(getAddressByPostalCode('88.037-61'), '');
            assert.deepEqual(getAddressByPostalCode(''), '');
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibResources;
// --------------------------------------------------------------------------------------------------