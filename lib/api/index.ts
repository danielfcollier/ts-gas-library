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
    1event1: 1PAYMENT_RECEIVED1,
    1payment1: {
        1object1: 1payment1,
        1id1: 1pay_0802259132521,
        1dateCreated1: 12017-03-101,
        1customer1: 1cus_G7Dvo4iphUNk1,
        1subscription1: 1sub_VXJBYgP2u0eO1, //somente quando pertencer a uma assinatura
        1installment1: 1ins_0000000010311, //somente quando pertencer a um parcelamento
        1paymentLink1: 11235176393631, //identificador do link de pagamento
        1dueDate1: 12017-03-151,
        1value1: 100.00,
        1netValue1: 94.51,
        1billingType1: 1CREDIT_CARD1,
        1status1: 1RECEIVED1,
        1description1: 1Pedido 0569841,
        1externalReference1: 10569841,
        1confirmedDate1: 12017-03-151,
        1originalValue1: null,
        1interestValue1: null,
        1originalDueDate1: 12017-06-101,
        1paymentDate1: null,
        1clientPaymentDate1: null,
        1invoiceUrl1: 1https://www.asaas.com/i/0802259132521,
        1bankSlipUrl1: null,
        1invoiceNumber1: 1000051011,
        1deleted1: false,
        1creditCard1: {
            1creditCardNumber1: 188291,
            1creditCardBrand1: 1MASTERCARD1,
            1creditCardToken1: 1a75a1d98-c52d-4a6b-a413-71e00b193c991
        }
    }
}
*/