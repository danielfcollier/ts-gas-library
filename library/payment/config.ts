// --------------------------------------------------------------------------------------------------
enum PaymentStatus {
    Pending = 'PENDING',
    Received = 'RECEIVED',
    Confirmed = 'CONFIRMED',
    Overdue = 'OVERDUE',
    Refunded = 'REFUNDED',
    ReceivedInCash = 'RECEIVED_IN_CASH',
    RefundRequested = 'REFUND_REQUESTED',
    ChargebackRequested = 'CHARGEBACK_REQUESTED',
    ChargebackDispute = 'CHARGEBACK_DISPUTE',
    AwaitingChargebackReversal = 'AWAITING_CHARGEBACK_REVERSAL',
    DunningRequested = 'DUNNING_REQUESTED',
    DunningReceived = 'DUNNING_RECEIVED',
    AwaitingRiskAnalysis = 'AWAITING_RISK_ANALYSIS'
}
// --------------------------------------------------------------------------------------------------
enum BillingType {
    Boleto = 'BOLETO',
    CreditCard = 'CREDIT_CARD',
    DebitCard = 'DEBIT_CARD',
    Undefined = 'UNDEFINED',
    Transfer = 'Transferência',
    Deposit = 'TRANSFER',
    Pix = 'PIX'
}
// --------------------------------------------------------------------------------------------------
enum BillingTypeBR {
    Boleto = 'Boleto Bancário',
    CreditCard = 'Cartão de Crédito',
    DebitCard = 'Cartão de Débito',
    Undefined = 'Não Identificado',
    Transfer = 'Transferência',
    Deposit = 'Depósito Bancário',
    Pix = 'PIX'
}
// --------------------------------------------------------------------------------------------------
export { PaymentStatus, BillingType, BillingTypeBR };
// --------------------------------------------------------------------------------------------------