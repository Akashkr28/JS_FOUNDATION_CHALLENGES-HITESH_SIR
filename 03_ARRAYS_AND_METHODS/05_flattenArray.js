/*Write a function flattenArray(arr) that takes a nested array and returns a single flattened array */

function flattenArray(arr) {
    return arr.flat(Infinity);
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(flattenArray(arr));