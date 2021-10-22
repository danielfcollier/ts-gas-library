// ------------------------------------------------------------------------------------------------
import process from "../../../.env";
import FetchApp from "../../fetch/index";
import { tunaHeaders } from "../config";
import { ITunaCustomer, ITunaOrder } from "../interfaces";
// ------------------------------------------------------------------------------------------------
export default class TunaToken {
 // ----------------------------------------------------------------------------------------------
 private static API: string = `${process.env.TUNA_TOKEN_ROOT_URL}/api/Token`;
  // ----------------------------------------------------------------------------------------------
  static newSession(tunaCustomer: ITunaCustomer, options?) {
    const customerSelector = ({ id, email, document, documentType }) => ({ id, email, document, documentType });
    const { sessionId, code } =
      FetchApp.post(
        `${this.API}/NewSession`,
        { customer: customerSelector(tunaCustomer) },
        { ...options, headers: tunaHeaders }
      );
    return [sessionId, code];
  }
  // ----------------------------------------------------------------------------------------------
  static generate(tunaOrder: Pick<ITunaOrder, 'sessionId' | 'card'>, options?) {
    const { sessionId, card } = tunaOrder;
    const cardTemp = { ...card };
    delete cardTemp.cvv;

    const { token, brand, code } =
      FetchApp.post(
        `${this.API}/Generate`,
        { sessionId, card: cardTemp },
        { ...options, headers: tunaHeaders }
      );
    return [token, brand, code];
  }
  // ----------------------------------------------------------------------------------------------
  static bind(tunaOrder: Pick<ITunaOrder, 'sessionId' | 'token' | 'card'>, options?) {
    const { sessionId, token, card } = tunaOrder;

    const { code } =
      FetchApp.post(
        `${this.API}/Bind`,
        { sessionId, token, cvv: card.cvv },
        { ...options, headers: tunaHeaders }
      );
    return code;
  }
  // ----------------------------------------------------------------------------------------------
  static mount(tunaOrder: ITunaOrder) {
    tunaOrder.card.tokenSingleUse = tunaOrder.card.singleUse ? 1 : 0;
    tunaOrder.card.saveCard = tunaOrder.card.singleUse;
    tunaOrder.card.tokenProvider = 'Tuna';
    delete tunaOrder.card.cardNumber;
    delete tunaOrder.card.expirationMonth;
    delete tunaOrder.card.expirationYear;
    delete tunaOrder.card.singleUse;
  }
}
// ------------------------------------------------------------------------------------------------