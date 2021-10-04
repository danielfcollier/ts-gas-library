import Utils from "../utils";

export default class PhoneForPerson {

    static format = (value: string, prevString: string) => {

        if (value.length <= prevString.length) {
            return value;
        }

        const cleanString = Utils.cleanNumber(value);

        if (cleanString.length < 2) {
            return `(${cleanString})`;
        }
        else if (cleanString.length >= 2 && cleanString.length < 6) {
            return `(${cleanString.substr(0, 2)}) ${cleanString.substr(2)}`;
        }
        else if (cleanString.length >= 6 && cleanString.length <= 10) {
            return `(${cleanString.substr(0, 2)}) ${cleanString.substr(2, 4)}-${cleanString.substr(6)}`;
        }
        else if (cleanString.length === 11) {
            return `(${cleanString.substr(0, 2)}) ${cleanString.substr(2, 5)}-${cleanString.substr(7)}`;
        }
        if (cleanString.length > 11) {
            return prevString;
        }
        return value;
    }

    static pattern() {
        return /\((\d{2})\) (\d{4,5})-(\d{4})/;
    }

    static show(phone: string | undefined) {
        if (!phone) {
            return '';
        }
        const cleanString = Utils.cleanNumber(phone as string);

        if (cleanString.length === 11) {
            return cleanString.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
        else if (cleanString.length === 10) {
            return cleanString.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
        else {
            return '';
        }
    }
}