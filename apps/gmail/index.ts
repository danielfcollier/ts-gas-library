// --------------------------------------------------------------------------------------------------
import EmailParams from './interface';
// --------------------------------------------------------------------------------------------------
interface Data {
    name: string;
    value: string;
}
// --------------------------------------------------------------------------------------------------
interface HtmlFile {
    source: string;
    template: string;
    body: string;
    data: Data[]
}
// --------------------------------------------------------------------------------------------------
export default class AppGmail {
    // ----------------------------------------------------------------------------------------------
    static sendMessage(emailParams: EmailParams) {
        const { receipient, subject, body, options } = emailParams;
        GmailApp.sendEmail(receipient, subject, body, options);
    }
    // ----------------------------------------------------------------------------------------------
    static sendExtended(emailParams: EmailParams, htmlFile?: HtmlFile, attachments?: any) {
        if (htmlFile) {
            htmlFile.template = HtmlService.createTemplateFromFile(htmlFile.source).evaluate().getContent();
            this.getHtmlBody(htmlFile);
        }

        const { receipient, subject, body, options } = emailParams;
        GmailApp.sendEmail(receipient, subject, body, { ...options, htmlBody: htmlFile.body });
    }
    // ----------------------------------------------------------------------------------------------
    private static getHtmlBody(htmlFile: HtmlFile) {
        htmlFile.data.forEach(element => {
            htmlFile.body = htmlFile.body.replace(new RegExp(`{${element.name}}`), element.value);
        })
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------