// --------------------------------------------------------------------------------------------------
import process from '../../.env';
import CallError from '../error';
import FetchApp from '../fetch';
import Show from '../show';
import Utils from '../utils';
import { BillingType, PaymentStatus } from './config';
import { ICustomer, IOrder, OrdersQuery } from './interfaces';
// --------------------------------------------------------------------------------------------------
const API = process.env.PAYMENT_ROOT_URL;
// --------------------------------------------------------------------------------------------------
export class Customer {
    // ----------------------------------------------------------------------------------------------
    static create(customer: Omit<ICustomer, 'id'>, options?) {
        const response = FetchApp.post(`${API}/customers`, customer, options);
        return this.reponseDTO(response);
    }
    // ----------------------------------------------------------------------------------------------
    static read(customer: Pick<ICustomer, 'id'>, options?) {
        const { id } = customer;
        const response = FetchApp.get(`${API}/customers/${id}`, options);
        return response;
    }
    // ----------------------------------------------------------------------------------------------
    static update(customer: ICustomer, options?) {
        const { id } = customer;
        const response = FetchApp.post(`${API}/customers/${id}`, customer, options);
        return this.reponseDTO(response);
    }
    // ----------------------------------------------------------------------------------------------
    static remove(customer: Pick<ICustomer, 'id'>, options?) {
        const { id } = customer;
        const { deleted } = FetchApp.remove(`${API}/customers/${id}`, options);
        return deleted;
    }
    // ----------------------------------------------------------------------------------------------
    private static reponseDTO(response: any, customer?: Partial<ICustomer>): ICustomer {
        const {
            id,
            externalReference,
            name,
            email,
            phone,
            mobilePhone,
            cpfCnpj,
            postalCode,
            addressNumber,
            notificationDisabled,
            emailEnabledForProvider,
            smsEnabledForProvider,
            emailEnabledForCustomer,
            smsEnabledForCustomer,
            phoneCallEnabledForCustomer,
            observations,
            foreignCustomer
        } = response;

        return {
            id,
            externalReference,
            name,
            email,
            phone,
            mobilePhone,
            cpfCnpj,
            postalCode,
            addressNumber,
            notificationDisabled,
            emailEnabledForProvider: emailEnabledForProvider ?? customer.emailEnabledForProvider,
            smsEnabledForProvider: smsEnabledForProvider ?? customer.smsEnabledForProvider,
            emailEnabledForCustomer: emailEnabledForCustomer ?? customer.emailEnabledForCustomer,
            smsEnabledForCustomer: smsEnabledForCustomer ?? customer.smsEnabledForCustomer,
            phoneCallEnabledForCustomer: phoneCallEnabledForCustomer ?? customer.phoneCallEnabledForCustomer,
            observations,
            foreignCustomer
        };
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export class Order {
    // ----------------------------------------------------------------------------------------------
    static create(order: Omit<IOrder, 'id'>, options?) {
        const response = FetchApp.post(`${API}/payments`, order, options);
        return this.responseDTO(response, order, options);
    }
    // ----------------------------------------------------------------------------------------------
    static read(order: Pick<IOrder, 'id' | 'installmentCount'>, options?) {
        const { id } = order;
        const endpoint = this.determinePaymentEndpoint(order);
        const response = FetchApp.get(`${API}/${endpoint}/${id}`, options);

        return this.responseDTO(response, order, options);
    }
    // ----------------------------------------------------------------------------------------------
    static update(order: IOrder, options?) {
        const { id } = order;
        const endpoint = this.determinePaymentEndpoint(order);

        if (endpoint === 'installments') {
            return this.updateInstallment(order, options);
        }
        else {
            const response = FetchApp.post(`${API}/${endpoint}/${id}`, order, options);
            return this.responseDTO(response, order, options);
        }
    }
    // ----------------------------------------------------------------------------------------------
    static cancel(order: Pick<IOrder, 'id' | 'installmentCount'>, options?) {
        const { id } = order;
        const endpoint = this.determinePaymentEndpoint(order);
        const { deleted } = FetchApp.remove(`${API}/${endpoint}/${id}`, options);
        return deleted;
    }
    // ----------------------------------------------------------------------------------------------
    static refund(order: Pick<IOrder, 'id' | 'installmentCount' | 'billingType' | 'status' | 'paymentDate'>, options?) {
        if (!this.isValidRefund(order)) throw CallError.orderRefund();
        const { id } = order;
        const endpoint = this.determinePaymentEndpoint(order);
        const response = FetchApp.post(`${API}/${endpoint}/${id}/refund`, {}, options);
        return this.responseDTO(response, order, options);
    }
    // ----------------------------------------------------------------------------------------------
    static confirmCash(order: Pick<IOrder, 'id' | 'value'>, paymentDate: Date, options?) {
        const { id, value } = order;
        const payload = { id, value, paymentDate: Show.dateForSystem(paymentDate), notifyCustomer: false };
        const response = FetchApp.post(`${API}/payments/${id}/receiveInCash`, payload, options);
        return this.responseDTO(response, order, options);
    }
    // ----------------------------------------------------------------------------------------------
    static unconfirmCash(order: Pick<IOrder, 'id'>, options?) {
        const { id } = order;
        const response = FetchApp.post(`${API}/payments/${id}/undoReceivedInCash`, {}, options);
        return this.responseDTO(response, order, options);
    }
    // ----------------------------------------------------------------------------------------------
    static getBarCode(order: Pick<IOrder, 'id'>, options?) {
        const { id } = order;
        const { identificationField } = FetchApp.get(`${API}/payments/${id}/identificationField`, options);
        return identificationField;
    }
    // ----------------------------------------------------------------------------------------------
    static getQRCode(order: Pick<IOrder, 'id'>, options?) {
        const { id } = order;
        const qrCode = FetchApp.get(`${API}/payments/${id}/pixQrCode`, options);
        return qrCode.payload;
    }
    // ----------------------------------------------------------------------------------------------
    private static determinePaymentEndpoint(order: Pick<IOrder, 'installmentCount'>) {
        const { installmentCount } = order;
        return (!installmentCount) ? 'payments' : 'installments';
    }
    // ----------------------------------------------------------------------------------------------
    private static getInstallments(order: Pick<IOrder, 'id'>, options?) {
        const { id } = order;
        const { totalCount, data } = FetchApp.get(`${API}/payments?installment=${id}`, options);
        if (data) return data[totalCount - 1];
        else throw CallError.execution();
    }
    // ----------------------------------------------------------------------------------------------
    private static updateInstallment(order: IOrder, options?) {
        order = { ...this.read(order), ...order };
        const deleted = this.cancel(order);
        if (deleted) {
            if (order.deleted) throw CallError.orderUpdate();
            return this.create(order, options);
        }
        throw CallError.orderUpdate();
    }
    // ----------------------------------------------------------------------------------------------
    private static isValidRefund(order: Pick<IOrder, 'id' | 'installmentCount' | 'billingType' | 'status' | 'paymentDate'>, options?) {
        const { billingType, status, paymentDate } = this.read(order, options);

        const isValidBillingType = billingType === BillingType.CreditCard;
        const isValidStatus = (status === PaymentStatus.Confirmed) || (status === PaymentStatus.Received);
        const isValidPaymentDate = (paymentDate) ? true : false;

        if (!(isValidBillingType && (isValidStatus || isValidPaymentDate))) return false;
        return true;
    }
    // ----------------------------------------------------------------------------------------------
    private static responseDTO(response: any, order: Partial<IOrder>, options?): IOrder {
        let {
            externalReference,
            id,
            customer,
            installment,
            value,
            netValue,
            totalValue,
            installmentCount,
            billingType,
            status,
            description,
            clientPaymentDate,
            paymentDate,
            confirmedDate,
            dueDate,
            lastInvoiceViewedDate,
            deleted,
            postalService,
            invoiceUrl,
            invoiceNumber } = response;

        if (installmentCount) {
            ({
                status,
                postalService,
                clientPaymentDate,
                confirmedDate,
                dueDate,
                deleted,
                invoiceUrl
            } = Order.getInstallments({ id }, options))
        }

        return {
            externalReference,
            id: order.id ?? installment ?? id,
            customer: order.customer ?? customer,
            value: totalValue ?? value,
            netValue,
            installmentCount,
            billingType,
            status,
            description: order.description ?? description,
            clientPaymentDate,
            paymentDate,
            confirmedDate,
            dueDate,
            lastInvoiceViewedDate,
            deleted,
            postalService: order.postalService ?? postalService,
            invoiceUrl,
            invoiceNumber
        };
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export class Finances {
    // ----------------------------------------------------------------------------------------------
    // TODO
    static doBankTransfer(transferInfo, options?) {
        return FetchApp.post(`${API}/transfers`, transferInfo, options);
    }
    // ----------------------------------------------------------------------------------------------
    static getCurrentBalance(options?) {
        const { totalBalance } = FetchApp.get(`${API}/finance/getCurrentBalance`, options);
        const currentBalance: number = totalBalance;
        return currentBalance;
    }
    // ----------------------------------------------------------------------------------------------
    static getConfirmedBalance() {
        const queryParams: OrdersQuery = {
            limit: 100,
            offset: 0,
            status: PaymentStatus.Confirmed
        };

        const orders: any[] = []
        this.ordersLoop(orders, queryParams);

        const confirmedBalance: number = (orders
            .flat()
            .map(transaction => transaction.netValue * 100)
            .reduce(Utils.getSum, 0)
        ) / 100;
        return confirmedBalance;
    }
    // ----------------------------------------------------------------------------------------------
    static getPendingOrders() {
        const queryParams: OrdersQuery = {
            limit: 100,
            offset: 0,
            status: PaymentStatus.Overdue,
            date: { name: 'dueDate' }
        };

        const orders: any[] = [];
        this.ordersLoop(orders, queryParams);
        return this.ordersList(orders);
    }
    // ----------------------------------------------------------------------------------------------
    static getOrders(queryParams: OrdersQuery) {
        const orders: any[] = [];
        const { hasMore, totalCount } = this.getOrdersPerQuery(orders, queryParams);
        return { orders: this.ordersList(orders), hasMore, totalCount };
    }
    // ----------------------------------------------------------------------------------------------
    static getOrdersStats({ orders, totalCount, queryParams }) {
        const pages = {
            totalNumber: Math.ceil(totalCount / queryParams.limit),
            itemsPerPage: queryParams.limit,
            currentNumber: Math.floor(queryParams.offset / queryParams.limit) + 1,
        };

        const isOrderValid = order => order.status === PaymentStatus.Confirmed || order.status === PaymentStatus.Received;
        const validTickets = orders
            .filter(order => isOrderValid(order))
            .map(order => order.value);

        const tickets: { totalAmount: number; totalConfirmed: number; averageAmount: number; } = {
            totalAmount: validTickets.reduce(Utils.getSum, 0),
            totalConfirmed: validTickets.length,
            averageAmount: 0,
        };
        tickets.averageAmount = Math.round(((tickets.totalAmount / tickets.totalConfirmed) + Number.EPSILON) * 100) / 100;

        return { pages, tickets };
    }
    // ----------------------------------------------------------------------------------------------
    static getAllOrdersFromRange(queryParams: OrdersQuery) {
        if (!queryParams.range) throw CallError.execution();

        queryParams = {
            ...queryParams,
            all: true,
            limit: 100,
            offset: 0,
            date: {
                from: queryParams.range.from,
                to: queryParams.range.to
            }
        };

        const ordersByPaymentDate = this.getOrdersByPaymentDate(queryParams);
        const ordersByClientPaymentDate = this.getOrdersByClientPaymentDate(queryParams);

        const ordersSet = new Set();
        ordersByPaymentDate.forEach(order => ordersSet.add(order.id));
        ordersByClientPaymentDate.forEach(order => ordersSet.add(order.id));

        const orders: any[] = [];
        ordersSet.forEach((paymentId: string) => {
            orders.push(Order.read({ id: paymentId }));
        });

        return orders;
    }
    // ----------------------------------------------------------------------------------------------
    static getOrdersByPaymentDate(queryParams: OrdersQuery) {
        if (!queryParams.range) throw CallError.execution();

        queryParams = {
            ...queryParams,
            limit: 100,
            offset: 0,
            date: {
                name: 'paymentDate',
                from: queryParams.range.from,
                to: queryParams.range.to
            }
        };

        const orders: any[] = [];

        if (queryParams.all) {
            this.ordersLoop(orders, queryParams);
        }
        else {
            this.getOrdersPerQuery(orders, queryParams);
        }

        return this.ordersList(orders);
    }
    // ----------------------------------------------------------------------------------------------
    private static getOrdersByClientPaymentDate(queryParams: OrdersQuery) {
        queryParams = {
            ...queryParams,
            limit: 100,
            offset: 0,
            date: {
                name: 'clientPaymentDate',
                from: queryParams.range.from,
                to: queryParams.range.to
            }
        };

        const orders: any[] = [];

        if (queryParams.all) {
            this.ordersLoop(orders, queryParams);
        }
        else {
            this.getOrdersPerQuery(orders, queryParams);
        }

        return this.ordersList(orders);
    }
    // ----------------------------------------------------------------------------------------------
    private static getOrdersPerQuery(orders: Partial<IOrder>[], queryParams: OrdersQuery) {
        const {
            billingType,
            status,
            offset,
            limit,
            date } = queryParams;

        const queryArray: string[] = [];

        if (billingType) { queryArray.push(`billingType=${billingType}`) }
        if (status) { queryArray.push(`status=${status}`) }
        if (offset) { queryArray.push(`offset=${offset}`) }
        if (limit) { queryArray.push(`limit=${limit}`) }
        if (date) {
            queryArray.push(`${date.name}%5Bge%5D=${date.from}`);
            queryArray.push(`${date.name}%5Ble%5D=${date.to}`);
        }

        const queryString = queryArray.reduce(Utils.getQueryString);

        const response = FetchApp.get(`${API}/payments/?${queryString}`);
        const { hasMore, data, totalCount } = response;

        orders.push(data);
        return { hasMore, totalCount };
    }
    // ----------------------------------------------------------------------------------------------
    private static ordersLoop(orders: Partial<IOrder>[], queryParams: OrdersQuery,) {
        let hasMore = true;

        let k = 0;
        while (hasMore) {
            ({ hasMore } = this.getOrdersPerQuery(orders, { ...queryParams, offset: k * queryParams.limit }));
            k++;
        }
        return true;
    }
    // ----------------------------------------------------------------------------------------------
    private static ordersList(orders: Partial<IOrder>[]) {
        return orders.flat().map(order => {
            const { id,
                customer,
                status,
                value,
                billingType,
                clientPaymentDate,
                paymentDate,
                confirmedDate,
                dueDate,
                description,
                invoiceUrl } = order;

            const date = clientPaymentDate ?? confirmedDate ?? paymentDate;

            return {
                id,
                customer,
                status,
                value,
                billingType,
                description,
                paymentDate: date,
                dueDate,
                invoiceUrl
            };
        });
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------