import AppCalendar from "../apps/calendar";
import Meeting from "../apps/calendar/interface";
import AppGmail from "../apps/gmail";
import EmailParams from "../apps/gmail/interface";
import Time from "../lib/time";

function documentTest() {
    const meeting: Omit<Meeting, 'id'> = {
        title: 'Consulta',
        startTime: new Date('2021-10-07T09:00:00'),
        endTime: new Date('2021-10-07T12:30:00'),
        color: CalendarApp.EventColor.RED
    };
    const event = CalendarApp.getEvents(meeting.startTime, meeting.endTime)[0];
    AppCalendar.update({ ...meeting, id: event.getId() });
    AppCalendar.remove({id: event.getId()});
}