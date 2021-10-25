// --------------------------------------------------------------------------------------------------
import testLibBrazillian from "./library/brazillian/__.test";
import testLibError from "./library/error/__.test";
import testLibFetch from "./library/fetch/__.test";
import testLibMath from "./library/math/__.test";
import testLibPayment from "./library/payment/__.test";
import testLibResources from "./library/resources/__.test";
import testLibShow from "./library/show/__.test";
import testLibTime from "./library/time/__.test";
import testLibTuna from "./library/tuna/__.test";
import testLibUtils from "./library/utils/__.test";
import testLibValidation from "./library/validation/__index__.test";
// --------------------------------------------------------------------------------------------------
import { qunit, QUnitParams } from "./settings/__config.test";
// --------------------------------------------------------------------------------------------------
function runQunit() {
  // ------------------------------------------------------------------------------------------------
  const title = 'Test Coverage with QUnit for Apps Script <QUnitGS2>';
  const verbose = true;
  // ------------------------------------------------------------------------------------------------
  const qunitTestLib = [
    testLibBrazillian,
    testLibError,
    testLibFetch,
    // testLibLog,
    testLibMath,
    testLibPayment,
    testLibResources,
    testLibShow,
    testLibTime,
    testLibTuna,
    testLibUtils,
    testLibValidation
  ];
  // ------------------------------------------------------------------------------------------------
  const qunitTestApp = [
    // testAppAnalytics
    // testAppApi,
    // testAppCalendar
    // testAppContacts
    // testAppDrive
    // testAppGmail
    // testAppHtml
    // testAppTrigger
  ];
  // ------------------------------------------------------------------------------------------------
  const qunitParams: QUnitParams = {
    title,
    verbose,
    tests: [
      ...qunitTestLib,
      ...qunitTestApp
    ]
  };
  // ------------------------------------------------------------------------------------------------
  qunit(qunitParams);
  // ------------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------