// ------------------------------------------------------------------------------------------------
export default class TunaToken {
    // ----------------------------------------------------------------------------------------------
    static newSession({ customer, partnerId }, options = { verbose: false }) {
      const url = tunaParams.urlToken + tunaToken.newSession;
      const payload = { customer, partnerId };
  
      return FetchApp.post(url, payload, options);
    }
    // ----------------------------------------------------------------------------------------------
    static generate({ sessionId, card }, options = { verbose: false }) {
      const url = tunaParams.urlToken + tunaToken.generate;
      const payload = { sessionId, card: {...card} };
      delete payload.card.cvv;
  
      return FetchApp.post(url, payload, options);
    }
    // ----------------------------------------------------------------------------------------------
    static bind({ sessionId, token, card }, options = { verbose: false }) {
      const url = tunaParams.urlToken + tunaToken.bind;
      const { cvv } = card;
      const payload = { sessionId, token, cvv };
  
      return FetchApp.post(url, payload, options);
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