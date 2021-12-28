/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2 ,3];
let arr2 = arr1;

//since arr2 is not a copy 4 is added to both.
arr2.push(4);

console.log("first array", arr1)
console.log("second array", arr2)

// Copying an array
let arr3 = [4, 5, 6];

// ... symbolizes the spread operator and it copies the specified array into a whole new array
let arr4 = [...arr3];

//now I can add to the new array and leave the original array untouched
arr4.push(7);

console.log("third array", arr3)
console.log("fourth array", arr4)

// Copying an object
let obj1 = {a: 1, b: 2, c: 3 };
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5}

console.log("first object", obj1)
console.log("second object", obj2)
console.log("third object", obj3)

// Copying only part of an array/object
let arr5 = [...arr1, {...obj1 }, ...arr3, "x", "y", "z"];
console.log(arr5);
