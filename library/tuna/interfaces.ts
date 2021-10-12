// ------------------------------------------------------------------------------------------------
interface Address {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}
// ------------------------------------------------------------------------------------------------
interface ITunaMerchant {
    merchantId: string;
}
// ------------------------------------------------------------------------------------------------
interface ITunaCustomer {
    id: string;
    email: string;
    phone: string;
    document: string;
    documentType: 'cpf' | 'CPF' | 'cnpj' | 'CNPJ';
    name: string;
    address: Address;
}
// ------------------------------------------------------------------------------------------------
interface ITunaCreditCard {
    cvv?: string;
    brandName?: string;
    cardNumber?: string;
    cardHolderName: string;
    expirationMonth: number;
    expirationYear: number;
    singleUse?: boolean;
    tokenSingleUse?: number;
    saveCard?: boolean;
    tokenProvider?: string;
}
// ------------------------------------------------------------------------------------------------
interface ITunaOrder {
    id: string;
    paymentMethodType: string;
    amount: number;
    paymentDate?: Date;
    sessionId?: string;
    token?: string;
    card: ITunaCreditCard;
    address?: Address;
    phone?: string;
}
// ------------------------------------------------------------------------------------------------
export { ITunaCustomer, ITunaCreditCard, ITunaMerchant, ITunaOrder };
// ------------------------------------------------------------------------------------------------