// --------------------------------------------------------------------------------------------------
// Performs the min or max search for the given array.
//
// Credits: https://www.w3schools.com/js/js_array_sort.asp
// --------------------------------------------------------------------------------------------------
function getArrayMin(array: any[]) {
    let len: number = array.length;
    let index: number;
    let min: number = Infinity;

    while (len--) {
        if (array[len] < min) {
            min = array[len];
            index = len;
        }
    }
    return [min, index];
}
// ----------------------------------------------------------------------------------------------
function getArrayMax(array: any[]) {
    let len: number = array.length;
    let index: number;
    let max: number = -Infinity;
    while (len--) {
        if (array[len] > max) {
            max = array[len];
            index = len;
        }
    }
    return [max, index];
}
// --------------------------------------------------------------------------------------------------
// Transpose a loaded column from a Spreadsheet.
//
// Credits: https://ramblings.mcpher.com/gassnippets2/transposing-sheet-data/
// --------------------------------------------------------------------------------------------------
function transposeArray(array: any[]) {
    return Object.keys(array.length ? array[0] : []).map(columnIndex => {
        return array.map(row => {
            return row[columnIndex];
        });
    });
}
// --------------------------------------------------------------------------------------------------
export {
    getArrayMin,
    getArrayMax,
    transposeArray
};
// --------------------------------------------------------------------------------------------------