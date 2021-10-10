// --------------------------------------------------------------------------------------------------
interface Meeting {
    id: string;
    title: string;
    color: GoogleAppsScript.Calendar.EventColor;
    startTime: Date;
    endTime: Date;
    options?: {
        description?: string;
        location?: string;
    };
}
// --------------------------------------------------------------------------------------------------
export default Meeting;
// --------------------------------------------------------------------------------------------------