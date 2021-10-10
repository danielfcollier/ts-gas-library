// --------------------------------------------------------------------------------------------------
import process from '../../.env';
// --------------------------------------------------------------------------------------------------
export default class Time {
    // ----------------------------------------------------------------------------------------------
    static getDaysOfMonth(year: number, month: number) {
        const start = new Date(year, month, 1, 0, 0, 0, 0);
        const end = new Date(year, month + 1, 0, 0, 0, 0, 0);
        return { start, end };
    }
    // ----------------------------------------------------------------------------------------------
    static getLocalTimestamp(date: Date) {
        return Utilities.formatDate(date, process.env.GMT_LOCATION, "yyyy-MM-dd'T'HH:mm:ss");
    }
    // ----------------------------------------------------------------------------------------------
    static getTimeDiffInMinutes(date: Date, dateReference: Date) {
        return (24 * 60) * ((date.getTime() - dateReference.getTime()) / process.env.MILISECONDS_IN_A_DAY);
    }
    // ----------------------------------------------------------------------------------------------
    static getDayDiff(date: Date, dateReference: string) {
        return Math.floor((date.getTime() - (new Date(`${dateReference}T00:00:00`)).getTime()) / process.env.MILISECONDS_IN_A_DAY);
    }
    // ----------------------------------------------------------------------------------------------
    static getRelativeDate(daysOffset: number, time: { hours: number, minutes: number }) {
        const date = new Date();
        date.setDate(date.getDate() + daysOffset);
        date.setHours(time.hours);
        date.setMinutes(time.minutes);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    }
    // ----------------------------------------------------------------------------------------------
    static getDateFromPerson(dateString: string) {
        const [day, month, year] = dateString.split('/');
        return new Date(`${year}-${month}-${day}T00:00:00`);
    }
    // ----------------------------------------------------------------------------------------------
    // Credits: https://stackoverflow.com/questions/6356164/simple-javascript-date-math-not-really
    static incrementDateSystem(dateString: string, amount: number) {
        const date = new Date(`${dateString}T00:00:00`);
        date.setDate(date.getDate() + amount);
        return date;
    };
    // ----------------------------------------------------------------------------------------------
    static incrementHours(date: Date, amount: number) {
        const dateResult = new Date(date);
        const hours = Math.floor(((amount * 100) - (amount * 100) % 100) / 100);
        const minutes = 60 * (((amount * 100) % 100) / 100);

        dateResult.setHours(date.getHours() + hours);
        dateResult.setMinutes(date.getMinutes() + minutes);
        return dateResult;
    };
    // ----------------------------------------------------------------------------------------------
    static isLessThanDate(date: Date, dateMax: Date) {
        return (dateMax.getTime() - date.getTime()) > 0 ? true : false;
    }
    // ----------------------------------------------------------------------------------------------
    // This script is released to the public domain and may be used, modified and
    // distributed without restrictions. Attribution not necessary but appreciated.
    // Source: https://weeknumber.com/how-to/javascript
    //
    // Returns the ISO week of the date.
    // Week starts on Sunday
    static getWeek(date = new Date()) {
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        const week1 = new Date(date.getFullYear(), 0, 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / process.env.MILISECONDS_IN_A_DAY
            - 3 + (week1.getDay() + 6) % 7) / 7);
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------