import Utils from "../utils";

export default class DateForPerson {

    static format = (value: string, prevString: string) => {

        if (value.length <= prevString.length) {
            return value;
        }

        const cleanString = Utils.cleanNumber(value);

        if (cleanString.length >= 2 && cleanString.length < 4) {
            return `${cleanString.substr(0, 2)}/${cleanString.substr(2)}`;
        }
        else if (cleanString.length >= 4 && cleanString.length <= 8) {
            return `${cleanString.substr(0, 2)}/${cleanString.substr(2, 2)}/${cleanString.substr(4)}`;
        }

        if (cleanString.length > 8) {
            return prevString;
        }
        return value;
    }

    static pattern() {
        return /\d{2}\/\d{2}\/\d{4}/;
    }

    static show(date: string | undefined) {
        if (date) {
            const [yyyy, mm, dd] = date.split('-');
            return `${dd}/${mm}/${yyyy}`;
        } else {
            return '';
        }
    }
}