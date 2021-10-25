// --------------------------------------------------------------------------------------------------
import { ICustomer, IOrder } from "../../library/payment/interfaces";
import Show from "../../library/show/Show";
import { IConsultation } from "../interface/consultation";
import { IPatient } from "../interface/patient";
// --------------------------------------------------------------------------------------------------
function buildFromPatientCustomerDTO(DTO: IPatient): Omit<ICustomer, 'id'> {
    const customer: any = {
        externalReference: DTO.id,
        name: DTO.fullName,
        email: DTO.email,
        phone: DTO.cellPhone,
        mobilePhone: DTO.cellPhone,
        cpfCnpj: DTO.document.number,
        postalCode: DTO.address.postalCode,
        addressNumber: 's/n',
        notificationDisabled: true,
        emailEnabledForProvider: false,
        smsEnabledForProvider: false,
        emailEnabledForCustomer: false,
        smsEnabledForCustomer: false,
        phoneCallEnabledForCustomer: false,
        foreignCustomer: DTO.foreignCustomer
    };

    return customer;
}
// --------------------------------------------------------------------------------------------------
function buidlFromConsultationOrderDTO(DTO: IConsultation): Omit<IOrder, 'id'> {
    const order: any = {
        externalReference: DTO.id,
        customer: DTO.patient,
        dueDate: Show.dateForSystem(DTO.dueDate),
        description: DTO.description,
        postalService: false
    };

    if (!DTO?.installmentCount) {
        order.billingType = 'UNDEFINED';
        order.value = DTO.value;
    } else {
        order.billingType = 'CREDIT_CARD';
        order.totalValue = DTO.value;
        order.installmentCount = DTO.installmentCount;
    }

    return order;
}
// --------------------------------------------------------------------------------------------------
export { buildFromPatientCustomerDTO, buidlFromConsultationOrderDTO };
// --------------------------------------------------------------------------------------------------