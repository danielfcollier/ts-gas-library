// ------------------------------------------------------------------------------------------------
import process from "../../.env";
// ------------------------------------------------------------------------------------------------
const tunaHeaders = {
    'x-tuna-account': process.env.TUNA_ACCOUNT,
    'x-tuna-apptoken': process.env.TUNA_APP_TOKEN,
    'content-type': 'application/json; charset=UTF-8',
};
// ------------------------------------------------------------------------------------------------
const tunaPaymentStatus: string[] = [
    'Started',
    'Authorized',
    'Captured',
    'Refunded',
    'Denied',
    'Cancelled',
    'Abandoned',
    'Chargeback',
    'Money Received',
    'Partial Refunded',
    'Error',
    'RedFlag',
    'Pending Capture',
    'Pending Cancel',
    'Pending',
    'Not Processed'
];
// ------------------------------------------------------------------------------------------------
export { tunaHeaders, tunaPaymentStatus };
// ------------------------------------------------------------------------------------------------