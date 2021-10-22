// ------------------------------------------------------------------------------------------------
import process from "../../.env";
// ------------------------------------------------------------------------------------------------
const tunaHeaders = {
    'x-tuna-account': process.env.TUNA_ACCOUNT,
    'x-tuna-apptoken': process.env.TUNA_APP_TOKEN,
    'content-type': 'application/json; charset=UTF-8',
};
// ------------------------------------------------------------------------------------------------
enum TunaPaymentMethod {
    CreditCard = '1',
    DebitCard = '2',
    Boleto = '3',
    BankTransfer = '4',
    ThreeDSCredit = '5',
    ThreeDSDebit = '6',
    ThreeDS20Credit = '7',
    ThreeDS20Debit = '8',
    External = '9',
    GiftCard = 'A',
    Balance = 'B',
    CreditCardPrivateBrand = 'C',
    PIX = 'D'
}
// ------------------------------------------------------------------------------------------------
enum TunaPaymentStatus {
    Started = '0',
    Authorized = '1',
    Captured = '2',
    Refunded = '3',
    Denied = '4',
    Cancelled = '5',
    Abandoned ='6',
    Chargeback= '7',
    MoneyReceived = '8',
    PartialRefunded = '9',
    Error = 'A',
    RedFlag = 'B',
    PendingCapture ='C',
    PendingCancel = 'D',
    Pending = 'P',
    NotProcessed = 'N'
}
// ------------------------------------------------------------------------------------------------
const tunaPaymentStatusMap: Map<string, string> = new Map();
// ------------------------------------------------------------------------------------------------
const TUNA_PAYMENT_STATUS = [
    { code: '0', name: 'Started' },
    { code: '1', name: 'Authorized' },
    { code: '2', name: 'Captured' },
    { code: '3', name: 'Refunded' },
    { code: '4', name: 'Denied' },
    { code: '5', name: 'Cancelled' },
    { code: '6', name: 'Abandoned' },
    { code: '7', name: 'Chargeback' },
    { code: '8', name: 'MoneyReceived' },
    { code: '9', name: 'PartialRefunded' },
    { code: 'A', name: 'Error' },
    { code: 'B', name: 'RedFlag' },
    { code: 'C', name: 'PendingCapture' },
    { code: 'D', name: 'PendingCancel' },
    { code: 'P', name: 'Pending' },
    { code: 'N', name: 'NotProcessed' }
];
// ------------------------------------------------------------------------------------------------
TUNA_PAYMENT_STATUS.forEach(status => {
    tunaPaymentStatusMap.set(status.code, status.name);
});
// ------------------------------------------------------------------------------------------------
const tunaPaymentMessageMap: Map<string, string> = new Map();
// ------------------------------------------------------------------------------------------------
const TUNA_PAYMENT_MESSAGE = [
    { code: 1, name: 'Successful Payment.' },
    { code: -101, name: 'Request object is null.' },
    { code: -102, name: 'Invalid Payment.' },
    { code: -103, name: 'Invalid Payment Items.' },
    { code: -104, name: 'At least one card must be present for the type of payment.' },
    { code: -105, name: 'Partner id cannot be null.' },
    { code: -106, name: 'Partner Unique id cannot be null.' },
    { code: -107, name: 'Custom External Key s invalid.' },
    { code: -108, name: 'Partner Unique id already used.' },
    { code: -109, name: 'Invalid Configuration.' },
    { code: -110, name: 'CVV not valid.' },
    { code: -111, name: 'Partner Token was not provided.' },
    { code: -112, name: 'Invalid Partner.' },
    { code: -113, name: 'Invalid Partner Credentials.' },
    { code: -114, name: 'Invalid Partner Account.' },
    { code: -115, name: 'Cancel operation failed.' },
    { code: -116, name: 'Capture operation failed.' },
    { code: -117, name: 'Configuration error.' },
    { code: -118, name: 'Order Identifier can not be null.' },
    { code: -119, name: 'Operation failed.' },
    { code: -120, name: 'Invalid amount.' },
    { code: -121, name: 'Unexpected error.' },
    { code: -122, name: 'Merchant does not exist.' },
    { code: -123, name: 'Merchant Percentage and amount, both cannot be null.' },
    { code: -124, name: 'Merchant External Id cannot be null.' },
    { code: -125, name: 'Merchant Name cannot be null.' },
    { code: -126, name: 'Merchant Fantasy Name cannot be null.' },
    { code: -127, name: 'Merchant Status cannot be null.' },
    { code: -128, name: "Merchant status is invalid. Should be '1' for Active, '2' for Inactive or '3' for Suspended." },
    { code: -129, name: 'Merchant Name cannot be null.' },
    { code: -130, name: 'Agency of bank account cannot be null.' },
    { code: -131, name: 'Agency of bank account cannot be null.' },
    { code: -132, name: "Bank account type is invalid. Valid values are 'C' for Checking, 'S' for Saving, 'P' for Payment or 'D' for Deposit." },
    { code: -133, name: 'Date filters are invalid.' },
    { code: -134, name: 'Merchant Percentage invalid.' },
    { code: -135, name: 'Merchant amount invalid.' },
    { code: -136, name: 'Merchant shipping amount invalid' }
];
// ------------------------------------------------------------------------------------------------
TUNA_PAYMENT_MESSAGE.forEach(message => {
    tunaPaymentMessageMap.set(`${message.code}`, message.name);
});
// ------------------------------------------------------------------------------------------------
export {
    tunaHeaders,
    TunaPaymentMethod,
    TunaPaymentStatus,
    tunaPaymentStatusMap,
    tunaPaymentMessageMap
};
// ------------------------------------------------------------------------------------------------