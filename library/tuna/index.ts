// ------------------------------------------------------------------------------------------------
import TunaMerchant from "./merchant";
import TunaPayment from "./payment";
import TunaToken from "./token";
import { ITunaCustomer, ITunaOrder } from "./interfaces";
import { tunaPaymentStatus } from "./config";
// ------------------------------------------------------------------------------------------------
export default class TunaFlow {
  // ----------------------------------------------------------------------------------------------
  static paymentRequest(customer: ITunaCustomer, order: ITunaOrder, options?) {
    let code: any;

    // New Session
    [order.sessionId, code] = TunaToken.newSession(customer, options);
    if (code !== 1) throw new Error();

    // Generate Token
    [order.token, order.card.brandName, code] = TunaToken.generate(order, options);
    if (code !== 1) throw new Error();

    // Bind Token with Session
    code = TunaToken.bind(order);
    if (code !== 1) throw new Error();

    TunaToken.mount(order);

    // Payment Request
    const response = TunaPayment.init(customer, order, options);

    return response;
  }
  // ----------------------------------------------------------------------------------------------
  static paymentRefund(order: Pick<ITunaOrder, 'id' | 'paymentDate'>, options?) {
    const { status, code } = TunaPayment.cancelAll(order, options);
    return { status, code, message: tunaPaymentStatus[status ?? 10] };
  }
  // ----------------------------------------------------------------------------------------------
  static paymentStatus(order: Pick<ITunaOrder, 'id' | 'paymentDate'>, options?) {
    const { status, code } = TunaPayment.status(order, options);
    return { status, code, message: tunaPaymentStatus[status ?? 10] };
  }
  // ----------------------------------------------------------------------------------------------
}
// ------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------
// function paymentStatusFlow() {
//     // Operation Status
//     const statusResponse = Payment.status(storedPaymentResponse, { verbose: true });

//     Payment.showStatus(statusResponse);
// }