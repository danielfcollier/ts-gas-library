// --------------------------------------------------------------------------------------------------
import Contact from "./interface";
// --------------------------------------------------------------------------------------------------
export default class AppContacts {
    // --------------------------------------------------------------------------------------------------
    static create(contactInfo: Contact) {
        const contact = ContactsApp.createContact(contactInfo.givenName, contactInfo.familyName, contactInfo.email);
        contact.addCustomField('externalId', contactInfo.externalId);
    }
    // ----------------------------------------------------------------------------------------------
    static update(contactInfo: Contact) {
        this.remove(contactInfo);
        this.create(contactInfo);
    }
    // ----------------------------------------------------------------------------------------------
    static remove(contactInfo: Pick<Contact, 'externalId'>) {
        const contact = ContactsApp.getContactsByCustomField(contactInfo.externalId, ContactsApp.ExtendedField.USER)[0];
        ContactsApp.deleteContact(contact);
    }
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------