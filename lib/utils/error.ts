export default class ErrorType {
    static postalCode() {
        return new Error('Invalid postal code argument!');
    }
    static document() {
        return new Error('Invalid document argument!');
    }
    static phone() {
        return new Error('Invalid phone argument!');
    }
}