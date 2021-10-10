// ------------------------------------------------------------------------------------------------
import process from "../../../.env";
import FetchApp from "../../fetch";
import tunaHeaders from "../headers";
// ------------------------------------------------------------------------------------------------
interface ITunaMerchant {
  merchantId: string;
}
// ------------------------------------------------------------------------------------------------
export default class TunaToken {
  // ----------------------------------------------------------------------------------------------
  private static API: string = process.env.TUNA_TOKEN_ROOT_URL;
  // ----------------------------------------------------------------------------------------------
  static newSession({ customer: ITunaCustomer, partnerId: string }, options?) {
    const payload = { customer, partnerId };

    return FetchApp.post(`${this.API}/NewSession`, payload, { ...options, headers: tunaHeaders });
  }
  // ----------------------------------------------------------------------------------------------
  static generate({ sessionId, card }, options?) {
    const payload = { sessionId, card: { ...card } };
    delete payload.card.cvv;

    return FetchApp.post(`${this.API}/Generate`, payload, { ...options, headers: tunaHeaders });
  }
  // ----------------------------------------------------------------------------------------------
  static bind({ sessionId, token, card }, options?) {
    const { cvv } = card;
    const payload = { sessionId, token, cvv };

    return FetchApp.post(`${this.API}/Bind`, payload, { ...options, headers: tunaHeaders });
  }
  // ----------------------------------------------------------------------------------------------
  static mount(params) {
    params.card.tokenSingleUse = params.card.singleUse ? 1 : 0;
    params.card.saveCard = params.card.singleUse;
    params.card.tokenProvider = 'Tuna';
    delete params.card.cardNumber;
    delete params.card.expirationMonth;
    delete params.card.expirationYear;
    delete params.card.singleUse;
  }
}
  // ------------------------------------------------------------------------------------------------