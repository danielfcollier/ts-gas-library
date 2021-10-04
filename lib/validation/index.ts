// --------------------------------------------------------------------------------------------------
import Utils from "../utils";
import CallError from "../error";
import Time from "../time";
import Show from "../show";
// --------------------------------------------------------------------------------------------------
export default class IsValid {
    // ----------------------------------------------------------------------------------------------
    static dateFromPerson(dateString: string) {
        const date = Time.getDateFromPerson(dateString);

        if (dateString === Show.dateForPerson(date)) {
            return true;
        }

        throw CallError.date();
    }
    // ----------------------------------------------------------------------------------------------
    static postalCode(postalCode: string) {
        if (postalCode) {
            const objZipCode = Maps.newGeocoder().geocode(postalCode);

            if (objZipCode.status === 'OK') {
                return true;
            }
        }

        throw CallError.postalCode();
    }
    // ----------------------------------------------------------------------------------------------
    static phoneSize(phone: string) {
        phone = Utils.cleanNumber(phone);
        const localPattern = /^\d{10,12}$/;
        const internationalPattern = /^\d{12,15}$/;

        if (!(localPattern.test(phone) || internationalPattern.test(phone))) {
            throw CallError.phone();
        };
    }
    // ----------------------------------------------------------------------------------------------
    static document(document: string) {
        document = Utils.cleanNumber(document);
        if (document.length === 11) {
            this.cpf(document);
        }
        else if (document.length === 14) {
            this.cnpj(document);
        }
        else {
            throw CallError.document();
        }
    }
    // ----------------------------------------------------------------------------------------------
    // Credits: https://gist.github.com/joaohcrangel/8bd48bcc40b9db63bef7201143303937
    private static cpf(document: string) {
        if (
            !document ||
            document.length != 11 ||
            document == '00000000000' ||
            document == '11111111111' ||
            document == '22222222222' ||
            document == '33333333333' ||
            document == '44444444444' ||
            document == '55555555555' ||
            document == '66666666666' ||
            document == '77777777777' ||
            document == '88888888888' ||
            document == '99999999999'
        ) {
            throw CallError.document();
        }
        let sum = 0;
        let reminder;
        for (let i = 1; i <= 9; i++) {
            sum = sum + parseInt(document.substring(i - 1, i)) * (11 - i);
        }
        reminder = (sum * 10) % 11;
        if ((reminder == 10) || (reminder == 11)) reminder = 0;
        if (reminder != parseInt(document.substring(9, 10))) throw CallError.document();
        sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum = sum + parseInt(document.substring(i - 1, i)) * (12 - i);
        }
        reminder = (sum * 10) % 11;
        if ((reminder == 10) || (reminder == 11)) reminder = 0;
        if (reminder != parseInt(document.substring(10, 11))) throw CallError.document();
        return true;
    }
    // ----------------------------------------------------------------------------------------------
    // Credits: https://gist.github.com/alexbruno/6623b5afa847f891de9cb6f704d86d02
    private static cnpj(document: string) {
        // Remove possibilities with repeated numbers
        const numberSplit = document.split('');
        const numberSet = new Set(numberSplit);
        if (numberSet.size === 1) throw CallError.document();

        // CNPJ Validator
        const calc = (x) => {
            const slice = document.slice(0, x);
            let factor = x - 7;
            let sum = 0;

            for (let i = x; i >= 1; i--) {
                const n = parseInt(slice[x - i]);
                sum += n * factor--;
                if (factor < 2) factor = 9;
            }

            const result = 11 - (sum % 11);

            return result > 9 ? 0 : result;
        }

        // 2 last digits for verification
        const digits = document.slice(12);

        // Validate 1st last digt
        const digit0 = calc(12);
        if (digit0 !== parseInt(digits[0])) throw CallError.document();

        // Validate 2nd last digt
        const digit1 = calc(13);
        if (digit1 !== parseInt(digits[1])) {
            throw CallError.document();
        }
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------