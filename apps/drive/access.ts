// // removeEditor(email)
// // removeViewer(email)
// // setOwner(email)

// // addEditor(email)
// // addViewer(email)
// // getAccess(email)
// // getEditors()
// // getOwner()


// // removeEditor(email)
// // removeViewer(email)
// // setOwner(email)
// // getViewers()

// function sheetController() {
  
//     // Definitions
//     const dayMap = [
//       'Sunday',
//       'Monday',
//       'Tuesday',
//       'Wednesday',
//       'Thursday',
//       'Friday',
//       'Saturday'
//     ];
  
//     const userEmails = [
//       'andrecollier@gmail.com'
//     ];
  
//     // Access 
//     const fileId = '1hYmdLXUmEQm9fDLglZ7T2ON43sr5-RhDFzoXiv5q024';
//     const file = DriveApp.getFileById(fileId);
  
//     // Today
//     const today = new Date();
//     const day = dayMap[today.getDay()];
  
//     // Action
//     if (day === 'Satudary') {
//       userEmails.forEach(userEmail => {
//         file.addCommenter(userEmail);
//         Logger.log(`Acesso liberado: ${userEmail}`);
//       });
//     }
//     else if (day === 'Moday') {
//       userEmails.forEach(userEmail => {
//         file.removeCommenter(userEmail);
//         Logger.log(`Acesso removido: ${userEmail}`);
//       });
//     }
//   }
  