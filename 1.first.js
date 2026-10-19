name = "Tony  Stark"; 
age = 14;             
price = 99.0;           
x = null;             
y = undefined;
isFollow = false;     
console.log(name);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);

console.log(" Welcome to hTML!");
{
    let a = 5;
    console.log(a);
}
{      
    let a = 10;
    console.log(a);
}
//let has block scope but var(not to be used) has global scope

/* This is a multi line comment for JS file */

//Variables are case sensitive
//Only letters, digits, underscore(_) and $ is allowed. (not even space)
//Only a letter, underscore(_) or $ should be 1st character
//Resserved words cannot be variable names

const student = {
    fullName: "Jalaj Kamat",
    age: 20,
    cgpa: 8.2,
    isPass: true,
}; 
student["age"] = student["age"] + 1 //making changes inside the object
student["name"] = "Rahul Sharma"
console.log(student["age"]);
console.log(student.cgpa);  // same as above
console.log(student.name);
console.log("hoes are horrible!!!")


//Primitive Datatypes(7) - Numbers, Strinng, Boolean, Undefined, Null, Bigint, Symbol
//Non Primitive(2)- Arrays, Objects
//camelCase, snake_case, PascalCase