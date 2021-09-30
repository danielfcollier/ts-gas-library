// --------------------------------------------------------------------------------------------------

import { ICustomer, IOrder } from "../../lib/payment/interfaces";
import Show from "../../lib/utils/show";
import { IConsultation } from "../interface/consultation";
import { IPatient } from "../interface/patient";
// --------------------------------------------------------------------------------------------------
class CustomerDto {
    // ----------------------------------------------------------------------------------------------
    static request(dto: Partial<IPatient>): ICustomer {
        const customer: ICustomer = {
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
        if (dto.payment?.customerId) {
            customer.id = dto.payment.customerId;
        }
        return customer;
    }
    // ----------------------------------------------------------------------------------------------
    static response(dto: any): Partial<ICustomer> {
        return dto;
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
class OrderDto {
    // ----------------------------------------------------------------------------------------------
    static request(dto: Partial<IConsultation>): IOrder {
        const order = {
            billingType: 'UNDEFINED',
            dueDate: Show.dateForSystem(dto.dueDate),
            value: dto.value,
            description: dto.description,
            postalService: false
        };
        if (dto?.customer) {
            return { ...order, customer: dto.customer };
        }
        return order;
    }
    // ----------------------------------------------------------------------------------------------
    static response(dto: any): Partial<ICustomer> {
        return dto;
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
function installmentRequestDto(dto: Partial<IOrder>) {
    // TODO
    return { ...dto };
}
// --------------------------------------------------------------------------------------------------
export { CustomerDto, OrderDto, installmentRequestDto };
// --------------------------------------------------------------------------------------------------