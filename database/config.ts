// // ------------------------------------------------------------------------------------------------
// const registrationStatusEnum = {
//     Disconnected: 0,
//     Pending: 1,
//     Approved: 2,
//     Review: 3,
//     Connected: 4,
//   };
//   // ------------------------------------------------------------------------------------------------
//   const objTemplate = {
//     registrationDate: '2021-09-01',
//     defaultFeePercent: 5,
//     isPaymentBlocked: true,
//     transferEnabled: true,
//     paymentPlan: 1,
//     integrationTunaStatus: 2,
//     integrationTunaCreditCardStatus: true,
//     integrationTunaPixStatus: false
//   };
//   // ------------------------------------------------------------------------------------------------
//   const DB = {
//     NAME: "SellerContract",
//     ID: "1VzDhWE11y7_y4WYy3ESv23_PAiAfnfJSeNurEW1YDZ0",
//     FIELD: {
//       "TimeStamp": 1,
//       "ID": 2,
//       "sellerId": 3,
//       "registrationDate": 4,
//       "defaultFeePercent": 5,
//       "isPaymentBlocked": 6,
//       "transferEnabled": 7,
//       "paymentPlan": 8,
//       "integrationTunaStatus": 9,
//       "integrationTunaCreditCardStatus": 10,
//       "integrationTunaPixStatus": 11,
//     }
//   };
//   // ------------------------------------------------------------------------------------------------
//   const CONSTS = {
//     MILLISECONDS_IN_A_DAY: 1000 * 60 * 60 * 24
//   };
//   // ------------------------------------------------------------------------------------------------
//   function getFields() {
//     const fields = Lib.getFields(objTemplate, offset = 3);
//     console.log(JSON.stringify(fields, null, 4));
//   }
//   // ------------------------------------------------------------------------------------------------