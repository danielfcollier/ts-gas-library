// --------------------------------------------------------------------------------------------------
interface EmailParams {
    receipient: string;
    subject: string;
    body: string;
    options: {
        from: string;
        name: string;
        bcc?: string;
        replyTo?: string;
        htmlBody?: string;
        inlineImagens?: {
            logo: any;
        }
        attachments?: any;
    }
}
// --------------------------------------------------------------------------------------------------
export default EmailParams;
// --------------------------------------------------------------------------------------------------