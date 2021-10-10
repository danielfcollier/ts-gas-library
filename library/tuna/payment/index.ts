// ------------------------------------------------------------------------------------------------
import process from "../../../.env";
import FetchApp from "../../fetch";
import tunaHeaders from "../headers";
// ------------------------------------------------------------------------------------------------
export default class TunaPayment {
    // --------------------------------------------------------------------------------------------
    private static API: string = process.env.TUNA_PAYMENT_ROOT_URL;
    // --------------------------------------------------------------------------------------------
    static init(params, options) {

        const { customer, order, card, token, sessionId } = params;
        const { id } = order;
        delete order.id;

        const payload = {
            partnerUniqueId: id,
            tokenSession: sessionId,
            customer,
            paymentData: {
                paymentMethods: [{
                    ...order,
                    cardInfo: {
                        token,
                        ...card,
                        billingInfo: params.address
                    }
                }],
                countrycode: 'BR'
            },
        };

        return FetchApp.post(`${this.API}/Init`, payload, { ...options, headers: tunaHeaders });
    }
    // ----------------------------------------------------------------------------------------------
    static status(params, options = { verbose: false }) {
        const statusResponse = this.statusFlow(params, options);
        const lastestResponse = statusResponse.methods.pop();
        return lastestResponse;
    }
    // ----------------------------------------------------------------------------------------------
    static statusFlow(params, options) {

        const { partnerUniqueId, paymentKey } = params;
        const payload = { partnerUniqueId, paymentKey };

        return FetchApp.post(`${this.API}/Status`, payload, { ...options, headers: tunaHeaders });
    }
    // ----------------------------------------------------------------------------------------------
    static showStatus(lastestResponse) {

        const HEX_BASE = 16;
        const key = lastestResponse.status;
        const message = tunaStatus[parseInt(`${key}`, HEX_BASE)];
        console.log(message);
    }
    // ----------------------------------------------------------------------------------------------
    static cancelAll(params, options) {

        const { partnerUniqueId, paymentKey, paymentDate } = params;
        const payload = {
            partnerUniqueId,
            paymentKey,
            paymentDate,
            cancelAll: true
        };
        /*
        const payload = {
          partnerUniqueId, // orderId
          paymentDate,
          cancelAll: true
        };
        */

        return FetchApp.post(`${this.API}/Cancel`, payload, { ...options, headers: tunaHeaders });
    }
    // ----------------------------------------------------------------------------------------------
    static cancel(params, options) {

        const { partnerUniqueId, paymentKey, methodId } = params;

        const payload = {
            partnerUniqueId,
            paymentKey,
            cancelAll: false,
            cardsDetail: [
                {
                    methodId
                }
            ]
        };

        return FetchApp.post(`${this.API}/Cancel`, payload, { ...options, headers: tunaHeaders });
    }
    // ----------------------------------------------------------------------------------------------
    static cancelItem({ sellerId }, options) {

        const payload = { merchantId: sellerId };

        return FetchApp.post(`${this.API}/CancelItem`, payload, { ...options, headers: tunaHeaders });
    }
    // ----------------------------------------------------------------------------------------------
}
  // ------------------------------------------------------------------------------------------------