// ------------------------------------------------------------------------------------------------
import process from "../../../.env";
import FetchApp from "../../fetch/FetchApp";
import { tunaHeaders, tunaPaymentStatus } from "../config";
import { ITunaCreditCard, ITunaCustomer, ITunaOrder } from "../interfaces";
// ------------------------------------------------------------------------------------------------
type ICrediCardSelector = Pick<ITunaCreditCard, 'cardHolderName' | 'cvv' | 'brandName' | 'tokenSingleUse' | 'saveCard' | 'tokenProvider'>;
// ------------------------------------------------------------------------------------------------
export default class TunaPayment {
    // --------------------------------------------------------------------------------------------
    private static API: string = `${process.env.TUNA_PAYMENT_ROOT_URL}/api/Payment`;
    // --------------------------------------------------------------------------------------------
    static init(customer: ITunaCustomer, order: ITunaOrder, options?) {

        const customerSelector =
            ({ id, email, name, document, documentType }) => {
                return ({ id, email, name, document, documentType });
            };
        const { id, sessionId, paymentMethodType, amount, card, token, address, phone } = order;
        const creditCardSelector =
            ({ cardHolderName, cvv, brandName, tokenSingleUse, saveCard, tokenProvider }: ICrediCardSelector) => {
                return ({ cardHolderName, cvv, brandName, tokenSingleUse, saveCard, tokenProvider })
            };

        const payload = {
            partnerUniqueId: id,
            tokenSession: sessionId,
            customer: customerSelector(customer),
            paymentData: {
                paymentMethods: [{
                    paymentMethodType,
                    amount,
                    cardInfo: {
                        token,
                        ...creditCardSelector(card),
                        billingInfo: {
                            ...(address ?? customer.address),
                            phone: (phone ?? customer.phone)
                        }
                    }
                }],
                countrycode: 'BR'
            },
        };

        return FetchApp
            .post(
                `${this.API}/Init`,
                payload,
                { ...options, headers: tunaHeaders }
            );
    }
    // ----------------------------------------------------------------------------------------------
    static cancelAll(order: Pick<ITunaOrder, 'id' | 'paymentDate'>, options?) {

        const { id, paymentDate } = order;
        const payload = {
            partnerUniqueId: id,
            paymentDate: Utilities.formatDate(paymentDate, 'GMT', "yyyy-MM-dd'T'HH:mm:ss"),
            cancelAll: true
        };

        return FetchApp.post(`${this.API}/Cancel`, payload, { ...options, headers: tunaHeaders });
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
        const message = tunaPaymentStatus[parseInt(`${key}`, HEX_BASE)];
        console.log(message);
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