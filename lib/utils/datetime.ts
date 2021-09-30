// // *****************************************************************************************
// // >>> Date
// // *****************************************************************************************
// function isValidDate(date) {
//     try {
//       let dateSplit;
  
//       if ((typeof date) === 'number') {
//         dateSplit = formatDate(date, 1).split("/");
//       }
//       else if ((typeof date) === 'string') {
//         dateSplit = date.split("/");
//       }
//       else {
//         return false;
//       }
  
//       let dd = Number(dateSplit[0]);
//       let mm = Number(dateSplit[1]);
//       let yyyy = Number(dateSplit[2]);
//       let year = (new Date).getUTCFullYear();
  
//       let statement = (1 <= dd) && (dd <= 31) && (1 <= mm) && (mm <= 12) && ((year - 1) <= yyyy) && (yyyy <= (year + 1));
  
//       if (statement) {
//         return true;
//       }
//       else {
//         return false;
//       }
//     }
//     catch (err) {
//       sendEmailToOwner_errorNotification("[CRM] Library > Data Transformations.js > isValidDate()");
//       return false;
//     }
//   }
//   // *****************************************************************************************
//   function formatDate(date, type = 1) {
  
//     switch (type) {
//       case 1:
//         return Utilities.formatDate(date, "GMT-03:00", "dd/MM/yyyy");
//       case 2:
//         return Utilities.formatDate(date, "GMT-03:00", "yyyy-MM-dd");
//       default:
//         return Utilities.formatDate(date, "GMT-03:00", "dd/MM/yyyy");
//     }
//     /*
//     let day = date.getDate().toString();
//     let dayF = (day.length == 1) ? '0' + day : day;
//     let month = (date.getMonth() + 1).toString(); //+1 pois no getMonth Janeiro começa com zero.
//     let monthF = (month.length == 1) ? '0' + month : month;
//     let yearF = date.getFullYear();
  
//     switch (type) {
//       case 1:
//         return dayF + "/" + monthF + "/" + yearF;
//       case 2:
//         return yearF + "-" + monthF + "-" + dayF;
//       default:
//         return dayF + "/" + monthF + "/" + yearF;
//     }
//     */
//   }
//   // *****************************************************************************************
//   // Credits: https://stackoverflow.com/questions/6356164/simple-javascript-date-math-not-really
//   function incrementDate(date, amount) {
//     let tmpDate = new Date(date);
//     tmpDate.setDate(tmpDate.getDate() + amount)
//     return tmpDate;
//   };
//   // *****************************************************************************************
//   function incrementHours(date) {
//     let tmpDate = new Date(date);
//     tmpDate.setHours(tmpDate.getHours() + TIMEZONE_OFFSET)
//     return tmpDate;
//   };
//   // *****************************************************************************************
//   function stringDateToDate(date, option = 1) {
  
//     let year, month, day;
//     let dateSplit;
  
//     switch (option) {
//       case 2:
//         dateSplit = date.split("-");
//         year = dateSplit[0];
//         month = dateSplit[1];
//         day = dateSplit[2];
//         break;
        
//       default:
//         dateSplit = date.split("/");
//         day = dateSplit[0];
//         month = dateSplit[1];
//         year = dateSplit[2];
//     }
  
//     return new Date(year + "-" + month + "-" + day + "T12:00:00Z")
//   }
//   // *****************************************************************************************
//   // This script is released to the public domain and may be used, modified and
//   // distributed without restrictions. Attribution not necessary but appreciated.
//   // Source: https://weeknumber.com/how-to/javascript
  
//   // Returns the ISO week of the date.
//   // Week starts on Sunday
//   Date.prototype.getWeek = function () {
//     let date = new Date(this.getTime());
//     date.setHours(0, 0, 0, 0);
//     // Thursday in current week decides the year.
//     date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
//     // January 4 is always in week 1.
//     let week1 = new Date(date.getFullYear(), 0, 4);
//     // Adjust to Thursday in week 1 and count number of weeks from date to week1.
//     return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
//         - 3 + (week1.getDay() + 6) % 7) / 7);
//   }
//   // *****************************************************************************************
//   // Returns the four-digit year corresponding to the ISO week of the date.
//   Date.prototype.getWeekYear = function () {
//     let date = new Date(this.getTime());
//     date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
//     return date.getFullYear();
//   }
//   // *****************************************************************************************