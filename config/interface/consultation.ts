// --------------------------------------------------------------------------------------------------
import { PaymentStatus } from "../../lib/payment/config";
import {
    ConsultationLocation,
    ConsultationType,
    ConsultationModality,
    ConsultationStatus
} from "../enum/business";
// --------------------------------------------------------------------------------------------------
export interface IConsultation {
    id: string;
    patient: string;
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
    installmentCount?: number;
    financial?: Financial;
}
// --------------------------------------------------------------------------------------------------
interface Financial {
    status: PaymentStatus;
    paymentDate: Date;
    fees: number;
    taxes: number;
}
// --------------------------------------------------------------------------------------------------