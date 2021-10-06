// --------------------------------------------------------------------------------------------------
import { ICustomer, IOrder } from "../../lib/payment/interfaces";
import Show from "../../lib/show";
import { IConsultation } from "../interface/consultation";
import { IPatient } from "../interface/patient";
// --------------------------------------------------------------------------------------------------
function buildFromPatientCustomerDTO(dto: IPatient): Omit<ICustomer, 'id'> {
    const customer: any = {
        externalReference: dto.id,
        name: dto.fullName,
        email: dto.email,
        phone: dto.cellPhone,
        mobilePhone: dto.cellPhone,
        cpfCnpj: dto.document.number,
        postalCode: dto.address.postalCode,
        addressNumber: 's/n',
        notificationDisabled: true,
        emailEnabledForProvider: false,
        smsEnabledForProvider: false,
        emailEnabledForCustomer: false,
        smsEnabledForCustomer: false,
        phoneCallEnabledForCustomer: false,
        foreignCustomer: dto.foreignCustomer
    };

    return customer;
}
// --------------------------------------------------------------------------------------------------
function buidlFromConsultationOrderDTO(dto: IConsultation): Omit<IOrder, 'id'> {
    const order: any = {
        externalReference: dto.id,
        customer: dto.patient,
        dueDate: Show.dateForSystem(dto.dueDate),
        description: dto.description,
        postalService: false
    };

    if (!dto?.installmentCount) {
        order.billingType = 'UNDEFINED';
        order.value = dto.value;
    }
    else {
        order.billingType = 'CREDIT_CARD';
        order.totalValue = dto.value;
        order.installmentCount = dto.installmentCount;
    }
    
    return order;
}
// --------------------------------------------------------------------------------------------------
export { buildFromPatientCustomerDTO, buidlFromConsultationOrderDTO };
// --------------------------------------------------------------------------------------------------