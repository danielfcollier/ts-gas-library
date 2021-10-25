// ------------------------------------------------------------------------------------------------
import process from "../../../.env";
import FetchApp from "../../fetch/FetchApp";
import { tunaHeaders } from "../config";
import { OmitITunaMerchant, PickITunaMerchant } from "../interfaces";
// ------------------------------------------------------------------------------------------------
export default class TunaMerchant {
    // --------------------------------------------------------------------------------------------
    private static API: string = `${process.env.TUNA_MERCHANT_ROOT_URL}/api/Merchant`;
    // --------------------------------------------------------------------------------------------
    static register(merchant: OmitITunaMerchant, options?) {
        return FetchApp.post(`${this.API}/Register`, merchant, { ...options, headers: tunaHeaders });
    }
    // --------------------------------------------------------------------------------------------
    static status(merchant: PickITunaMerchant, options?) {
        return FetchApp.post(`${this.API}/GetMerchant`, merchant, { ...options, headers: tunaHeaders });
    }
    // --------------------------------------------------------------------------------------------
    static financialMovements(merchant: PickITunaMerchant, options?) {
        return FetchApp.post(`${this.API}/FinancialMovements`, merchant, { ...options, headers: tunaHeaders });
    }
    // --------------------------------------------------------------------------------------------
}
// ------------------------------------------------------------------------------------------------