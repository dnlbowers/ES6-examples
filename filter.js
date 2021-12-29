/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */
// filter always returns an array

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];

  //return ppl over 21
  const oldEnough = people.filter(people => people.age >= 21);
  console.log(oldEnough)

  //only paul
  const paul = people.filter(p => p.name === 'Paul')[0] //can use indexing to return just one element of the array (i.e first if duplicate)
  console.log(paul)
  
  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

// Can use but convoluted
// const candidates = students.filter(student => {
//     let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
//     return strongSkills.length > 0; 
//  })  

const has5YrsExp = skill => skill.yrsExperience >= 5  
const hasStrongSkills = student => student.skills.filter(has5YrsExp).length;

const candidates = students.filter(hasStrongSkills)

console.log(candidates)

const names = candidates.map(person => person.name)
console.log(names)


