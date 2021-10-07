// ------------------------------------------------------------------------------------------------
// // ------------------------------------------------------------------------------------------------
// function doPost(e) {
//     // Init database connection
//     const tempDB = new TempDB();
  
//     // New dataMember
//     const tempMember = new Member(tempDB);
  
//     // Parse data
//     const dataReceiver = JSON.parse(e.postData.contents);
  
//     // Transfer data to dataMember
//     tempMember.init(dataReceiver);
  
//     // Post data at the database
//     tempDB.createDBRow(tempMember);
//   }
//   // ------------------------------------------------------------------------------------------------
/*
{
   1event1:1PAYMENT_RECEIVED1,
   1payment1:{
      1object1:1payment1,
      1id1:1pay_85198900497847211,
      1dateCreated1:12021-05-181,
      1customer1:1cus_0000210434301,
      1paymentLink1:null,
      1value1:360,
      1netValue1:358.01,
      1originalValue1:null,
      1interestValue1:0,
      1description1:1Consulta Presencial - Modalidade Beija-flor1,
      1billingType1:1BOLETO1,
      1confirmedDate1:12021-06-261,
      1status1:1RECEIVED1,
      1dueDate1:12021-06-151,
      1originalDueDate1:12021-06-151,
      1paymentDate1:12021-06-261,
      1clientPaymentDate1:12021-06-251,
      1invoiceUrl1:1https://www.asaas.com/i/85198900497847211,
      1invoiceNumber1:1572509511,
      1externalReference1:null,
      1deleted1:false,
      1anticipated1:false,
      1creditDate1:12021-06-261,
      1estimatedCreditDate1:null,
      1bankSlipUrl1:1https://www.asaas.com/b/pdf/85198900497847211,
      1lastInvoiceViewedDate1:null,
      1lastBankSlipViewedDate1:null,
      1discount1:{
         1value1:0.00,
         1limitDate1:null,
         1dueDateLimitDays1:0,
         1type1:1FIXED1
      },
      1fine1:{
         1value1:0.00,
         1type1:1FIXED1
      },
      1interest1:{
         1value1:0.00,
         1type1:1PERCENTAGE1
      },
      1postalService1:false
   }
}
*/


// // ------------------------------------------------------------------------------------------------
// function doPost(e) {
//   let outputResponse;

//   try {
//     // Init database connection
//     const settingsDB = new SettingsDB();

//     // New dataMember
//     const dbMember = new Member(settingsDB);

//     // Received data unparsed
//     const dataReceiver = e.postData.contents;

//     // Parsed data
//     const paymentContract = JSON.parse(dataReceiver);

//     // Define an Id for the dbMember
//     paymentContract.Id = paymentContract.sellerId;

//     // Transfer data to dbMember
//     dbMember.init(paymentContract);

//     // Post data at the database
//     [, row] = settingsDB.readDBId(paymentContract.sellerId, 'sellerId');
//     const isToUpdateDB = row !== -1 ? true : false;

//     if (isToUpdateDB) {
//       settingsDB.updateDBId(dbMember, paymentContract.sellerId, 'sellerId');
//       outputResponse = { status: 1, message: 'Updated!' };
//     }
//     else {
//       settingsDB.createDBRow(dbMember);
//       outputResponse = { status: 1, message: 'Created!' };
//     }
//   }
//   catch {
//     outputResponse = { status: 0, message: 'Error!' };
//   }

//   return ContentService
//     .createTextOutput(JSON.stringify(outputResponse))
//     .setMimeType(ContentService.MimeType.JSON);
// }
// // ------------------------------------------------------------------------------------------------