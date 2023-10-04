let score=33;

console.log(typeof score);
console.log(typeof (score));//typeof we can use two way

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let age="33abc";
let valueOfAge=Number(age);
console.log(typeof valueOfAge);
console.log(valueOfAge);

age=null;
 valueOfAge=Number(age);
console.log(typeof valueOfAge);
console.log(valueOfAge);

age=undefined;
 valueOfAge=Number(age);
console.log(typeof valueOfAge);
console.log(valueOfAge);

age=false;
 valueOfAge=Number(age);
console.log(typeof valueOfAge);
console.log(valueOfAge);

age=true;
 valueOfAge=Number(age);
console.log(typeof valueOfAge);
console.log(valueOfAge);


let isLogIn=1;
let valueOfIsLogIn=Boolean(isLogIn);
console.log(typeof isLogIn);
console.log(typeof valueOfIsLogIn);
console.log(valueOfIsLogIn);
