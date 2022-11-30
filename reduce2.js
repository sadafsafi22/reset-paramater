  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */
 const nums = [0,1,2,3,4];
 let sum2 = nums.reduce((acc,curr)=> acc + curr,0);
 console.log(sum2);



// Summing an array of numbers:



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
      yrsExperience: 5
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
        name: 'Ahmad',
        profession: 'Manager',
        yrsExperience: 20
      }
  ];
  
  // Totaling a specific object property
   
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience,0);
  console.log(totalExperience);
  
  
  // Grouping by a property, and totaling it too


  const experienceByProfession = teamMembers.reduce((acc,curr) => {
    let key = curr.profession;
    if(!acc[key]){
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;
    }
    return acc;
  }, {});

  console.log(experienceByProfession);