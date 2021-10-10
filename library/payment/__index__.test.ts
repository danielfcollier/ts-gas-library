// --------------------------------------------------------------------------------------------------
import process from '../../.env';
import { Customer, Order, Finances } from '.';
// --------------------------------------------------------------------------------------------------
function testLibPayment() {
    //
    if (!process.env.IS_SANDBOX) {
        throw new Error('Not in sanbox mode!');
    }
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/payment > class Customer', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test(`for method: .create(customer: Omit<ICustomer, 'id'>, options?)`, assert => {
            const result = Customer.create({
                externalReference: '73891731',
                name: 'Marcelo Almeida',
                email: 'marcelo.almeida@gmail.com',
                phone: '4733446637',
                mobilePhone: '4799376637',
                cpfCnpj: '24971563792',
                postalCode: '71535-080',
                addressNumber: 's/n',
                notificationDisabled: false,
                emailEnabledForProvider: false,
                smsEnabledForProvider: false,
                emailEnabledForCustomer: false,
                smsEnabledForCustomer: false,
                phoneCallEnabledForCustomer: false,
                foreignCustomer: false
            });

            const expected = {
                id: 'cus_000004743791',
                externalReference: '73891731',
                name: 'Marcelo Almeida',
                email: 'marcelo.almeida@gmail.com',
                phone: '4733446637',
                mobilePhone: '47999376637',
                cpfCnpj: '24971563792',
                postalCode: '71535080',
                addressNumber: 's/n',
                notificationDisabled: false,
                emailEnabledForProvider: false,
                smsEnabledForProvider: false,
                emailEnabledForCustomer: false,
                smsEnabledForCustomer: false,
                phoneCallEnabledForCustomer: false,
                observations: null,
                foreignCustomer: false
            };

            Object.keys(expected).forEach(key => {
                assert.ok(result.hasOwnProperty(key), `validate property: ${key}`);
            });

            delete result.id;
            delete expected.id;
            delete result.observations;
            delete expected.observations;
            assert.deepEqual(result, expected, 'validate response');
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibPayment;
// --------------------------------------------------------------------------------------------------