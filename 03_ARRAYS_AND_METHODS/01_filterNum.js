/*Write a function filterNumbers(arr) that returns only numbers from a mixed array */

function filterNumbers(arr) {
    return arr.filter(num => typeof num === 'number');
}

let arr = [1, 2, "hello", 3, 4, "world", 5];
console.log(filterNumbers(arr));