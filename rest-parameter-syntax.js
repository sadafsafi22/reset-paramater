/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call 
const sumAll = (a,b,c) => a+b+c;
let sum = sumAll(1,2,3);
console.log("Sum:", sum);

// Extra arguments are ignored

let sum2 = sumAll(1,2,3,4,5,6);
console.log("Sum:",sum2);

// Function using ...rest

let sumRest = (a,b,c, ...rest) => {
    let sum = a + b + c;
    for(let i of rest){
        sum +=i;
    }
    return sum;
}

let sumAll2 = sumRest(1,2,3,4,5,6,7,8,9);
console.log(sumAll2);