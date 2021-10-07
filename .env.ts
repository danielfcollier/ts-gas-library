// --------------------------------------------------------------------------------------------------
import { doctor } from "./.config.doctor";
import { payment } from "./.config.payment"
// --------------------------------------------------------------------------------------------------
const isSandbox = false;
// --------------------------------------------------------------------------------------------------
const process: any = {
    env: {
        LOG_LEVEL: 4,
        PAYMENT_ROOT_URL: isSandbox ? payment.sandbox.url : payment.production.url,
        PAYMENT_ACCESS_TOKEN: isSandbox ? payment.sandbox.token : payment.production.token,
        PAYMENT_FAKE_CARD: payment.sandbox.card,
        MAX_INSTALLMENT_COUNT: 3,
        GMT_LOCATION: 'GMT-03:00', // "America/Sao_Paulo"
        MILISECONDS_IN_A_DAY: 86400000,
        CALENDAR_APP_ID: doctor.calendarAppId,
        CALENDAR_CLOSED_MEETING_COLOR: CalendarApp.EventColor.GRAY,
        CALENDAR_CLOSED_MEETING_TITLE: 'BLOQUEADO',
        CALENDAR_OPEN_MEETING_TITLE: 'LIVRE'
    }
};
// --------------------------------------------------------------------------------------------------
export default process;
// --------------------------------------------------------------------------------------------------