/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];

//single line
// let sum = nums.reduce((acc, curr) => acc + curr, 0); 0 is the first value of the accumulator not the index

// multi line to show hw it works
let sum = nums.reduce((acc, curr) => {
    console.log(
        "accumulator:", acc,
        "current value:", curr,
        "Total:", acc + curr 
    );
    return acc + curr
},0); //specifies the first value for the accumulator
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
  
  
  // Grouping by a property, and totaling it too