// --------------------------------------------------------------------------------------------------
import Contact from "../../app/contacts/Contact";
import { IPatient } from "../interface/patient";
// --------------------------------------------------------------------------------------------------
function contactsDTO(patient: IPatient): Contact {
    return {
        givenName: patient.getFirstName(),
        familyName: patient.getLastName(),
        email: patient.email,
        externalId: patient.id
    }
}
// --------------------------------------------------------------------------------------------------
export { contactsDTO };
// --------------------------------------------------------------------------------------------------