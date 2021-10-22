// ------------------------------------------------------------------------------------------------
import TunaMerchant from "./merchant/index";
import TunaPayment from "./payment/index";
import TunaToken from "./token/index";
import { ITunaCustomer, OmitITunaMerchant, PickITunaMerchant, ITunaOrder } from "./interfaces";
import { tunaPaymentStatusMap } from "./config";
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
    return { status, code, message: tunaPaymentStatusMap.get(status ?? 10) };
  }
  // ----------------------------------------------------------------------------------------------
  static paymentStatus(order: Pick<ITunaOrder, 'id' | 'paymentDate'>, options?) {
    const { status, code } = TunaPayment.status(order, options);
    return { status, code, message: tunaPaymentStatusMap.get(status ?? 10) };
  }
  // ----------------------------------------------------------------------------------------------
  static merchantRegister(merchant: OmitITunaMerchant, options?) {
    return TunaMerchant.register(merchant, options);
  }
  // ----------------------------------------------------------------------------------------------
  static merchantGetStatus(merchant: PickITunaMerchant, options?) {
    return TunaMerchant.status(merchant, options);
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