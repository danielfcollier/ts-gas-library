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
    address: {
        street: string;
        number: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: string;
        country: string;
        postalCode: string;
    }
}
// ------------------------------------------------------------------------------------------------
interface ITunaOrder {
    id: string;
    paymentMethodType: string;
    amount: number;
    sessionId?: string;
    token?: string;
    card: {
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
    };
    address?: {
        street: string;
        number: string;
        complement?: string;
        neighborhood: string;
        city: string;
        state: string;
        country: string;
        postalCode: string;
    }
}
// ------------------------------------------------------------------------------------------------
export { ITunaCustomer, ITunaMerchant, ITunaOrder };
// ------------------------------------------------------------------------------------------------