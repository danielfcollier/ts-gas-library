// ------------------------------------------------------------------------------------------------
import process from "../../../.env";
import FetchApp from "../../fetch";
import tunaHeaders from "../headers";
// ------------------------------------------------------------------------------------------------
interface ITunaMerchant {
    merchantId: string;
}
// ------------------------------------------------------------------------------------------------
export default class TunaMerchant {
    // --------------------------------------------------------------------------------------------
    private static API: string = process.env.TUNA_MERCHANT_ROOT_URL;
    // --------------------------------------------------------------------------------------------
    static register(merchant: Omit<ITunaMerchant, 'merchantId'>, options) {
        return FetchApp.post(`${this.API}/Register`, merchant, { ...options, headers: tunaHeaders });
    }
    // --------------------------------------------------------------------------------------------
    static getMerchant(merchant: Pick<ITunaMerchant, 'merchantId'>, options) {
        return FetchApp.post(`${this.API}/GetMerchant`, merchant, { ...options, headers: tunaHeaders });
    }
    // --------------------------------------------------------------------------------------------
    static financialMovements(merchant: Pick<ITunaMerchant, 'merchantId'>, options) {
        return FetchApp.post(`${this.API}/FinancialMovements`, merchant, { ...options, headers: tunaHeaders });
    }
    // --------------------------------------------------------------------------------------------
}
// ------------------------------------------------------------------------------------------------