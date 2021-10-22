import { IPatient } from "./interface/patient";
import { IConsultation } from "./interface/consultation";
import { IOrder } from "../library/payment/interfaces";
import {
    ConsultationModality,
    ConsultationStatus,
    ConsultationType,
    PaymentContract,
    ConsultationLocation
} from "./enum/business";
import Time from "../library/time/index";
import { DocumentType } from "./enum/personal";
// --------------------------------------------------------------------------------------------------
function patientProspect(): IPatient {
    return {
        id: '73891731',
        fullName: 'Marcelo Almeida',
        cellPhone: '4799376637',
        foreignCustomer: false,
        email: 'marcelo.almeida@gmail.com',
        birthday: new Date('1985-01-10'),
        record: {
            id: 'string',
            registrationDate: new Date(),
            modificationDate: new Date(),
            numberOfConsultations: 0
        },
        document: {
            number: '24971563792',
            type: DocumentType.cpf
        },
        address: {
            postalCode: '71535-080',
            number: 's/n'
        },
        payment: {
            contract: PaymentContract.release2021
        }
    };
}
// // --------------------------------------------------------------------------------------------------
function consultationBooking(params: Pick<IOrder, 'id'>): IConsultation {
    return {
        id: '389173891731',
        patient: params.id,
        bookingDate: new Date(),
        modificationDate: new Date(),
        status: ConsultationStatus.Pending,
        location: ConsultationLocation.Florianopolis,
        date: new Date('2021-11-11'),
        time: '9h',
        type: ConsultationType.Online,
        modality: ConsultationModality.BeijaFlor,
        description: `Consulta ${ConsultationType.Online} - Modalidade ${ConsultationModality.BeijaFlor}`,
        dueDate: Time.incrementDateSystem('2021-11-11', -3),
        value: 320
    };
};
// // --------------------------------------------------------------------------------------------------
export { patientProspect, consultationBooking };
// // --------------------------------------------------------------------------------------------------
// const order = (patientProspect: IPatient, consultationBooking: IIConsultation) => {
//     return {
//         customer: `${patientProspect.payment.id}`,
//         billingType: "CREDIT_CARD",
//         dueDate: booking.dueDate,
//         value: booking.value,
//         description: booking.description,
//         externalReference: patientProspect.id,
//         postalService: false
//     }
// };
// // --------------------------------------------------------------------------------------------------
// export { customer, order };
// --------------------------------------------------------------------------------------------------