// --------------------------------------------------------------------------------------------------
import FetchApp from '.';
// --------------------------------------------------------------------------------------------------
function testLibFetch() {
    // ----------------------------------------------------------------------------------------------
    QUnit.module('./library/fetch > class FetchApp', hooks => {
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .request(method, options = {headers, verbose})', assert => {
            const expected = {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                    'access_token': '123abc'
                }
            };

            assert.deepEqual(
                FetchApp.request(
                    'get',
                    {
                        headers: {
                            'access_token': '123abc',
                            'content-type': 'application/json'
                        },
                        verbose: false
                    }),
                expected,
                'It builds an api http request header.'
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .get(url, options = {headers, verbose})', assert => {
            const expected = {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            };

            const options = {
                headers: {
                    'content-type': 'application/json'
                },
                verbose: false
            };

            assert.deepEqual(
                FetchApp.get('https://jsonplaceholder.typicode.com/todos/1', options),
                expected
            );
        });
        // ------------------------------------------------------------------------------------------
        QUnit.test('for method: .post(url, options = {headers, verbose})', assert => {
            const expected = {
                "success": "true"
            };

            const options = {
                headers: {
                    'content-type': 'application/json'
                },
                verbose: false
            };

            assert.deepEqual(
                FetchApp.post('https://reqbin.com/echo/post/json', options),
                expected
            );
        });
        // ------------------------------------------------------------------------------------------
    });
    // ----------------------------------------------------------------------------------------------
}
// --------------------------------------------------------------------------------------------------
export default testLibFetch;
// --------------------------------------------------------------------------------------------------