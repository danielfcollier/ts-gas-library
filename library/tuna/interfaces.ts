// ------------------------------------------------------------------------------------------------
type DocumentType = 'cpf' | 'CPF' | 'cnpj' | 'CNPJ';
// ------------------------------------------------------------------------------------------------
interface Address {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    country?: string;
    postalCode: string;
}
// ------------------------------------------------------------------------------------------------
interface BankAccount {
    externalId: string;
    document: string;
    documentType: DocumentType;
    accountType: string;
    bankCode: string;
    bankName?: string;
    agency: string;
    number: string;
}
// ------------------------------------------------------------------------------------------------
interface TunaMerchant {
    id: string;
    externalId: string;
    document: string;
    documentType: DocumentType;
    paymentBlocked: boolean;
    registrationDate: string;
    defaultFeePercent: number;
    acceptedContract: boolean;
    marketPlaceStore: boolean;
    registration: {
        transfer_enabled: boolean;
        payment_plan: number;
    }
    contact: {
        name: string;
        email: string;
        phone: string;
        cellPhone: string;
    }
    bankAccounts: BankAccount[];
    address: Address;
}
// ------------------------------------------------------------------------------------------------
interface ITunaMerchantPf extends TunaMerchant {
    name: string;
    birthday: Date;
    occupation: string;
}
// ------------------------------------------------------------------------------------------------
interface ITunaMerchantPj extends TunaMerchant {
    fantasyName: string;
    name: string;
    stateFiscalDocument: string;
}
// ------------------------------------------------------------------------------------------------
type ITunaMerchant = ITunaMerchantPj | ITunaMerchantPf;
// ------------------------------------------------------------------------------------------------
type OmitITunaMerchant = Omit<ITunaMerchantPj, 'id'> | Omit<ITunaMerchantPf, 'id'>;
// ------------------------------------------------------------------------------------------------
type PickITunaMerchant = Pick<ITunaMerchantPj, 'externalId'> | Pick<ITunaMerchantPf, 'externalId'>;
// ------------------------------------------------------------------------------------------------
interface ITunaCustomer {
    id: string;
    email: string;
    phone: string;
    document: string;
    documentType: DocumentType;
    name: string;
    address: Address;
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
export {
    ITunaCreditCard,
    ITunaCustomer,
    ITunaMerchant,
    OmitITunaMerchant,
    PickITunaMerchant,
    ITunaOrder
};
// ------------------------------------------------------------------------------------------------