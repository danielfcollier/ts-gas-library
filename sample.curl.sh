curl -w "\n\n" --location --request GET 'https://www.asaas.com/api/v3/financialTransactions?startDate=2021-08-01&finishDate=2021-08-31&limit=10&offset=0' \
--header 'content-type: application/json' \
--header 'access_token: 7cf0c7ee2bceded46004e2da6dbba3c786916a0451a6aa64620e31a43c3cfb86'

# (startDate, finishDate, offset = 0, limit = 10) limit_max = 100

curl -w "\n\n" --location --request GET 'https://www.asaas.com/api/v3/payments?clientPaymentDate%5Bge%5D=2021-08-01&PaymentDate%5Ble%5D=2021-08-31' \
--header 'content-type: application/json' \
--header 'access_token: 7cf0c7ee2bceded46004e2da6dbba3c786916a0451a6aa64620e31a43c3cfb86'

# PENDING, OVERDUE, CONFIRMED, RECEIVED, RECEIVED_IN_CASH

curl -w "\n\n" --location --request POST 'https://sandbox.asaas.com/api/v3/paymentLinks' \
--header 'content-type: application/json' \
--header 'access_token: c00909204d236b5c8edf707139f97e330e34782d41dff033598e38536aeab24d' \
--data-raw '{
  "name": "Venda de livros",
  "description": "Qualquer livro por apenas R$: 50,00",
  "dueDate": "2021-10-05",
  "value": 50,
  "billingType": "CREDIT_CARD",
  "chargeType": "INSTALLMENT",
  "maxInstallmentCount": 4
}'

GET https://www.asaas.com/api/v3/

GET https://www.asaas.com/api/v3/payments?paymentDate%5Bge%5D=2017-01-12&paymentDate%5Ble%5D=2017-11-28

{
  "object": "list",
  "hasMore": false,
  "totalCount": 3,
  "limit": 10,
  "offset": 0,
  "data": [
    {
      "object": "financialTransaction",
      "id": "ftn_000015274322",
      "value": -5,
      "balance": 3772.81,
      "type": "TRANSFER_FEE",
      "date": "2019-07-16",
      "description": "Taxa de transferência para conta bancária",
      "paymentId": null,
      "transferId": "b26df110-498b-40ba-b5c6-1428de4d59c7",
      "anticipationId": null,
      "billId": null,
      "invoiceId": null,
      "paymentDunningId": null,
      "creditBureauReportId": null
    },
    {
      "object": "financialTransaction",
      "id": "ftn_000015278797",
      "value": -50,
      "balance": 3777.81,
      "type": "TRANSFER",
      "date": "2019-07-16",
      "description": "Transferência para conta bancária",
      "paymentId": null,
      "transferId": "3b6c6838-54c5-434a-8a27-c577e278ae53",
      "anticipationId": null,
      "billId": null,
      "invoiceId": null,
      "paymentDunningId": null,
      "creditBureauReportId": null
    },
    {
      "object": "financialTransaction",
      "id": "ftn_000015278794",
      "value": -0.55,
      "balance": 3827.81,
      "type": "PHONE_CALL_NOTIFICATION_FEE",
      "date": "2019-07-16",
      "description": "Taxa de ligação para o cliente João da Silva referente a cobrança 00013218 vencida.",
      "paymentId": "pay_156621686548884",
      "transferId": null,
      "anticipationId": null,
      "billId": null,
      "invoiceId": null,
      "paymentDunningId": null,
      "creditBureauReportId": null
    }
  ]
}