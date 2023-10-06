let newkey=Symbol("unique");


//literal
const user={
    name:"vaibhav",
    "full name":"Vaibhav Wankhede",
    age:26,
    email:"wankhdede@gmail.com",
    [newkey]:"symbol",

};

//Access object value 
console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);//if you initialise key as string in object that time only way to acceess value
console.log(user[newkey]);

//modify value

user.email="vaibhav@gmail.com";
console.log(user);


//create object using new key word

const Car=new Object();
console.log(Car);


Car.name="alto",
Car.brand="Tata",
Car.color="black";
console.log(Car);