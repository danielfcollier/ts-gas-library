// // ------------------------------------------------------------------------------------------------
// class DBConnection {
//     // ----------------------------------------------------------------------------------------------
//     constructor(dataObj) {
//       this.SheetId = dataObj.SheetId;
//       this.SheetName = dataObj.SheetName;
//       this.Keys = Object.keys(dataObj.Keys);
  
//       this.sheet = SpreadsheetApp.openById(this.SheetId).getSheetByName(this.SheetName);
//       this.lastRow = Lib.getLastRow(this.sheet);
//       this.maxColumns = this.sheet.getMaxColumns();
//     }
//     // ----------------------------------------------------------------------------------------------
//     getDataObj(dataArray) {
//       const data = {};
//       this.Keys.forEach((property, index) => data[property] = dataArray[index]);
//       return data;
//     }
//     // ----------------------------------------------------------------------------------------------
//     createDBRow(dataMember) {
//       this.sheet.appendRow(this.mapToArray(dataMember));
//       this.logAction('Create', dataMember);
//     }
//     // ----------------------------------------------------------------------------------------------
//     readDBRow(row) {
//       this.setDBRange(row);
//       return this.range.getValues()[0];
//     }
//     // ----------------------------------------------------------------------------------------------
//     readDBId(value, property = "Id") {
//       let row;
//       try {
//         if ((this.lastRow - 1) > 0) {
//           row = this.getRow(value, property);
//         }
//         else {
//           row = -1;
//         }
  
//         if (row === -1) { return [[], -1]; }
//         else {
//           return [this.readDBRow(row), row];
//         }
//       }
//       catch {
//         throw new Error(`Can't read > ${property}: ${value}`);
//       }
//     }
//     // ----------------------------------------------------------------------------------------------
//     readDB() {
//       const sheetRange = this.sheet.getRange(2, 1, this.lastRow - 1, this.maxColumns);
//       return sheetRange.getValues();
//     }
//     // ----------------------------------------------------------------------------------------------
//     updateDBRow(row, dataMember) {
//       this.setDBRange(row);
//       this.range.setValues([this.mapToArray(dataMember)]);
//       this.logAction('Update', dataMember);
//     }
//     // ----------------------------------------------------------------------------------------------
//     updateDBId(dataMember, value, property = "Id") {
//       try {
//         const row = this.getRow(value, property);
//         this.updateDBRow(row, dataMember);
//       }
//       catch {
//         throw new Error(`Can't update > ${property}: ${value}`);
//       }
//     }
//     // ----------------------------------------------------------------------------------------------
//     updateDB() {
//       const range = this.sheet.getRange(2, 1, this.lastRow - 1, this.maxColumns);
//       console.log(`### DB Update: ${this.SheetName.toUpperCase()} > ALL MEMBERS`);
//       return range.getValues();
//     }
//     // ----------------------------------------------------------------------------------------------
//     deleteDBRow(row, dataMember) {
//       if (dataMember ?? true) {
//         throw new Error(`Can't delete > row: ${row} > missing the dataMember!`)
//       }
//       this.sheet.deleteRow(row);
//       this.logAction('Delete', dataMember);
//     }
//     // ----------------------------------------------------------------------------------------------
//     deleteDBId(value, property = "Id") {
//       try {
//         const row = this.getRow(value, property);
//         this.sheet.deleteRow(row);
//       }
//       catch {
//         throw new Error(`Can't delete > ${property}: ${value}`);
//       }
//     }
//     // ----------------------------------------------------------------------------------------------
//     mapToArray(dataMember) {
//       return this.Keys.map(property => dataMember[property]);
//     }
//     // ----------------------------------------------------------------------------------------------
//     applyDBRules() {
//     }
//     // ----------------------------------------------------------------------------------------------
//     setDBRange(row) {
//       this.range = this.sheet.getRange(row, 1, 1, this.maxColumns);
//     }
//     // ----------------------------------------------------------------------------------------------
//     getRow(value, property) {
//       let row;
//       const dataBulk = this.readDB();
//       const propertyIndex = this.Keys.findIndex(key => key === property);
//       dataBulk.forEach((dataRow, index) => {
//         if (dataRow[propertyIndex] == value)
//           row = index + 2;
//       });
//       return row ?? -1;
//     }
//     // ----------------------------------------------------------------------------------------------
//     logAction(action, dataMember) {
//       console.log(`### DB ${action}: ${this.SheetName.toUpperCase()} # Id: ${dataMember.Id}`)
//     }
//     // ----------------------------------------------------------------------------------------------
//   }
//   // ------------------------------------------------------------------------------------------------