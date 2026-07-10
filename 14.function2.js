// const student = {
//     name: "Jalaj",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg(){
//         console.log(this)
//         let avg = (this.eng+this.math+this.phy)/3; //this keyword refers to an object that is executing the current piece of code
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
//TRY AND CATCH - The try statement allows u to define a block of code to be tested for errors while it is being executed. The catch statement allows u to define a block of code to be executed, if an error occues in the try block 
// try {
//     console.log(a);
// } catch{
//     console.log("Variable doesn't exist")
// }

// // //MISCELLANEOUS TOPICS --> 
// // /*                    ARROW FUNCTION
// // const func = {arg1, arg2, .....}=>function definition*/
// // const sum = (a,b) => {
// //     console.log(a+b);
// // }
// // sum(2,3)

// // /* SET TIMEOUT FUNCTION - setTimeout(function, timeout) */
// // console.log("hi there!");
// // setTimeout( () =>{
// //     console.log("SEBI");
// // }, 1000);    //prints apna college in 4000ms = 4 seconds
// // console.log("Welcome to"); 

// // /* SET INTERVAL - setInterval(function, interval) */
// // let id = setInterval( () => {
// //     console.log("Apna college");  //Prints Apna College every 2 secs
// // }, 2000);
// // console.log(id);

// // //SCOPE IN JS (Global, block, parent, lexical)
// // --- GLOBAL SCOPE (Front Yard) ---
// const collegeName = "Government College"; 

// function floorOne() {
//     // --- PARENT SCOPE for the studyRoom function ---
//     let floorSecurityCode = "1234";

//     function studyRoom() {
//         // --- BLOCK SCOPE (Inside this specific room) ---
//         let privateNote = "Buy milk";

//         console.log(privateNote);       // ✅ Works (Current Scope)
//         console.log(floorSecurityCode); // ✅ Works (Lexical Scope: looking OUT to Parent)
//         console.log(collegeName);      // ✅ Works (Looking all the way OUT to Global)
//     }

//     studyRoom();
//     // console.log(privateNote);      // ❌ Error! (Parent cannot look INTO the child's room)
// }

// floorOne();

//Q Write an arrow function that returns the square of a number 'n'
// let n = prompt("Enter a number: ")
// const square = (n) => (n*n);
// console.log(square(n))

//Q Write a function that prints "Hello World" 5 times at interval of 2s each
// let id = setInterval( () => {
//     console.log("Hello World");  //Prints Apna College every 2 secs
// }, 2000);
// setTimeout(() => {
//     clearInterval(id);
// },10000)
