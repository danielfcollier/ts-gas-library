// --------------------------------------------------------------------------------------------------
enum DocumentType {
    cpf = 'cpf',
    cnpj = 'cnpj'
}
// --------------------------------------------------------------------------------------------------
enum ConsultationLocation {
    Florianopolis = 'Florianópolis',
    Brasilia = 'Brasília'
}
// --------------------------------------------------------------------------------------------------
enum ConsultationType {
    Online = 'Online',
    Presencial = 'Presencial'
}
// --------------------------------------------------------------------------------------------------
enum ConsultationModality {
    Artemisia = 'Artemísia',
    BeijaFlor = 'Beija-flor',
    Girassol = 'Girassol',
    Diu = 'DIU'
}
// --------------------------------------------------------------------------------------------------
enum ConsultationStatus {
    Pending = 'Pendente',
    Done  = 'Realizada',
    Canceled = 'Cancelada'
}
// --------------------------------------------------------------------------------------------------
enum PaymentContract {
    release2021 = 'Valores 2021',
    update2021 = 'Atualização 2021',
    release2022 = 'Valores 2022'
}
// --------------------------------------------------------------------------------------------------
enum PaymentStatus {
    Pending,
    Received,
    Confirmed,
    Overdue,
    Refunded,
    ReceivedInCash,
    RefundRequested,
    ChargebackRequested,
    ChargebackDispute,
    AwaitingChargebackReversal,
    DunningRequested,
    DunningReceived,
    AwaitingRiskAnalysis
}
// --------------------------------------------------------------------------------------------------
enum BillingType {
    Boleto = 'Boleto Bancário',
    CreditCard = 'Cartão de Crédito',
    DebitCard = 'Cartão de Débito',
    Undefined = 'Não Identificado',
    Transfer = 'Transferência',
    Deposit = 'Depósito Bancário',
    Pix = 'PIX'
}
// --------------------------------------------------------------------------------------------------
export {
    DocumentType,
    ConsultationLocation,
    ConsultationType,
    ConsultationModality,
    ConsultationStatus,
    PaymentContract,
    PaymentStatus,
    BillingType
};
// --------------------------------------------------------------------------------------------------