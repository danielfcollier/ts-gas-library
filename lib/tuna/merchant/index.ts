// ------------------------------------------------------------------------------------------------
import process from "../../../.env";
import FetchApp from "../../fetch";
import tunaHeaders from "../headers";
// ------------------------------------------------------------------------------------------------
const API = process.env.TUNA_MERCHANT_ROOT_URL;

interface ITunaMerchant {
    merchantId: string;
}
// ------------------------------------------------------------------------------------------------
export default class TunaMerchant {
    // ----------------------------------------------------------------------------------------------
    static register(merchant: Omit<ITunaMerchant, 'merchantId'>, options) {
        return FetchApp.post(`${API}/Register`, merchant, {...options, headers: tunaHeaders});
    }
    // ----------------------------------------------------------------------------------------------
    static getMerchant(merchant: Pick<ITunaMerchant, 'merchantId'>, options) {
        return FetchApp.post(`${API}/GetMerchant`, merchant, {...options, headers: tunaHeaders});
    }
    // ----------------------------------------------------------------------------------------------
    static financialMovements(merchant: Pick<ITunaMerchant, 'merchantId'>, options) {
        return FetchApp.post(`${API}/FinancialMovements`, merchant, {...options, headers: tunaHeaders});
    }
    // ----------------------------------------------------------------------------------------------
}
  // ------------------------------------------------------------------------------------------------