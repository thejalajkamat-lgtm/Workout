// /*                      ARRAY METHODS                    */
// //1.[FOREACH] forEach -> arr.forEach(some function definition or name)
// let arr = [1,2,3,4,5]
// let print = function(el){
//     console.log(el)
// }
// arr.forEach(print)

// //2.[MAP] new.Arr = arr.map(some function definition or name)
// let num = [6,7,8,9,0];
// let double = num.map(function(el){
//     return el*2
// })
// console.log(double)

// //3.[FILTER] new.Arr = arr.filter(some function definition or name)
// let nums = [2,3,1,5,6,2,7,8,9]
// let even = nums.filter((num) => (num%2==0));
// console.log(even)

// //4.[EVERY] Returns true if every element of array gives true for some function. Else returns false
// let arr1 = [1,2,3,4,5,6].every((el) =>(el%2==0));
// console.log(arr1)

// //5.[SOME] Returns true if at least one element of array gives true for some function. Else returns false
// let num1=[1,2,3,4].some((el)=>(el%2==0));
// console.log(num1)

// //6.[REDUCE] reduces the array to a single value
// let num2 = [1,2,3,4,5].reduce((res, el) => (res+el));
// console.log(num2)
//Use reduce to find maximum of an array
// let arr3 = [1,2,3,4,5,6]
// let max = arr3.reduce((max, el) => {
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max)


//DEFAULT PARAMETERS --> Giving a default value to the parameter
function sum(a,b=2){  //b=2 by default
    return a+b;
}
console.log(sum(1)) //3

//SPREAD OPERATOR --> used to spread the elements of an array or object
let array = [1,2,3]
let a = Math.min(...array) 
console.log(a)

//REST - Allows a function to take an indefinite number of arguments and bundle them in an array and syntax is same as array

//DESTRUCTURING - Stores values of array into multiple variables
let names = ["Jalaj", "Niraj", "Kamat", "Sheetal", "Hiremath"]
let [winner, runnerup, secondrunnerup, ...others] = names;
console.log(winner) //Jalaj
console.log(runnerup) //Niraj
console.log(...others) //Kamat Sheetal

const student = {
    name: "karan",
    age: 18,
    class: 12,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan123",
    password: "abcd"
}
let {username: user, password: secret, city="Mumbai"} = student;
