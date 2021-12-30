/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];

//single line
let sum = nums.reduce((acc, curr) => acc + curr, 0); //0 is the first value of the accumulator not the index

// multi line to show hw it works
// let sum = nums.reduce((acc, curr) => {
//     console.log(
//         "accumulator:", acc,
//         "current value:", curr,
//         "Total:", acc + curr 
//     );
//     return acc + curr
// },0); //specifies the first value for the accumulator
console.log(sum);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    }
  ];
  
  // Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
console.log(totalExperience)


// Grouping by a property, and totaling it too
// expected result {developer: 12, designer: 4 }
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {}); // <--- Object to be started with is an empty object

// console.log(experienceByProfession);

// ***Challenges***
// create object with profession (key) : names of ppl in the role
let peopleInRole = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  let person = curr.name;
  if (!acc[key]) {
    acc[key] = person + " ";
  } else {
    acc[key] += person + " ";
  }
  return acc;
}, {});
console.log(peopleInRole);


// filter only developers and then reduce to only ones called ariel