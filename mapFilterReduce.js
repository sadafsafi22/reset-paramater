

let numbers = [1,2,3,4,5,6,7];

let result = numbers.map(num => (num * 2) + 1);
console.log(result);

let mums = [1,2,3,4,5,6,7,8,9,10];
let evens = mums.filter(na => na % 2 != 0);
console.log(evens);

let Names = ['mike','jill','matt','jenny'];
let Names1 = Names.filter(name => name.charAt(0) === 'm');
console.log(Names1);

let  nums = [0,1,2,3,4];
let sum = nums.reduce((acc, curr) => acc + curr,0);
console.log(sum);