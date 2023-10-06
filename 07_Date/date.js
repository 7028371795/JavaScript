let mydate=new Date();
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(typeof (mydate));

let myCreatedDate=new Date(2023,0,14);
console.log(myCreatedDate.toDateString());

//Time stamp

let timeStamp=Date.now();
console.log(timeStamp);
console.log(myCreatedDate.getTime());

//conver into sec

console.log(Math.floor(Date.now()/1000));

//Date common use methods
let newDate=new Date();

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getTime());