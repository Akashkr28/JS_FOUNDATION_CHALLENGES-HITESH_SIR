/*Task 5: Find the Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function */

const findLongestWord = (arr) => arr.reduce((longest, word) => word.length > longest.length ? word : longest, "");