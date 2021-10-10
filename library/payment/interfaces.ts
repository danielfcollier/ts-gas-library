// --------------------------------------------------------------------------------------------------
interface ICustomer {
    id: string;
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
}
// --------------------------------------------------------------------------------------------------
interface IOrder {
    externalReference: string;
    id: string;
    customer: string;
    value: number;
    netValue?: number;
    totalValue?: number;
    installmentCount?: number;
    billingType: string;
    status?: string;
    description: string;
    clientPaymentDate?: string;
    paymentDate?: string;
    confirmedDate?: string;
    dueDate: string;
    lastInvoiceViewedDate?: string;
    deleted?: boolean;
    postalService: boolean;
    invoiceUrl?: string;
    invoiceNumber?: string;
}
// --------------------------------------------------------------------------------------------------
interface OrdersQuery {
    all?: boolean;
    billingType?: string;
    status?: string;
    paymentDate?: string;
    clientPaymentDate?: string;
    offset?: number;
    limit?: number;
    range?: { from: string, to: string };
    date?: DateStruct;
}
// --------------------------------------------------------------------------------------------------
interface DateStruct {
    name?: 'dueDate' | 'paymentDate' | 'clientPaymentDate' | 'confirmedDate' | 'dateCreated',
    from?: string,
    to?: string
}
// --------------------------------------------------------------------------------------------------
export { OrdersQuery, ICustomer, IOrder };
// --------------------------------------------------------------------------------------------------