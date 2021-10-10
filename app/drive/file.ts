// --------------------------------------------------------------------------------------------------
interface Data {
    name: string;
    value: string;
}
// --------------------------------------------------------------------------------------------------
interface File {
    name: string;
    destination?: GoogleAppsScript.Drive.Folder;
    template: GoogleAppsScript.Drive.File;
}
// --------------------------------------------------------------------------------------------------
export default class Document {
    // ----------------------------------------------------------------------------------------------
    static create(templateId: string, file: File, data: Data[]) {
        const template = DriveApp.getFileById(templateId);
        file.template = template.makeCopy(file.name, file?.destination ?? DriveApp.getRootFolder());
        const fileId = file.template.getId();
        const document = DocumentApp.openById(fileId);
        let body = document.getBody();
        data.forEach(element => {
            body.replaceText(element.name, element.value);
        })
        document.saveAndClose();
        return fileId;
    }
    // ----------------------------------------------------------------------------------------------
    static remove(documentId: string) {
        DriveApp.getFileById(documentId).setTrashed(true);
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------