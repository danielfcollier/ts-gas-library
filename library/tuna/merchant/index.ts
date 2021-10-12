// ------------------------------------------------------------------------------------------------
import process from "../../../.env";
import FetchApp from "../../fetch";
import { tunaHeaders } from "../config";
import { ITunaMerchant } from "../interfaces";
// ------------------------------------------------------------------------------------------------
export default class TunaMerchant {
    // --------------------------------------------------------------------------------------------
    private static API: string = `${process.env.TUNA_MERCHANT_ROOT_URL}/api/Merchant`;
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
    private static mountRegisterPayload() {

    //     const payload = {
    //         externalId: paySeller.sellerId,
    //         document: paySeller.document,
    //         documentType: paySeller.documentType,
    //         paymentBlocked: paymentContract.isPaymentBlocked,
    //         registrationDate: paymentContract.registrationDate,
    //         defaultFeePercent: paymentContract.defaultFeePercent,
    //         acceptedContract: true,
    //         marketPlaceStore: false,
    //         registration: {
    //             transfer_enabled: true,
    //             payment_plan: paymentContract.paymentPlan
    //         },
    //         contact: {
    //             name: paySeller.fullName,
    //             email: paySeller.email,
    //             phone: paySeller.phone ? paySeller.phone : '',
    //             cellPhone: paySeller.cellPhone
    //         },
    //         bankAccounts: [
    //             {
    //                 externalId: paySeller.bankAccount[0].id,
    //                 document: paySeller.bankAccount[0].document,
    //                 documentType: paySeller.bankAccount[0].documentType,
    //                 accountType: paySeller.bankAccount[0].accountType,
    //                 bankCode: paySeller.bankAccount[0].bankCode,
    //                 bankName: paySeller.bankAccount[0].bankName,
    //                 agency: paySeller.bankAccount[0].agency,
    //                 number: `${paySeller.bankAccount[0].account}-${paySeller.bankAccount[0].digit}`
    //             }
    //         ],
    //         address: paySeller.address
    //     }

    //     switch (payload.documentType.toUpperCase()) {
    //         case 'CPF':
    //             payload['name'] = paySeller.fullName;
    //             payload['birthday'] = paySeller.birthDay;
    //             payload['occupation'] = paySeller.occupation;
    //             break;
    //         case 'CNPJ':
    //         default:
    //             payload['fantasyName'] = paySeller.fantasyName;
    //             payload['name'] = paySeller.legalName;
    //             payload['stateFiscalDocument'] = paySeller.stateFiscalDocument;
    //             break;
    //     }

    //     return payload;
    }
    // ------------------------------------------------------------------------------------------------
}
// ------------------------------------------------------------------------------------------------