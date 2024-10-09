/*Write a function findMax(arr) that returns the largest number in an array*/

function findMax(arr) {
    return Math.max(...arr);
}

let arr = [9, 2, 3, 4, 5];
console.log(findMax(arr));