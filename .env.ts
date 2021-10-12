// --------------------------------------------------------------------------------------------------
import { doctor } from "./.config.doctor";
import { payment, tuna } from "./.config.payment"
// --------------------------------------------------------------------------------------------------
const isSandbox = true;
// --------------------------------------------------------------------------------------------------
const process: {env: any} = {
    env: {
        LOG_LEVEL: 4,
        IS_SANDBOX: isSandbox,
        PAYMENT_ROOT_URL: isSandbox ? payment.sandbox.url : payment.production.url,
        PAYMENT_ACCESS_TOKEN: isSandbox ? payment.sandbox.token : payment.production.token,
        PAYMENT_FAKE_CARD: payment.sandbox.card,
        MAX_INSTALLMENT_COUNT: 3,
        GMT_LOCATION: 'America/Sao_Paulo',
        MILISECONDS_IN_A_DAY: (1000 * 60 * 60 * 24),
        CALENDAR_APP_ID: doctor.calendarAppId,
        CALENDAR_CLOSED_MEETING_COLOR: CalendarApp.EventColor.GRAY,
        CALENDAR_CLOSED_MEETING_TITLE: 'BLOQUEADO',
        CALENDAR_OPEN_MEETING_TITLE: 'LIVRE',
        TUNA_ACCOUNT: isSandbox ? tuna.sandbox.account : tuna.production.account,
        TUNA_APP_TOKEN: isSandbox ? tuna.sandbox.appToken : tuna.production.appToken,
        TUNA_PAYMENT_ROOT_URL: isSandbox ? tuna.sandbox.urlEngine : tuna.production.urlEngine,
        TUNA_MERCHANT_ROOT_URL: isSandbox ? tuna.sandbox.urlEngine : tuna.production.urlEngine,
        TUNA_TOKEN_ROOT_URL: isSandbox ? tuna.sandbox.urlToken : tuna.production.urlToken,
    }
};
// --------------------------------------------------------------------------------------------------
export default process;
// --------------------------------------------------------------------------------------------------