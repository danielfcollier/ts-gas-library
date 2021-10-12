// --------------------------------------------------------------------------------------------------
import testLibBrazillian from "./library/brazillian/__index__.test";
import testLibError from "./library/error/__index__.test";
import testLibFetch from "./library/fetch/__index__.test";
import testLibMath from "./library/math/__index__.test";
import testLibPayment from "./library/payment/__index__.test";
import testLibResources from "./library/resources/__index__.test";
import testLibShow from "./library/show/__index__.test";
import testLibTime from "./library/time/__index__.test";
import testLibTuna from "./library/tuna/__index__.test";
import testLibUtils from "./library/utils/__index__.test";
import testLibValidation from "./library/validation/__index__.test";
// --------------------------------------------------------------------------------------------------
import { qunit, QUnitParams } from "./settings/__config__.test";
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