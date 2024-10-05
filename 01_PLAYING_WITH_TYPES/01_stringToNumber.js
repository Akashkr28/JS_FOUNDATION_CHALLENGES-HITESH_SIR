/*Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number". */

function stringToNumber(input) {
    const number = Number(input);
    if (isNaN(number)) {
        return "Not a number";
    }
    return number;
}