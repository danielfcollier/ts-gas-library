// --------------------------------------------------------------------------------------------------
import { DocumentType } from "../enum/personal";
import { PaymentContract } from "../enum/business";
// --------------------------------------------------------------------------------------------------
export interface IPatient {
    id: string;
    fullName: string;
    cellPhone: string;
    foreignCustomer: boolean;
    email: string;
    birthday: Date;
    document: Document;
    address: Pick<Address, 'postalCode' | 'number'>;
    record: Record;
    payment: Partial<PaymentInfo>,
    getFirstName?: { (): string };
    getLastName?: { (): string };
}
// --------------------------------------------------------------------------------------------------
interface PaymentInfo {
    customerId: string;
    contract: PaymentContract;
}
// --------------------------------------------------------------------------------------------------
interface Document {
    number: string;
    type: DocumentType;
    extra?: string;
}
// --------------------------------------------------------------------------------------------------
interface Record {
    id: string;
    registrationDate: Date;
    modificationDate: Date;
    numberOfConsultations: number;
    lastConsultationDate?: Date;
}
// --------------------------------------------------------------------------------------------------
export interface Address {
    postalCode: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    complement?: string;
}
// --------------------------------------------------------------------------------------------------