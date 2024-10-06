const a = 18;
const b = 24;

// Addition of two value
function add (a, b) {
    return a + b;
}
console.log(add(a, b));

// Subtraction of small value from larger one
function sub (a, b) {
    return b - a;
}
console.log(sub(a, b));

// Multiplication of two value
function multiply (a, b) {
    return a * b;
}
console.log(mul(a, b));

// Divide larger value by smaller one
function divide (a, b) {
    return b / a;
}
console.log(divide(a, b));

// Increase value of a by 1
function increment (a) {
    return a + 1;
}
console.log(increment(a));

// Decrease value of b by 1
function decrement (b) {
    return b - 1;
}
console.log(decrement(b));

// Divide larger value by small to find the reminder
function remainder (a, b) {
    return b % a;
}
console.log(remainder(a, b));