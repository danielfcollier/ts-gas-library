// --------------------------------------------------------------------------------------------------
import { qunit, QUnitParams } from "./__tests__";
import testLibError from "./__tests__/lib.error.test";
import testLibFetch from "./__tests__/lib.fetch.test";
import testLibShow from "./__tests__/lib.show.test";
import testLibTime from "./__tests__/lib.time.test";
import testLibUtils from "./__tests__/lib.utils.test";
import testLibValidation from "./__tests__/lib.validation.test";
// --------------------------------------------------------------------------------------------------
function runQunit() {
  // ------------------------------------------------------------------------------------------------
  const title = 'Test Coverage with QUnit for Apps Script <QUnitGS2>';
  const verbose = true;
  // ------------------------------------------------------------------------------------------------
  const qunitTestLib = [
    // testLibApi,
    // testLibBrazillian,
    // testLibCypher,
    testLibError,
    testLibFetch,
    // testLibLog,
    // testLibMath,
    // testLibPayment,
    // testLibResources,
    testLibShow,
    testLibTime,
    // testLibTuna,
    testLibUtils,
    testLibValidation
  ];
  // ------------------------------------------------------------------------------------------------
  const qunitTestApp = [
    // test1
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