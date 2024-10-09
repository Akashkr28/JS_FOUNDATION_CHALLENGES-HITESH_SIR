/*Write a function removeDuplicates(arr) that returns a new array with all duplicate values removed */

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);

}

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(removeDuplicates(arr));