// --------------------------------------------------------------------------------------------------
import Utils from '../utils/Utils';
import Pattern from './Pattern';
import IsValid from '../validation/IsValid';
// --------------------------------------------------------------------------------------------------
export default class Show {
    // ----------------------------------------------------------------------------------------------
    static firstName(fullName: string) {
        return fullName.trim().split(' ')[0];
    }
    // ----------------------------------------------------------------------------------------------
    static lastName(fullName: string) {
        const nameSplit = fullName.trim().split(' ');

        return nameSplit[nameSplit.length - 1];
    }
    // ----------------------------------------------------------------------------------------------
    static email(email: string) {
        return email.toLowerCase().replace(/\s/g, '')
    }
    // ----------------------------------------------------------------------------------------------
    static postalCode(postalCode: string) {
        if (!IsValid.postalCode(postalCode)) return '';
        return Utils.cleanNumber(postalCode).replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
    }
    // ----------------------------------------------------------------------------------------------
    static dateForSystem(date: Date) {
        return Utilities.formatDate(date, 'GMT', 'yyyy-MM-dd');
    }
    // ----------------------------------------------------------------------------------------------
    static dateForPerson(date: Date) {
        return Utilities.formatDate(date, 'GMT', 'dd/MM/yyyy');
    }
    // ----------------------------------------------------------------------------------------------
    static document(document: string) {
        document = Utils.cleanNumber(document);
        if (!IsValid.document(document)) return '';
        if (document.length === 11) {
            return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else if (document.length === 14) {
            return document.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        }
    }
    // ----------------------------------------------------------------------------------------------
    static phone(phone: string) {
        phone = Utils.cleanPhone(phone);
        if (!IsValid.phoneSize(phone)) return '';
        return this.phoneMasks(phone);
    }
    // ----------------------------------------------------------------------------------------------
    static cellPhone(cellPhone: string) {
        cellPhone = Utils.cleanPhone(cellPhone);
        if (!IsValid.phoneSize(cellPhone)) return '';
        cellPhone = this.cellPhoneFormatter(cellPhone);
        return this.phone(cellPhone);
    }
    // ----------------------------------------------------------------------------------------------
    static twoDecimals(number: number) {
        return Utilities.formatString('%11.2f', number).trim();
    }
    // ----------------------------------------------------------------------------------------------
    static desiredPattern(number: string, pattern: Pattern) {
        return Utils.cleanNumber(number).replace(pattern.regex, pattern.mask)
    }
    // ----------------------------------------------------------------------------------------------
    private static phoneMasks(phone: string) {
        if (phone.length === 11) {
            return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (phone.length === 10) {
            return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else if (phone[0] === '+') {
            return phone;
        }

        return `+${phone}`;
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

            return { isInternational };
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