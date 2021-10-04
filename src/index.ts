// --------------------------------------------------------------------------------------------------
import { patientProspect, consultationBooking } from "./sample.data";
import { Customer, Order, Finances } from "../lib/payment";
import { buildFromPatientCustomerDTO, buidlFromConsultationOrderDTO } from "../config/dto/payment";
import { OrdersQuery } from "../lib/payment/interfaces";
// --------------------------------------------------------------------------------------------------
const verbose = true;
const customerId = 'cus_000024421601';
const isInstallment = true;
const paymentId = 'ins_000004336796'; // ins_000004336813
const args: any = { value: 30 };
if (isInstallment) args.installmentCount = 3;

// Utilities.getUuid()
// Utilities.parseCsv(csv)
// --------------------------------------------------------------------------------------------------
function createCustomer() {
    const customer = buildFromPatientCustomerDTO(patientProspect);
    let { id } = Customer.create(customer);
    console.log(id);
}
// --------------------------------------------------------------------------------------------------
function readCustomer() {
    console.log(Customer.read({ id: customerId }));
}
// --------------------------------------------------------------------------------------------------
function updateCustomer() {
    const params: any = { name: 'Alvarez Luz' };
    console.log(Customer.update({ id: customerId, ...params }));
}
// --------------------------------------------------------------------------------------------------
function removeCustomer() {
    console.log(Customer.remove({ id: customerId }));
}
// --------------------------------------------------------------------------------------------------
function createOrder() {
    const consultationRequest = { ...consultationBooking({ id: customerId }), ...args };
    const orderDTO = buidlFromConsultationOrderDTO(consultationRequest);

    const order = Order.create(orderDTO, { verbose });

    console.log(order);
}
// --------------------------------------------------------------------------------------------------
function readOrder() {
    const order = Order.read({ id: paymentId, ...args }, { verbose });
    console.log(order);
}
// --------------------------------------------------------------------------------------------------
function updateOrder() {
    const updateParams: any = { value: 300 };
    if (isInstallment) updateParams.installmentCount = 3;

    const consultationRequest = { ...consultationBooking({ id: customerId }), ...updateParams };
    const orderDTO = buidlFromConsultationOrderDTO(consultationRequest);

    const order = Order.update({ ...orderDTO, id: paymentId }, { verbose });
    console.log(order);
}
// --------------------------------------------------------------------------------------------------
function cancelOrder() {
    const order = Order.cancel({ id: paymentId, ...args }, { verbose });
    console.log(order);
}
// --------------------------------------------------------------------------------------------------
function refundOrder() {
    const order = Order.refund({ id: paymentId, ...args }, { verbose });
    console.log(order);
}
// --------------------------------------------------------------------------------------------------
function finances() {
    const queryParams: OrdersQuery = {
        offset: 21,
        limit: 20,
        date: {
            name: 'dateCreated',
            from: '2021-07-01',
            to: '2021-09-15'
        }
    };

    const { orders, totalCount } = Finances.getOrders(queryParams);
    const stats = Finances.getOrdersStats({ orders, totalCount, queryParams });

    console.log(`${orders.length}`);
    Object.entries(stats.pages).forEach(stat => {
        console.log(stat);
    });

    Object.entries(stats.tickets).forEach(stat => {
        console.log(stat);
    })

    console.log('########');

    // console.log(`${Finances.getCurrentBalance()}`);
    // console.log(`${Finances.getConfirmedBalance()}`);

    // const orders = Finances.getAllOrdersFromRange({ range: { from: '2021-05-01', to: '2021-05-30' } });
    // console.log(`${orders.length}`);

    // console.log(`${Finances.getConfirmedBalance({verbose: true})}`);
    // const availableCash = asaasApi_getCurrentBalance();
    // const pendingCash = asaasApi_getConfirmedBalance();
    // const totalCash = availableCash + pendingCash;
    // console.log(Finances.getOrdersPerQuery({start: finish offset pagination}))

    // // TODO: see datetime functions 

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