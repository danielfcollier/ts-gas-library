/*
PAYMENT_CREATED
PAYMENT_UPDATED
PAYMENT_CONFIRMED
PAYMENT_RECEIVED
PAYMENT_OVERDUE
PAYMENT_DELETED
PAYMENT_RESTORED
PAYMENT_REFUNDED
PAYMENT_RECEIVED_IN_CASH_UNDONE
PAYMENT_CHARGEBACK_REQUESTED
PAYMENT_CHARGEBACK_DISPUTE
PAYMENT_AWAITING_CHARGEBACK_REVERSAL
PAYMENT_DUNNING_RECEIVED
PAYMENT_DUNNING_REQUESTED
PAYMENT_BANK_SLIP_VIEWED
PAYMENT_CHECKOUT_VIEWED

{
    "event": "PAYMENT_RECEIVED",
    "payment": {
        "object": "payment",
        "id": "pay_080225913252",
        "dateCreated": "2017-03-10",
        "customer": "cus_G7Dvo4iphUNk",
        "subscription": "sub_VXJBYgP2u0eO", //somente quando pertencer a uma assinatura
        "installment": "ins_000000001031", //somente quando pertencer a um parcelamento
        "paymentLink": "123517639363", //identificador do link de pagamento
        "dueDate": "2017-03-15",
        "value": 100.00,
        "netValue": 94.51,
        "billingType": "CREDIT_CARD",
        "status": "RECEIVED",
        "description": "Pedido 056984",
        "externalReference": "056984",
        "confirmedDate": "2017-03-15",
        "originalValue": null,
        "interestValue": null,
        "originalDueDate": "2017-06-10",
        "paymentDate": null,
        "clientPaymentDate": null,
        "invoiceUrl": "https://www.asaas.com/i/080225913252",
        "bankSlipUrl": null,
        "invoiceNumber": "00005101",
        "deleted": false,
        "creditCard": {
            "creditCardNumber": "8829",
            "creditCardBrand": "MASTERCARD",
            "creditCardToken": "a75a1d98-c52d-4a6b-a413-71e00b193c99"
        }
    }
}
*/