import Utils from "../utils";

export default class DocumentForPerson {

    static show(document: string | undefined) {
        const cleanString = Utils.cleanNumber(document ?? '');

        if (cleanString.length === 11) {
            return cleanString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        }
        else if (cleanString.length === 14) {
            return cleanString.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
        }
        else {
            return document;
        }
    }
}