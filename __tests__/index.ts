// --------------------------------------------------------------------------------------------------
// QUnit Test Samples
//
// https://script.google.com/home/projects/1cmwYQ6H7k6v3xNoFhhcASR8K2_JBJcgJ2W0WFNE8Sy3fAJzfE2Kpbh_M/
// --------------------------------------------------------------------------------------------------
interface QUnitParams {
    title: string;
    verbose: boolean;
    tests: Array<{ () }>;
}
// --------------------------------------------------------------------------------------------------
const QUnit = QUnitGS2.QUnit;
// --------------------------------------------------------------------------------------------------
function qunit(qunitParams: QUnitParams) {
    // ----------------------------------------------------------------------------------------------
    QUnitGS2.init();
    // ----------------------------------------------------------------------------------------------
    QUnit.config.title = qunitParams.title;
    // ----------------------------------------------------------------------------------------------
    qunitParams.tests.forEach((testFunction) => {
        testFunction();
    });
    // ----------------------------------------------------------------------------------------------
    QUnit.start();
    // ----------------------------------------------------------------------------------------------
    QUnit.testDone(details => {
        const result = {
            "Module name": details.module,
            "Test name": details.name,
            "Assertions": {
                "Total": details.total,
                "Passed": details.passed,
                "Failed": details.failed
            },
            "Skipped": details.skipped,
            "Todo": details.todo,
            "Runtime": details.runtime
        };
        if (qunitParams.verbose || details.total !== details.passed) {
            console.log(JSON.stringify(result, null, 2));
            console.log(
                `Total: ${details.total} Failed: ${details.failed} `
                + `Passed: ${details.passed} Runtime: ${details.runtime}`
            );
        }
    });
    // ----------------------------------------------------------------------------------------------
    console.log(`#### ${qunitParams.title} ####`);
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export { qunit, QUnitParams };
// --------------------------------------------------------------------------------------------------