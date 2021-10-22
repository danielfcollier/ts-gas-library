// --------------------------------------------------------------------------------------------------
import Meeting from './interface';
import process from '../../.env';
import CallError from '../../library/error/index';
// --------------------------------------------------------------------------------------------------
export default class AppCalendar {
    // ----------------------------------------------------------------------------------------------
    private static calendarParams: any = {
        title: process.env.CALENDAR_CLOSED_MEETING_TITLE,
        color: process.env.CALENDAR_CLOSED_MEETING_COLOR,
        pattern: new RegExp(process.env.CALENDAR_OPEN_MEETING_TITLE.toLowerCase()),
    };
    // ----------------------------------------------------------------------------------------------
    static create(meeting: Omit<Meeting, 'id'>) {
        const calendar = CalendarApp.getCalendarById(process.env.CALENDAR_APP_ID);
        const events = calendar.getEvents(meeting.startTime, meeting.endTime);

        if (events.length === 0) throw CallError.calendarApp();

        if (this.calendarParams.pattern.test(events[0].getTitle().toLowerCase())) {
            const eventId = events[0].getId();
            this.update({ ...meeting, id: eventId });
            return eventId;
        }
    }
    // ----------------------------------------------------------------------------------------------
    static update(meeting: Meeting) {
        const calendar = CalendarApp.getCalendarById(process.env.CALENDAR_APP_ID);
        const event = calendar.getEventById(meeting.id);
        event.setTitle(meeting.title);
        event.setTime(meeting.startTime, meeting.endTime);
        event.setColor(`${meeting.color}`);
        event.setDescription(meeting?.options?.description ?? '');
    }
    // ----------------------------------------------------------------------------------------------
    static remove(meeting: Pick<Meeting, 'id'>) {
        const calendar = CalendarApp.getCalendarById(process.env.CALENDAR_APP_ID);
        const event = calendar.getEventById(meeting.id);
        event.deleteEvent();
    }
    // ----------------------------------------------------------------------------------------------
    static blockEventsForDay(date: Date) {
        const calendar = CalendarApp.getCalendarById(process.env.CALENDAR_APP_ID);

        const action = (event, params) => {
            event.setTitle(params.title);
            event.setColor(params.color);
        };

        calendar.getEventsForDay(date)
            .filter(event => this.calendarParams.pattern.test(event.getTitle().toLowerCase()))
            .forEach(event => action(event, this.calendarParams));
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------