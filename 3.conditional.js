let age = 5;
if(age >= 18) {
    console.log("you can vote");
}
else {
    console.log("you canNOT vote");
}


let color
let mode = "dark-mode";
if(mode === "white-mode") {
    color = "black";
}
else{
    color = "white";
}
console.log(color);


let num = 10;
if(num % 2 === 0){
    console.log(num, "is even");
} else{
    console.log("odd")
}


//Ternary Operator(Compact if else)
let Age = 19;
let result = Age > 18? "adult" : "not adult";
console.log(result)

// alert("hello!");

//Take input and check if the num is divisible by 5 or not
let name = prompt("Enter a number: ");
console.log(name)
if(name%5 == 0){
    console.log("Number is multiple of 5")
}else{
      console.log("number is not multiple of 5")
}


//Write a code which can give grades to studets according to their scores:  80-100,A   70-89,B   60-69,C   50-59,D   0-49,F
let grade = prompt("Enter your grades: ");
console.log(grade)
if(grade>=80 && grade<=100){
    console.log("U get A grade!") 
}else if(grade>=70 && grade<80){
    console.log("U get B grade!")
}else if(grade>=60 && grade<70){
    console.log("U get C grade!")
}else if(grade>=50 && grade<60){
    console.log("U get D grade!")
}else if(grade>=0 && grade<50){
    console.log("U get F grade!")
}else{
    console.log("INVALID GRADE!")
}
23