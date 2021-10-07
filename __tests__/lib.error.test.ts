// --------------------------------------------------------------------------------------------------
import CallError from '../lib/error';
import ErrorTable from '../lib/error/config';

function divideThenRound(numerator, denominator) {
    return Math.round(numerator / denominator);
}
// --------------------------------------------------------------------------------------------------
function testLibError() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module("Basic tests", hooks => {

        QUnit.module("1st Division", hooks => {

            QUnit.test("simple numbers", function (assert) {
                assert.throws(
                    function () {
                        throw CallError.orderUpdate();
                    },
                    ErrorTable.OrderRefund
                );

            });

        });

        QUnit.module("2nd Division", hooks => {

            QUnit.test("simple numbers", function (assert) {
                assert.equal(divideThenRound(10, 2), 4, "whole numbers");
                assert.equal(divideThenRound(10, 4), 3, "decimal numbers");
            });

        });
    });

    QUnit.module("Advanced tests", hooks => {

        QUnit.module("1st Division", hooks => {

            QUnit.test("simple numbers", function (assert) {
                assert.equal(divideThenRound(10, 2), 5, "whole numbers");
                assert.equal(divideThenRound(10, 4), 3, "decimal numbers");
            });

        });

        QUnit.module("2nd Division", hooks => {

            QUnit.test("simple numbers", function (assert) {
                assert.equal(divideThenRound(10, 2), 5, "whole numbers");
                assert.equal(divideThenRound(10, 4), 3, "decimal numbers");
            });

        });
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibError;
// --------------------------------------------------------------------------------------------------