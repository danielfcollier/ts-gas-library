// --------------------------------------------------------------------------------------------------
import {
    ConsultationLocation,
    ConsultationType,
    ConsultationModality,
    ConsultationStatus,
    PaymentStatus,
} from "../enum/business";
// --------------------------------------------------------------------------------------------------
export interface IConsultation {
    id: string;
    customer: string;
    bookingDate: Date;
    modificationDate: Date;
    status: ConsultationStatus;
    location: ConsultationLocation;
    date: Date;
    time: string;
    type: ConsultationType;
    modality: ConsultationModality;
    description: string;
    dueDate: Date;
    value: number;
    financial: Financial;
}
// --------------------------------------------------------------------------------------------------
interface Financial {
    status: PaymentStatus;
    paymentDate: Date;
    fees: number;
    taxes: number;
}
// --------------------------------------------------------------------------------------------------