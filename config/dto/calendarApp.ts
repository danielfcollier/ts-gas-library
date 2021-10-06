// --------------------------------------------------------------------------------------------------
import Meeting from "../../apps/calendar/interface";
import Time from "../../lib/time";
// --------------------------------------------------------------------------------------------------
interface IBooking {
    date: Date;
    time: string;
    description: string;
    patient: {
        fullName: string;
    };
    notes: string;
    getBookingDuration: { (): number };
    getBookingLocation: { (): string };
    getBookingColor: { (): GoogleAppsScript.Calendar.EventColor };
}
// --------------------------------------------------------------------------------------------------
function meetingDTO(booking: IBooking): Omit<Meeting, 'id'> {
    const startTime = new Date(booking.date + booking.time);
    const endTime = Time.incrementHours(startTime, booking.getBookingDuration());

    return {
        title: `${booking.description} - ${booking.patient.fullName}`,
        startTime,
        endTime,
        options: {
            description: booking.notes,
            location: booking.getBookingLocation()
        },
        color: booking.getBookingColor()
    }
}
// --------------------------------------------------------------------------------------------------
export { meetingDTO };
// --------------------------------------------------------------------------------------------------