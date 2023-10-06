let arr=[1,2,3,4,5,6];
console.log(arr);
//access array
console.log(arr[0]);//array index start from 0

let myArr=new Array(1,2,3,4,5,6);

//Array Method
myArr.push(7);
myArr.push(8);
myArr.pop();
myArr.unshift(10);
myArr.shift();
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(7));


// Type of Array
console.log(typeof(myArr));// Object

let newArr=myArr.join();
console.log(newArr);
console.log(typeof(newArr));// String


//slice and sp
console.log("A",myArr);

let new1=myArr.slice(1,3);
console.log(new1);
console.log("B",myArr);

let new2=myArr.splice(1,3);
console.log(new2);
console.log("C",myArr);

//concatination using push and concat method

let arr1=[1,2,3,4];
let arr2=[5,6,7,8];

// arr1.push(arr2);
// console.log(arr1);

let newArray=arr1.concat(arr2);// combine two or morw array and return new array without modifying existing array
console.log(newArray);

let realArray=[1,2,3,[4,5],6,7,[8,9,10],11];
console.log(realArray);
 
let newrealArray= realArray.flat(Infinity);
console.log(newrealArray);

//isArray
console.log(Array.isArray("vaibhav"));

//convert string to array using form 

console.log(Array.from("vaibhav"));


//of method
let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//retrun new array from set of element






