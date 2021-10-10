// ------------------------------------------------------------------------------------------------
import TunaMerchant from "./merchant";
import TunaPayment from "./payment";
import TunaToken from "./token";
import { ITunaCustomer, ITunaOrder } from "./interfaces";
// ------------------------------------------------------------------------------------------------
export default class TunaFlow {
  // ----------------------------------------------------------------------------------------------
  static paymentRequest(customer: ITunaCustomer, order: ITunaOrder) {
    let code: any;

    // New Session
    [order.sessionId, code] = TunaToken.newSession(customer, order);
    if (code !== 1) throw new Error();

    // Generate Token
    [order.token, order.card.brandName, code] = TunaToken.generate(order);
    if (code !== 1) throw new Error();

    // Bind Token with Session
    code = TunaToken.bind(order);
    if (code !== 1) throw new Error();

    TunaToken.mount(order); 

    // Payment Request
    const response = TunaPayment.init(customer, order);

    return response;
  }
  // ----------------------------------------------------------------------------------------------
}
// ------------------------------------------------------------------------------------------------
//   const storedPaymentResponse = {
//     "status": "2",
//     "methods": [
//       {
//         "message": {
//           "source": 3,
//           "code": "GwResultOk",
//           "message": "Successfull authorization"
//         },
//         "methodType": "1",
//         "status": "2",
//         "methodId": 0,
//         "operationId": "O0001134653F000001EC00"
//       }
//     ],
//     "paymentKey": "134653F00000193",
//     "partnerUniqueId": null,
//     "code": 1,
//     "operationId": "O0001134653F000001EC",
//     paymentDate: '2021-10-07'
//   }
// ------------------------------------------------------------------------------------------------
// function paymentStatusFlow() {
//     // Operation Status
//     const statusResponse = Payment.status(storedPaymentResponse, { verbose: true });

//     Payment.showStatus(statusResponse);
// }
// // ------------------------------------------------------------------------------------------------
// function paymentCancelFlow() {
//     // Operation Status
//     const latestResponse = Payment.status(storedPaymentResponse);

//     // Cancel Request
//     Payment.cancelAll({ ...storedPaymentResponse, ...latestResponse }, { verbose: true });
// }
  // ------------------------------------------------------------------------------------------------
