// --------------------------------------------------------------------------------------------------
export interface ICustomer {
    id?: string;
    externalReference: string;
    name: string;
    email: string;
    phone: string;
    mobilePhone: string;
    cpfCnpj: string;
    postalCode: string;
    addressNumber: string;
    notificationDisabled: boolean;
    emailEnabledForProvider: boolean;
    smsEnabledForProvider: boolean;
    emailEnabledForCustomer: boolean;
    smsEnabledForCustomer: boolean;
    phoneCallEnabledForCustomer: boolean;
    observations?: string;
    foreignCustomer: boolean;
};
// --------------------------------------------------------------------------------------------------
export interface IOrder {
    customer?: string;
    billingType: string;
    dueDate: string;
    value: number;
    description: string;
    postalService: boolean;
}
// --------------------------------------------------------------------------------------------------