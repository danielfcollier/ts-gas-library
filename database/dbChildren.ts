// // ------------------------------------------------------------------------------------------------
// class SettingsDB extends DBConnection {
//     // ----------------------------------------------------------------------------------------------
//     constructor() {
//       const dataObj = {
//         SheetId: DB.ID,
//         SheetName: DB.NAME,
//         Keys: DB.FIELD
//       };
  
//       super(dataObj);
//     }
//     // ----------------------------------------------------------------------------------------------
//     applyDBRules(dataMember) {
//       dataMember.TimeStamp = new Date();
//       //dataMember.FirstName = Lib.toProperCase(dataMember.apply(Lib.getFirstName));
//       //dataMember.Email = dataMember.Email.toLowerCase();
  
//       super.applyDBRules();
//     }
//     // ----------------------------------------------------------------------------------------------
//   }
//   // ------------------------------------------------------------------------------------------------