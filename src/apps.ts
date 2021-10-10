import AppCalendar from '../app/calendar';
import Meeting from '../app/calendar/interface';
import AppGmail from '../app/gmail';
import EmailParams from '../app/gmail/interface';
import Time from '../library/time';

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