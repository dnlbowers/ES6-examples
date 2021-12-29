  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num*2);
}
console.log("for loop", results)
// Using map()
const multiplyByTwo = num => {
    return num*2
}

const mapResults = nums.map(multiplyByTwo);
console.log("verbose", mapResults)

// Simplified w/ map()
const simplified = nums.map(function (num) {return num*2});
console.log("simplified no arrow", simplified)


// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num*2)
console.log("simplified with arrow", arrow)

// With objects:
const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skill: 'JavaScript'
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skill: 'HTML'
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skill: 'CSS'
    },
  ];

const studentWithId = students.map(student => [student.name, student.id]);
console.log(studentWithId); 

const asObj = students.map(({id, name}) => ({id, name}));
console.log(asObj); 

// How to use map to add age property to each obj?
// const age = [32, 26, 28]
// const addAge = students.map.set(age, age)
// console.log(addAge)