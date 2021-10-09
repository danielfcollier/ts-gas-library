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
    console.log(`######## ${qunitParams.title} ########`);
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
    QUnit.moduleStart(details => {
        console.log(`#### Module: ${details.name} > Tests: ${details.tests.length}`);
    });
    // ----------------------------------------------------------------------------------------------
    QUnit.testDone(details => {
        const result = `## Test: ${details.name} > Passed: ${details.passed} `
            + `> Failed: ${details.failed} > Average Runtime: ${Math.round(details.runtime / details.total)}`;

        if (qunitParams.verbose) {
            if (details.failed) {
                console.error(result);
                console.log(JSON.stringify(details.assertions, null, 2));
            }
            else {
                console.log(result);
            }
        }
        else if (details.total !== details.passed)
            console.error(result);
    });
    // ----------------------------------------------------------------------------------------------
    QUnit.moduleDone(details => {
        console.log(`>> Summary: ${details.name} > Failed: ${details.failed} > Passed: ${details.passed}`);
    });
    // ----------------------------------------------------------------------------------------------
    QUnit.done(details => {
        console.log('######## Tests Done ########');
        console.log(
            `> Total: ${details.total} > Passed: ${details.passed} `
            + `> Failed: ${details.failed} > Runtime: ${details.runtime}`
        );
    })
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export { qunit, QUnitParams };
// --------------------------------------------------------------------------------------------------