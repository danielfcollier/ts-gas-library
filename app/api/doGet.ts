// // ------------------------------------------------------------------------------------------------
// function doGet(e) {
//     let outputResponse;
//     let dbDataArray, row;
  
//     const sellerId = parseInt(e.parameter.sellerId, 10) ?? -1;
  
//     if (sellerId === -1) {
//       outputResponse = { code: -101, message: 'Invalid request!' };
//     }
//     else {
//       try {
//         // Init database connection
//         const settingsDB = new SettingsDB();
  
//         // Read database
//         [dbDataArray, row] = settingsDB.readDBId(sellerId);
  
//         if (row === -1) {
//           outputResponse = { code: -102, message: 'Error: sellerId not found!' };
//         }
//         else {
//           const data = settingsDB.getDataObj(dbDataArray);
//           delete data.TimeStamp;
//           delete data.Id;
//           data.registrationDate = data.registrationDate === '' ? null : Utilities.formatDate(new Date(data.registrationDate), 'GMT', 'yyyy-MM-dd');
          
//           // Temporary
//           data.transferKind = 'Automático';
//           data.transferPlan = '2 dias';
      
//           outputResponse = { data, code: 1, message: 'Success!' };
//         }
  
//       }
//       catch {
//         outputResponse = { code: -101, message: 'Error: Invalid request!' };
//       }
//     }
  
//     return ContentService
//       .createTextOutput(JSON.stringify(outputResponse))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
//   // ------------------------------------------------------------------------------------------------