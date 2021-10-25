
// --------------------------------------------------------------------------------------------------
import { Address } from "../../settings/interface/patient";
import FetchApp from "../fetch/FetchApp";
import Utils from "../utils/Utils";
// --------------------------------------------------------------------------------------------------
function getAddressByPostalCode(postalCode: string, verbose?: boolean) {
    try {
        const API = 'https://viacep.com.br/ws/';
        const options = {
            headers: {
                'content-type': 'application/json'
            },
            verbose: verbose ?? false
        };
        postalCode = Utils.cleanNumber(postalCode);

        const response = FetchApp.get(`${API}${postalCode}/json/unicode/`, options);

        const address: Omit<Address, 'number'> = {
            street: response.logradouro,
            neighborhood: response.bairro,
            complement: response.complemento,
            city: response.localidade,
            state: response.uf,
            postalCode,
            country: 'Brasil'
        };

        return address;
    }
    catch {
        return '';
    }
};
// --------------------------------------------------------------------------------------------------
export default getAddressByPostalCode;
// --------------------------------------------------------------------------------------------------
