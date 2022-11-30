
let nums = [1,2,3,4,5];
let results = [];

for(let num of nums){
    results.push(num * 2);
}

console.log(results);

const result2 = nums.map(num => num * 2);
console.log(result2);



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


const selectedList = students.map(student => [student.name, student.id]);
console.log(selectedList)

