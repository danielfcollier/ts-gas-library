// --------------------------------------------------------------------------------------------------
import process from "../../.env";
import Utils from "../utils";
import { Pattern } from "./interfaces";

import IsValid from "../validation";
// --------------------------------------------------------------------------------------------------
export default class Show {
    // ----------------------------------------------------------------------------------------------
    static desiredPattern(number: string, pattern: Pattern) {
        return Utils.cleanNumber(number).replace(pattern.regex, pattern.mask)
    }
    // ----------------------------------------------------------------------------------------------
    static firstName(fullName: string) {
        return fullName.trim().split(" ")[0];
    }
    // ----------------------------------------------------------------------------------------------
    static lastName(fullName: string) {
        const nameSplit = fullName.trim().split(" ");

        return nameSplit[nameSplit.length - 1];
    }
    // ----------------------------------------------------------------------------------------------
    static email(email: string) {
        return email.toLowerCase().replace(/\s/g, "")
    }
    // ----------------------------------------------------------------------------------------------
    static postalCode(postalCode: string) {
        IsValid.postalCode(postalCode);
        return Utils.cleanNumber(postalCode).replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
    }
    // ----------------------------------------------------------------------------------------------
    static dateForSystem(date: Date) {
        return Utilities.formatDate(date,process.env.GMT_LOCATION, 'yyyy-MM-dd');
    }
    // ----------------------------------------------------------------------------------------------
    static dateForPerson(date: Date) {
        return Utilities.formatDate(date,process.env.GMT_LOCATION, 'dd/MM/yyyy');
    }
    // ----------------------------------------------------------------------------------------------
    static document(document: string) {
        document = Utils.cleanNumber(document);
        IsValid.document(document);
        if (document.length === 11) {
            return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }
        else if (document.length === 14) {
            return document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        }
    }
    static phone(phone: string) {
        phone = Utils.cleanPhone(phone);
        IsValid.phoneSize(phone);
        return this.phoneMasks(phone);
    }
    // ----------------------------------------------------------------------------------------------
    static cellPhone(cellPhone: string) {
        cellPhone = Utils.cleanPhone(cellPhone);
        IsValid.phoneSize(cellPhone);
        cellPhone = this.cellPhoneFormatter(cellPhone);
        return this.phone(cellPhone);
    }
    // ----------------------------------------------------------------------------------------------
    private static phoneMasks(phone: string) {
        if (phone.length === 11) {
            return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        }
        else if (phone.length === 10) {
            return phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
        }
        else if (phone[0] === '+') {
            return phone;
        }
        else {
            return `+${phone}`;
        }
    }
    // ----------------------------------------------------------------------------------------------
    private static cellPhoneFormatter(cellPhone: string) {
        const brPrefix = '55';

        const internationalNumberHandler = (phone: string) => {
            const isInternational = (phone[0] === '+') ? true : false;

            if (isInternational) {
                const isBrazillian = (phone.slice(0, 3) === `+${brPrefix}`) ? true : false;
                return { isInternational, isBrazillian };
            }
            else {
                return { isInternational };
            }
        };

        const { isInternational, isBrazillian } = internationalNumberHandler(cellPhone);

        if (isInternational && !isBrazillian) {
            return cellPhone;
        }

        const brPrefixHandler = (phone: string) => {
            if (isInternational) {
                phone = phone.slice(3);
            }

            const isInternationalBrazillian = ((phone.length > 11) && (phone.slice(0, 2) === brPrefix)) ? true : false;

            if (isInternationalBrazillian) {
                phone = phone.slice(2);
            }

            if (phone.length === 10) {
                phone = `${phone.slice(0, 2)}9${phone.slice(2)}`;
            }

            return phone;
        };

        return brPrefixHandler(cellPhone);
    }
}
// --------------------------------------------------------------------------------------------------