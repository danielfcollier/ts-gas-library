// --------------------------------------------------------------------------------------------------
const paymentStatusList = [
    'PENDING',
    'RECEIVED',
    'CONFIRMED',
    'OVERDUE',
    'REFUNDED',
    'RECEIVED_IN_CASH',
    'REFUND_REQUESTED',
    'CHARGEBACK_REQUESTED',
    'CHARGEBACK_DISPUTE',
    'AWAITING_CHARGEBACK_REVERSAL',
    'DUNNING_REQUESTED',
    'DUNNING_RECEIVED',
    'AWAITING_RISK_ANALYSIS'
];
// --------------------------------------------------------------------------------------------------
const billingTypeList = [
    'BOLETO',
    'CREDIT_CARD',
    'DEBIT_CARD',
    'UNDEFINED',
    'TRANSFER',
    'DEPOSIT',
    'PIX'
];
// --------------------------------------------------------------------------------------------------
export { paymentStatusList, billingTypeList };
// --------------------------------------------------------------------------------------------------