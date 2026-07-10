// //Object is collection of key value pairs (name,"jalaj")(key,value)
// //SYNTAX
const student = {
    name: "jalaj",
    age: 23, 
    marks: 94.4,
    city: "Mumbai"
};
console.log(student)

// add = student.name = "niraj"
// delete = delete student.age
// update = student.marks = 95.5
// access = console.log(student.city) 


// //NESTED OBJECTS
const classInfo = {
    aman: {
        grade : "A+",
        city : "Delhi"
    },
    jalaj: {
        grade: "O",
        city: "Mumbai"
    },
    niraj: {
        grade: "B",
        city: "Pune"
    }
}
console.log(classInfo)


//MATH OBJECT
/* Math.abs(-12)=12
   Math.pow(2,3)=8
   Math.floor(3.7)=3  //rounf off to lower value
   Math.ceil(3.2)=4  //round off to higher value
   Math.random()= //any value between 0 and 1
*/

//User enters a max number & then tries to guess a random generated number between 1 to max
const max = prompt("Enter the maximum number:  ");

let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number : ");

while(true){
    if(guess == "quit"){
        console.log("user quit");;
        break;
    }
    
    if(guess == random){
        console.log("U r right!Random number was", random);
        break;
    } else if(guess < random){
        guess = prompt("Your guess was too small")
    } else {
        guess = prompt("Your guess was too large")
    }
}