import { IPatient } from "../config/interface/patient";
import { ConsultationModality, ConsultationStatus, ConsultationType, PaymentContract, DocumentType, ConsultationLocation, PaymentStatus } from "../config/enum/business";
import { IConsultation } from "../config/interface/consultation";
// --------------------------------------------------------------------------------------------------
const prospect: Partial<IPatient> = {
    id: '73891731',
    fullName: 'Marcelo Almeida',
    cellPhone: '4799376637',
    email: 'marcelo.almeida@gmail.com',
    birthday: new Date('1985-01-10'),
    document: {
        number: '24971563792',
        type: DocumentType.cpf
    },
    address: {
        postalCode: '71535-080'
    },
    payment: {
        contract: PaymentContract.release2021
    }
};
// // --------------------------------------------------------------------------------------------------
function booking(customerId: string): Partial<IConsultation> {
    return {
        id: '389173891731',
        customer: customerId,
        bookingDate: new Date(),
        modificationDate: new Date(),
        status: ConsultationStatus.Pending,
        location: ConsultationLocation.Florianopolis,
        date: new Date('2021-11-11'),
        time: '9h',
        type: ConsultationType.Online,
        modality: ConsultationModality.BeijaFlor,
        description: `Consulta ${ConsultationType.Online} - Modalidade ${ConsultationModality.BeijaFlor}`,
        dueDate: new Date('2021-11-04'),
        value: 320
    };
};
// // --------------------------------------------------------------------------------------------------
export { prospect, booking };
// // --------------------------------------------------------------------------------------------------
// const order = (prospect: Partial<IPatient>, booking: Partial<IIConsultation>) => {
//     return {
//         customer: `${prospect.payment.id}`,
//         billingType: "CREDIT_CARD",
//         dueDate: booking.dueDate,
//         value: booking.value,
//         description: booking.description,
//         externalReference: prospect.id,
//         postalService: false
//     }
// };
// // --------------------------------------------------------------------------------------------------
// export { customer, order };
// --------------------------------------------------------------------------------------------------