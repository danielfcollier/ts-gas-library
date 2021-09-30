// --------------------------------------------------------------------------------------------------
import { PaymentContract, DocumentType } from "../enum/business";
// --------------------------------------------------------------------------------------------------
export interface IPatient {
    id: string;
    fullName: string;
    cellPhone: string;
    foreignCustomer: boolean;
    email: string;
    birthday: Date;
    document: Document;
    address: Partial<Address>;
    record: Record;
    payment: Partial<Payment>
}
// --------------------------------------------------------------------------------------------------
interface Payment {
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
    lastConsultationDate: Date;
}
// --------------------------------------------------------------------------------------------------
interface Address {
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