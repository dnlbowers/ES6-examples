/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     return a + b;
// }
// let sum = addTwoNumbers(3, 8);
// console.log(sum);
// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(5, 8);
console.log(sum);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a, b) => (a + b); Also valid

const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2(6 , 3);
console.log(sum2);

// Implicit Returns

// Implicit Returns For one parameter
const saySomething = message => console.log(message);
saySomething('Hello there!!!');

// Implicit Returns No parameter - Must use () to declare the function

const sayHello = () => console.log('hello');

sayHello()

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
        This is a multi line string
    </p>`
)

console.log(returnMultipleLines())