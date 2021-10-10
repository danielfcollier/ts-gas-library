// // ------------------------------------------------------------------------------------------------
// class Lib {
//     // ----------------------------------------------------------------------------------------------
//     static getFirstName(dataMember) {
//       return fun_getFirstName(dataMember.FullName);
//     }
//     static toProperCase(string) {
//       return fun_toProperCase(string);
//     }
//     // ----------------------------------------------------------------------------------------------
//     static getAge(dataMember) {
//       return fun_getAge(dataMember.Birthday);
//     }
//     // ----------------------------------------------------------------------------------------------
//     static getDaysDiff(date) {
//       return Math.round((Date.now() - date.getTime()) / (CONSTS.MILLISECONDS_IN_A_DAY));
//     }
//     // ----------------------------------------------------------------------------------------------
//     static getLastRow(sheet) {
//       const rangeA1String = "A1:B";
  
//       const dataRange = sheet.getRange(rangeA1String).getValues();
  
//       let lastRowIndex;
  
//       for (let i = dataRange.length - 1; i >= 0; i--) {
//         lastRowIndex = i;
//         let row = dataRange[i];
//         let isBlank = row.every(function (c) { return c == ""; });
//         if (!isBlank) {
//           break;
//         }
//       }
  
//       const lastRow = lastRowIndex + 1;
  
//       return lastRow;
//     }
//     // ----------------------------------------------------------------------------------------------
//     static getModel(objectTemplate) {
//       const modelArray = [];
//       for (const property in objectTemplate) {
//         if (typeof objectTemplate[property] !== "object") {
//           modelArray.push(property);
//         }
//         else {
//           modelArray.push([property, this.getModel(objectTemplate[property])]);
//         }
//       }
  
//       return modelArray;
//     }
//     // ----------------------------------------------------------------------------------------------
//     static getFields(objectTemplate, offset = 2) {
//       const modelFields = this.getModel(objectTemplate)
//         .flat(4)
//         .filter(value => value !== '0')
//         .map((value, index) => {
//           return `${value}: ${index + offset}`
//         });
  
//       return modelFields;
//     }
//     // ----------------------------------------------------------------------------------------------
//   };
//   // ------------------------------------------------------------------------------------------------
//   function fun_getFirstName(fullName) {
//     return fullName.split(" ")[0];
//   }
//   // ------------------------------------------------------------------------------------------------
//   function fun_toProperCase(string) {
//     return string.replace(
//       /\w\S*/g,
//       function (txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//       }
//     );
//   }
//   // ------------------------------------------------------------------------------------------------
//   function fun_getAge(birthday) {
//     const ageDate = new Date(Date.now() - birthday.getTime());
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
//   // ------------------------------------------------------------------------------------------------