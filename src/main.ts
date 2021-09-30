// --------------------------------------------------------------------------------------------------
import { prospect, booking } from "./sample.data";
import { Customer, Order } from "../lib/payment";
import { CustomerDto, OrderDto } from "../config/dto/payment";
import Show from "../lib/utils/show";
// --------------------------------------------------------------------------------------------------
function main() {
    // const customer = CustomerDto.request(prospect);
    // const customerId = Customer.create(customer, { verbose: false });
    // const order = OrderDto.request(booking(customerId));
    // const response = Order.create(order, {verbose: false});
    // // { id, dueDate, value, netValue, billingType, status, clientPaymentDate, invoiceUrl, invoiceNumber } 
    // console.log(response);
    console.log(Show.document('61.653.971/0001-25'));
}
// --------------------------------------------------------------------------------------------------
function customerTest() {
    // const customerData = 
    // const customerRead = Customer.read(customerData);
    // const { id } = customerData;
    // const customerUpdate = Customer.update(id, { ...customer, postalCode: '71.535-080' });
    // const customerDelete = Customer.remove(id);
    // console.log(customerData);
    // console.log(customerRead);
    // console.log(customerUpdate);
    // console.log(customerDelete);
}
// --------------------------------------------------------------------------------------------------