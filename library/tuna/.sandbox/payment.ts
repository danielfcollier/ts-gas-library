// ------------------------------------------------------------------------------------------------
import { ITunaCustomer, ITunaOrder } from "../interfaces";
// ------------------------------------------------------------------------------------------------
enum TunaSandboxPaymentActions {
    Authorized = 'Authorized',
    Captured = 'Captured',
    NotAuthorized = 'Not Authorized',
    Error = 'Error',
    Invalid = 'Invalid',
    Pending = 'Pending',
    Expired = 'Expired'
};
// ------------------------------------------------------------------------------------------------
function mountTunaSandboxParams({ orderId, cardHolderName }) {
    // --------------------------------------------------------------------------------------------
    const customer: ITunaCustomer = {
        id: '7',
        email: "daniel.collier@tuna.uy",
        phone: '(61) 324 421 21',
        document: '00321278127',
        documentType: 'CPF',
        name: 'Daniel Collier',
        address: {
            street: 'Ses Av. Das Nações',
            number: 'Q811',
            complement: 'Bloco G',
            neighborhood: 'Brasilia',
            city: 'Brasilia',
            state: 'DF',
            country: 'BR',
            postalCode: '70429-900',
        }
    };
    // --------------------------------------------------------------------------------------------
    const order: ITunaOrder = {
        id: orderId,
        paymentMethodType: '1',
        amount: 20,
        card: {
            cardNumber: '4111111111111111',
            cardHolderName,
            expirationMonth: 12,
            expirationYear: (new Date()).getFullYear() + 1,
            cvv: '222',
            singleUse: false
        }
    };
    // --------------------------------------------------------------------------------------------
    return { customer, order };
    // --------------------------------------------------------------------------------------------
};
// ------------------------------------------------------------------------------------------------
export { TunaSandboxPaymentActions, mountTunaSandboxParams };
// ------------------------------------------------------------------------------------------------