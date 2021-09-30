// --------------------------------------------------------------------------------------------------
import process from "../../.env";
import FetchApp from "../fetch";
import { getSum } from "../utils/reducer";
import { ICustomer } from "./interfaces";
// --------------------------------------------------------------------------------------------------
const API = process.env.PAYMENT_ROOT_URL;
// --------------------------------------------------------------------------------------------------
export class Customer {
    // ----------------------------------------------------------------------------------------------
    static create(customer: ICustomer, options = { verbose: false }) {
        const { id } = FetchApp.post(`${API}/customers`, { ...customer }, options);
        return id;
    }
    // ----------------------------------------------------------------------------------------------
    static read(customer: ICustomer, options = { verbose: false }) {
        const { id } = customer;
        return FetchApp.get(`${API}/customers/${id}`, options);
    }
    // ----------------------------------------------------------------------------------------------
    static update(id, customer: ICustomer, options = { verbose: false }) {
        return FetchApp.post(`${API}/customers/${id}`, { ...customer }, options);
    }
    // ----------------------------------------------------------------------------------------------
    static remove(id, options = { verbose: false }) {
        const { deleted } = FetchApp.remove(`${API}/customers/${id}`, options);
        return deleted;
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export class Order {
    // ----------------------------------------------------------------------------------------------
    static create(order, options = { verbose: false }) {
        return FetchApp.post(`${API}/payments`, { ...order }, options);
    }
    // ----------------------------------------------------------------------------------------------
    static createInstallment(order, options = { verbose: false }) {
        return FetchApp.post(`${API}/paymentLinks`, { ...order }, options);
        /*
            '{
            "name": "Venda de livros",
            "description": "Qualquer livro por apenas R$: 50,00",
            "dueDate": "2021-10-05",
            "value": 50,
            "billingType": "CREDIT_CARD",
            "chargeType": "INSTALLMENT",
            "maxInstallmentCount": 4
            }'
        */
    }
    // ----------------------------------------------------------------------------------------------
    static getBarCode(order, options = { verbose: false }) {
        const { id } = order;
        const { identificationField } = FetchApp.get(`${API}/payments/${id}/identificationField`, options);
        return identificationField;
    }
    // ----------------------------------------------------------------------------------------------
    static read(order, options = { verbose: false }) {
        const { id } = order;
        return FetchApp.get(`${API}/payments/${id}`, options);
    }
    // ----------------------------------------------------------------------------------------------
    static update(order, options = { verbose: false }) {
        const { id } = order;
        return FetchApp.post(`${API}/payments/${id}`, { ...order }, options);
    }
    // ----------------------------------------------------------------------------------------------
    static remove(order, options = { verbose: false }) {
        const { id } = order;
        const { deleted } = FetchApp.remove(`${API}/payments/${id}`, options);
        return deleted;
    }
    // ----------------------------------------------------------------------------------------------
    static refund(order, options = { verbose: false }) {
        const { id } = order;
        return FetchApp.post(`${API}/payments/${id}/refund`, { ...order }, options);
    }
    // ----------------------------------------------------------------------------------------------
    static confirmCash(order, options = { verbose: false }) {
        const { id } = order;
        return FetchApp.post(`${API}/payments/${id}/receiveInCash`, { ...order }, options);
    }
    // ----------------------------------------------------------------------------------------------
    static unconfirmCash(order, options = { verbose: false }) {
        const { id } = order;
        return FetchApp.post(`${API}/payments/${id}/undoReceivedInCash`, { ...order }, options);
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export class Payment {
    // ----------------------------------------------------------------------------------------------
    static getCurrentBalance(options = { verbose: false }) {
        const { totalBalance } = FetchApp.get(`${API}/finance/getCurrentBalance`, options);
        return totalBalance;
    }
    // ----------------------------------------------------------------------------------------------
    static doBankTransfer(transferInfo, options = { verbose: false }) {
        return FetchApp.post(`${API}/transfers`, { ...transferInfo }, options);
    }
    // ----------------------------------------------------------------------------------------------
    static getConfirmedBalance(options = { verbose: false }) {
        const balances = FetchApp.get(`${API}/payments/?status=CONFIRMED&limit=100`, options);
        return ((balances.map(balance => balance.netValue * 100).reduce(getSum, 0)) / 100);
    }
    // ----------------------------------------------------------------------------------------------
    static getTransactions(range, pagination, options = { verbose: false }) {
        const { start, finish } = range;
        const { offset, limit } = pagination;
        return FetchApp.get(`${API}/transactions/?startDate=${start}&finishDate=${finish}&offset=${offset}&limit=${limit}`, options);
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------