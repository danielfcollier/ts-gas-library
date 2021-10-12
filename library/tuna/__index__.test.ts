// --------------------------------------------------------------------------------------------------
import process from '../../.env';
import TunaFlow from '.';
import { mountTunaSandboxParams, TunaSandboxPaymentActions } from './.sandbox/payment';
// --------------------------------------------------------------------------------------------------
function testLibTuna() {
    //
    if (!process.env.IS_SANDBOX) {
        throw new Error('Not in sanbox mode!');
    }
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/tuna > class TunaFlow', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test(`for method: .paymentRequest(customer: ITunaCustomer, options?) `, assert => {

            const orderId = Utilities.getUuid();
            const cardHolderName = TunaSandboxPaymentActions.Captured;
            const { customer, order } = mountTunaSandboxParams({ orderId, cardHolderName, });

            const result = TunaFlow.paymentRequest(customer, order);

            const expected = {
                "status": "2",
                "methods": [
                    {
                        "message": {
                            "source": 3,
                            "code": "GwResultOk",
                            "message": "Successfull authorization"
                        },
                        "methodType": "1",
                        "status": "2",
                        "methodId": 0,
                        "operationId": "O00011346544000001F600"
                    }
                ],
                "paymentKey": "13465440000019B",
                "partnerUniqueId": orderId,
                "code": 1,
                "operationId": "O00011346544000001F6"
            };

            Object.keys(expected).forEach(key => {
                assert.ok(result.hasOwnProperty(key), `validate property: ${key}`);
            });

            delete result.methods[0].operationId;
            delete expected.methods[0].operationId;
            delete result.paymentKey;
            delete expected.paymentKey;
            delete result.operationId;
            delete expected.operationId;
        
            assert.deepEqual(result, expected, 'validate response');
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test(`for method: .paymentRefund(order: Pick<ITunaOrder, 'id' | 'paymentDate'>, options?)`, assert => {

            const orderId = Utilities.getUuid();
            const cardHolderName = TunaSandboxPaymentActions.Captured;
            const { customer, order } = mountTunaSandboxParams({ orderId, cardHolderName, });

            TunaFlow.paymentRequest(customer, order);
            const result = TunaFlow.paymentRefund({...order, paymentDate: new Date()});

            const expected = {
                "status": "3",
                "code": 1,
                "message": "Refunded"
            };

            Object.keys(expected).forEach(key => {
                assert.ok(result.hasOwnProperty(key), `validate property: ${key}`);
            });
        
            assert.deepEqual(result, expected, 'validate response');
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibTuna;
// --------------------------------------------------------------------------------------------------