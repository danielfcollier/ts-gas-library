// --------------------------------------------------------------------------------------------------
import Contact from "../../app/contacts/interface";
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