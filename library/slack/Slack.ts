// --------------------------------------------------------------------------------------------------
import process from "../../.env";
import FetchApp from "../fetch/FetchApp";
// --------------------------------------------------------------------------------------------------
interface SlackMessage {
    channel: string;
    username: string;
    text: string;
    icon_emoji: string;
    icon_url?: string;
}
// --------------------------------------------------------------------------------------------------
enum TunaSlack {
    PluginsDev = '',
    
}
// --------------------------------------------------------------------------------------------------
export default class Slack {
    // ----------------------------------------------------------------------------------------------
    private static url: string = process.env.SLACK_URL;
    // ----------------------------------------------------------------------------------------------
    static bot(slackMessage?: SlackMessage) {
        const headers = {
            'content-type': 'application/json'
        };

        const payload: SlackMessage = {
            channel: '',
            username: 'bot test',
            text: 'It works!',
            icon_emoji: ':robot_face:'
        };

        return FetchApp.post(this.url, slackMessage ?? payload, { headers, verbose: true });
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------